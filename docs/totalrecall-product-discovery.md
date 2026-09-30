# TotalRecall product discovery

## Product thesis

**TotalRecall is an AI calling agent that never forgets the relationship and never lets the next important call slip.**

The product owns approved follow-through. For each relationship it keeps an auditable timeline of prior conversations, promises, objections, deadlines, and next steps. It uses that context to decide whether a call is due, prepare the call within account rules, make or queue the call, record the outcome, and escalate to a human when it cannot safely continue.

Calling is the visible action. Durable contextual recall is the product advantage. Graph and memory infrastructure are implementation details, not the customer promise.

## Scope

| In scope | Not an initial assumption |
| --- | --- |
| Business follow-up where a prior relationship or explicit request creates context | Veterinary, dental, or any other single vertical as the company definition |
| A memory ledger for each contact and account | A generic dialer or bulk robocalling platform |
| Human escalation, contact suppression, and auditability | An autonomous agent that can negotiate, promise, collect payment, or give regulated advice |
| Measurable outcomes: reply, qualified next step, meeting, renewal, recovered estimate, or handoff | A broad AI receptionist claim before one job is proven |

## First-wedge constraint

The first wedge must have all five properties:

1. Recurring follow-up loss: missed calls or delayed callbacks create a material and visible commercial loss.
2. Enough context to matter: a caller must know relationship history; a generic script is not enough.
3. A measurable outcome: the buyer can measure a recovered meeting, quote, renewal, task completion, response, or handoff.
4. Appropriate calling authority: the business can supply a documented relationship, consent, or permitted B2B context, plus contact-suppression rules.
5. An operational owner: one role can approve call rules, exceptions, and success metrics.

Start with approved B2B follow-up or explicitly requested callbacks, not cold consumer telemarketing. This is a product-design constraint, not legal advice. The FTC describes Do-Not-Call, internal suppression, recordkeeping, calling-time, and prerecorded-message obligations for covered telemarketing. The FCC has also stated that AI-generated voices fall within artificial or prerecorded voice rules. See the [FTC Telemarketing Sales Rule guidance](https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule) and the [FCC AI-voice ruling announcement](https://docs.fcc.gov/public/attachments/DOC-400393A1.pdf).

## Candidate workflows to test, not markets to declare

| Workflow hypothesis | Why memory may matter | Initial reason to reject |
| --- | --- | --- |
| Commercial distributor quote follow-up | Sales history, substitutions, promised decision dates, and objections shape the next call | CRM cadence tools may already solve it well |
| Managed-service-provider renewal and dormant-opportunity follow-up | Account context spans recurring service, proposals, incidents, and stakeholders | Security and data-access requirements may lengthen a pilot |
| Commercial contractor bid and estimate recovery | A late decision, revision, or missing document may require an informed call | Work may be too episodic |
| Staffing-agency candidate and client reactivation | Prior fit, availability, role changes, and opt-outs matter | Consumer-contact and employment-policy risk may outweigh the wedge |
| Property-services vendor coordination | The agent can remember open work, commitments, access constraints, and next actions | Tenant-facing calls add consumer-compliance complexity |

No row above is a selected vertical. Research should eliminate candidates quickly rather than justify a favorite.

## Research objective

Identify the first customer segment in which missed or delayed follow-up creates recurring measurable loss, existing tools leave a real gap, and a memoryful calling agent can improve the outcome without unacceptable calling, data, or operational risk.

## Study plan

Run 6-8 semi-structured operator interviews over two weeks. Recruit two participants each from three or four workflow hypotheses. Prioritize people who own follow-up volume or can describe it in detail: sales managers, account managers, dispatch or operations leads, owners, or revenue-operations leaders.

The first 35 minutes investigate actual recent follow-up events. The final 10 minutes test a deliberately narrow TotalRecall concept. Do not pitch TotalRecall before understanding the workflow.

Collect a concrete recent relationship that went quiet, the timeline of calls and systems, the cost of no response, the context a caller needed, existing workarounds, contact authority and escalation boundaries, and a buyer-owned success metric for a pilot.

## Decision rule

Select a first wedge only when at least three interviews in the same workflow show all of the following:

- the problem occurs at least weekly;
- the buyer can name a measurable loss or missed opportunity;
- the next call requires relationship-specific context;
- the team has a permitted contact basis or can explicitly obtain one;
- a human owner will review policy and take exceptions; and
- the buyer agrees a 30-day limited-contact pilot would be useful.

If no segment meets the rule, do not build a broad calling agent. Run another interview wave with the strongest rejected hypothesis refined.

## Narrow pilot definition

The initial pilot supports one client, one approved call reason, a limited contact list, one success metric, and a human approval/escalation queue. It needs:

1. Contact and account import with data minimization.
2. An append-only relationship timeline and next-step state.
3. Approved call windows, contact suppression, and disclosure configuration.
4. A constrained script that retrieves only relevant prior context.
5. Human approval for sensitive transitions and a clear transfer path.
6. Outcome logging, consent behavior appropriate to the jurisdiction, and a pilot dashboard.

It does not need a broad CRM, autonomous calendar authority, payments, negotiation, clinical guidance, or unbounded agent memory.

## Repository direction

The existing RecallCall/Billy Be Good website remains a visual and workflow reference. New product work should build TotalRecall's neutral relationship timeline, approval policy, call queue, outcome model, and pilot operator interface. Do not extend veterinary/dental copy or publish the existing prototype as TotalRecall's market position.
