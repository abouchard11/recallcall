# RecallCall prototype

## Current product direction

This repository contains a finished vertical prototype, not the final market
definition of the company. The overarching product is **TotalRecall**: a
memoryful calling agent that owns relationship follow-through. It remembers
prior conversations, promises, objections, deadlines, and next steps, then
makes the next approved call.

The veterinary/dental RecallCall and Billy Be Good experience remains a useful
reference artifact. It must not be treated as the selected market, current
product positioning, or evidence of customer demand. Product discovery now
starts with a non-veterinary, compliance-aware research process:

- [TotalRecall product discovery](docs/totalrecall-product-discovery.md)
- [Buyer interview guide](docs/totalrecall-buyer-interview-guide.md)

Responsive Next.js prototype for a paired veterinary-practice offer:
RecallCall reactivates overdue clients by phone, while Billy Be Good turns an
approved paper take-home sheet into a private, personalized digital aftercare
guide.

RecallCall is the primary recall-calling offer. Billy Be Good is presented as
an optional post-visit add-on that converts an approved take-home instruction
sheet into a private, personalized recovery guide.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Verify

```bash
npm test
npm run lint
npm run build
```

## Sales materials

- [Founding-practice proposal](docs/founding-practice-proposal.md)
- [Shareable proposal PDF](docs/founding-practice-proposal.pdf)
- [Proposal preview](docs/founding-practice-proposal-preview.png)

## What is implemented

- Responsive launch page with the supplied product, pricing, guarantee, and FAQ structure
- Interactive recall ROI calculator
- Expandable sample nightly briefing
- Billy Be Good paper-to-digital aftercare product section and sample guide
- Accessible demo-request dialog with validation and a local success state
- Desktop and mobile layouts with reduced-motion support
- Draft-safe `noindex` metadata while the brand name and domain remain provisional

## Before deployment

1. Clear the RecallCall and Billy Be Good names and domains before treating either brand as final.
2. Connect `DemoDialog` to the chosen scheduling or lead-capture backend. The current flow intentionally stops at a local confirmation state.
3. Remove `robots: { index: false }` only when the site is ready to be indexed.
4. Complete the BAA/vendor review before accepting real patient information. The form on this page does not request PHI.
5. Have each practice approve its digital aftercare template and escalation language before it is sent to patients.

## Stack

- Next.js 16
- React 19
- TypeScript
- Vitest + Testing Library
- Plain CSS design tokens and responsive layout
