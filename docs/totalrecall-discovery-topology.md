# TotalRecall first-wedge discovery topology

This is the operating graph for choosing the first workflow. It exists to prevent three failure modes:

1. treating desk research as customer evidence;
2. letting a model choose a market or send invitations; and
3. building a broad calling product before a narrow, governable job is proven.

The machine-readable source is [totalrecall-discovery-graph.json](totalrecall-discovery-graph.json). It is linted with the canonical agentic-graph linter. The evidence gate is executable: copy [the evidence template](totalrecall-interview-evidence.template.json) outside version control, replace only observed answers, then run `node scripts/verify-first-wedge.mjs /path/to/evidence.json`. A pass means only that a candidate may go to human review; it never selects a market automatically.

| Node | Depends on | Owner / closer | Completion evidence |
| --- | --- | --- | --- |
| Select workflow hypotheses | Current market scan | Script | Two priorities, one skeptical comparison, and falsifiers recorded. |
| Approve recruitment scope | Hypotheses | Human | Explicit channel, audience, and message approval before a single outreach send. |
| Send research invitations | Approved scope | Human | Six to eight invitations sent and minimally logged. |
| Conduct operator interviews | Invitations | Human | Six to eight anonymized interviews using the buyer guide. |
| Synthesize notes | Interviews | Model | Complete evidence cards; support and contradiction captured per workflow. |
| Verify evidence | Synthesis | Script | Scorecard checks sample count and every advance gate. |
| Revise synthesis | Evidence report | Model | Unsupported conclusions removed or evidence gaps made explicit. |
| Select first wedge | Revised synthesis | Human | One workflow advances only if all gates pass; otherwise candidates are parked/rejected. |
| Write pilot specification | Human decision | Model | One approved call reason, policy, timeline, escalation path, and 30-day metric. |
| Verify pilot specification | Pilot specification | Script | Required boundaries present; no unapproved irreversible action. |

## Stop and failure policy

- **No research authorization:** stop before outreach. Preparing materials is allowed; contacting people is not.
- **Fewer than three interviews for one workflow:** do not select it.
- **No 30-day metric or no bounded contact authority:** reject or park the workflow even if interviewees like the concept.
- **Synthesis fails its evidence check:** revise only the synthesis; never restart recruitment because a conclusion was weak.
- **No candidate clears the gates after the first wave:** record why and run a new hypothesis wave; do not default to the prior veterinary prototype or a generic dialer.

## Current live state

- Hypotheses are selected for research: distribution/industrial quote follow-through and MSP renewals/dormant-account follow-through, with contractor estimate recovery as a skeptical comparison.
- No research invitation has been sent and no interview has occurred under this project.
- The graph is therefore intentionally waiting at **Approve recruitment scope**. That is a human-owned consequential edge, not a model failure.
