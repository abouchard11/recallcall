#!/usr/bin/env node

import fs from "node:fs";

const REQUIRED_BOOLEAN_FIELDS = [
  "recurringPain",
  "materialConsequence",
  "relationshipContext",
  "contactAuthority",
  "approvedCallReason",
  "escalationPath",
  "humanOwner",
  "toolGap",
  "pilotMetric",
  "pilotBaseline",
  "unresolvedContradiction",
];

function count(interviews, predicate) {
  return interviews.filter(predicate).length;
}

function validateInterview(interview, workflowName, index) {
  const label = `${workflowName}.interviews[${index}]`;
  if (!interview || typeof interview !== "object" || Array.isArray(interview)) {
    throw new Error(`${label} must be an object`);
  }
  if (typeof interview.id !== "string" || !interview.id.trim()) {
    throw new Error(`${label}.id must be a non-empty string`);
  }
  for (const field of REQUIRED_BOOLEAN_FIELDS) {
    if (typeof interview[field] !== "boolean") {
      throw new Error(`${label}.${field} must be a boolean`);
    }
  }
}

export function verifyFirstWedge(evidence) {
  if (!evidence || typeof evidence !== "object" || Array.isArray(evidence)) {
    throw new Error("evidence must be an object");
  }
  if (!Array.isArray(evidence.workflows) || evidence.workflows.length === 0) {
    throw new Error("evidence.workflows must be a non-empty array");
  }

  const workflows = evidence.workflows.map((workflow, workflowIndex) => {
    const label = `workflows[${workflowIndex}]`;
    if (!workflow || typeof workflow !== "object" || Array.isArray(workflow)) {
      throw new Error(`${label} must be an object`);
    }
    if (typeof workflow.name !== "string" || !workflow.name.trim()) {
      throw new Error(`${label}.name must be a non-empty string`);
    }
    if (!Array.isArray(workflow.interviews)) {
      throw new Error(`${label}.interviews must be an array`);
    }

    workflow.interviews.forEach((interview, index) =>
      validateInterview(interview, workflow.name, index),
    );

    const interviews = workflow.interviews;
    const gates = {
      minimumSample: interviews.length >= 3,
      recurringPainAndConsequence:
        count(interviews, (item) => item.recurringPain && item.materialConsequence) >= 3,
      relationshipSpecificContext:
        count(interviews, (item) => item.relationshipContext) >= 3,
      safeOperatingBoundary:
        count(
          interviews,
          (item) =>
            item.contactAuthority &&
            item.approvedCallReason &&
            item.escalationPath &&
            item.humanOwner,
        ) >= 2,
      toolGap: count(interviews, (item) => item.toolGap) >= 2,
      measurablePilot:
        count(interviews, (item) => item.pilotMetric && item.pilotBaseline) >= 2,
      noUnresolvedContradiction: !interviews.some(
        (item) => item.unresolvedContradiction,
      ),
    };

    const failedGates = Object.entries(gates)
      .filter(([, passed]) => !passed)
      .map(([gate]) => gate);

    return {
      workflow: workflow.name,
      interviewCount: interviews.length,
      gates,
      failedGates,
      decision:
        failedGates.length === 0
          ? "advance-to-human-review"
          : "do-not-select",
    };
  });

  return {
    schemaVersion: 1,
    workflows,
    advancingCandidates: workflows
      .filter((workflow) => workflow.decision === "advance-to-human-review")
      .map((workflow) => workflow.workflow),
    humanDecisionRequired: true,
  };
}

function main() {
  const [file] = process.argv.slice(2);
  if (!file) {
    process.stderr.write("usage: node scripts/verify-first-wedge.mjs <evidence.json>\n");
    process.exitCode = 2;
    return;
  }

  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    process.stderr.write(`Could not read evidence: ${error.message}\n`);
    process.exitCode = 2;
    return;
  }

  try {
    const report = verifyFirstWedge(parsed);
    process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
    process.exitCode = report.advancingCandidates.length > 0 ? 0 : 1;
  } catch (error) {
    process.stderr.write(`Invalid evidence: ${error.message}\n`);
    process.exitCode = 2;
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
