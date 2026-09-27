# RecallCall landing page

Production-ready Next.js landing page for a paired veterinary-practice offer:
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
