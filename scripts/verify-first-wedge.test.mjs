import assert from "node:assert/strict";
import test from "node:test";

import { verifyFirstWedge } from "./verify-first-wedge.mjs";

function interview(id, overrides = {}) {
  return {
    id,
    recurringPain: true,
    materialConsequence: true,
    relationshipContext: true,
    contactAuthority: true,
    approvedCallReason: true,
    escalationPath: true,
    humanOwner: true,
    toolGap: true,
    pilotMetric: true,
    pilotBaseline: true,
    unresolvedContradiction: false,
    ...overrides,
  };
}

test("advances only a workflow that meets every evidence gate", () => {
  const report = verifyFirstWedge({
    workflows: [
      {
        name: "industrial quote follow-through",
        interviews: [interview("R-01"), interview("R-02"), interview("R-03")],
      },
    ],
  });

  assert.deepEqual(report.advancingCandidates, ["industrial quote follow-through"]);
  assert.equal(report.workflows[0].decision, "advance-to-human-review");
  assert.equal(report.humanDecisionRequired, true);
});

test("rejects a candidate with unresolved contradictory evidence", () => {
  const report = verifyFirstWedge({
    workflows: [
      {
        name: "contractor estimate recovery",
        interviews: [
          interview("R-01"),
          interview("R-02", { unresolvedContradiction: true }),
          interview("R-03"),
        ],
      },
    ],
  });

  assert.deepEqual(report.advancingCandidates, []);
  assert.equal(report.workflows[0].decision, "do-not-select");
  assert.deepEqual(report.workflows[0].failedGates, ["noUnresolvedContradiction"]);
});

test("rejects incomplete interview evidence instead of inferring a favorable answer", () => {
  assert.throws(
    () =>
      verifyFirstWedge({
        workflows: [
          {
            name: "MSP renewal follow-through",
            interviews: [{ id: "R-01" }],
          },
        ],
      }),
    /recurringPain must be a boolean/,
  );
});
