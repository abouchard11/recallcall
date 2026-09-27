import {
  ArrowRight,
  Camera,
  Check,
  FileSpreadsheet,
  HeartPulse,
  MessageSquareText,
  Smartphone,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";
import { BriefingPlayer } from "@/components/briefing-player";
import { DemoDialog } from "@/components/demo-dialog";
import { RoiCalculator } from "@/components/roi-calculator";

const differentiators = [
  {
    number: "01",
    title: "A real conversation, not another reminder blast.",
    description:
      "The calling voice starts with your practice: warm, professional, or direct, plus the details your patients recognize. Every conversation stays inside the rules you approve.",
  },
  {
    number: "02",
    title: "Compliance is part of the workflow.",
    description:
      "Consent attestation, quiet hours, contact caps, immediate opt-out routing, and an audit trail sit in front of the model—not behind a policy page.",
  },
  {
    number: "03",
    title: "The guarantee has teeth.",
    description:
      "If RecallCall does not book 10 appointments from your list in the first 30 days, the month is refunded in full. Simple.",
  },
  {
    number: "04",
    title: "One narrow job, with a human finish.",
    description:
      "RecallCall works the list, handles routine questions, and advances booking conversations. Your office manager confirms the final slot.",
  },
];

const faqs = [
  {
    question: "How does RecallCall get our patient list?",
    answer:
      "V0 is CSV-based, so you can export a recall list from Dentrix, Eaglesoft, Open Dental, Curve, or a spreadsheet. Direct PMS integrations are planned after the pilot phase.",
  },
  {
    question: "How do you handle HIPAA requirements?",
    answer:
      "A signed Business Associate Agreement is required before real patient data enters the system. The workflow is designed around isolated practice data, HIPAA-eligible vendors, least-privilege access, and a complete audit trail.",
  },
  {
    question: "How is this different from Weave or Dental Intelligence?",
    answer:
      "Those platforms bundle phone, reviews, forms, payments, and more. RecallCall stays narrow: it works the recall list, advances conversations, and hands confirmable bookings to your team.",
  },
  {
    question: "What happens when a patient is ready to book?",
    answer:
      "The calling agent can keep the conversation moving within your rules and propose approved times. Nothing lands on the practice calendar until a human confirms it.",
  },
  {
    question: "Can I customize what the agent says?",
    answer:
      "Yes. Choose Warm, Professional, or Direct, then add a short practice-voice note. During onboarding, you approve a five-contact dry run before the campaign starts.",
  },
  {
    question: "What if a patient does not answer?",
    answer:
      "RecallCall follows the contact schedule you approve. An unanswered call can be followed by a brief SMS or email, without turning into an endless sequence.",
  },
  {
    question: "What is Billy Be Good?",
    answer:
      "It is the optional post-visit companion. We turn your existing take-home instruction sheet into a branded, day-by-day recovery guide with clear next steps and red-flag guidance for the patient.",
  },
  {
    question: "What exactly is the refund guarantee?",
    answer:
      "If the system does not book 10 appointments from your recall list in your first 30 days, that month is refunded in full.",
  },
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="RecallCall home">
          <span className="brand-mark" aria-hidden="true">
            R<span>C</span>
          </span>
          <span>RecallCall</span>
        </a>

        <nav aria-label="Primary navigation" className="primary-nav">
          <a href="#how-it-works">How it works</a>
          <a href="#aftercare">Aftercare</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </nav>

        <DemoDialog className="button button-small button-ghost" triggerLabel="Book a demo" />
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy">
            <p className="hero-eyebrow">
              for dental practices <span aria-hidden="true">·</span> founding-member pricing available
            </p>
            <h1>
              Your recall list isn’t going to <span>call itself.</span>
            </h1>
            <p className="hero-subhead">
              A 1,000-patient practice can have 400 patients sitting six months
              past due. RecallCall works that list in your practice’s voice,
              handles the routine conversation, and sends ready-to-book patients
              back to your team.
            </p>

            <div className="hero-actions">
              <DemoDialog
                className="button button-primary button-large"
                triggerLabel="Book a 20-minute demo"
              />
              <BriefingPlayer />
            </div>

            <p className="guarantee-line">
              <ShieldCheck aria-hidden="true" size={17} strokeWidth={1.8} />
              10 appointments in 30 days, or the month is refunded.
            </p>
          </div>

          <RoiCalculator />
        </section>

        <section aria-label="Product trust" className="trust-rail">
          <div className="section-shell trust-grid">
            <span><ShieldCheck aria-hidden="true" /> HIPAA-ready workflow</span>
            <span><FileSpreadsheet aria-hidden="true" /> Any-PMS CSV import</span>
            <span><MessageSquareText aria-hidden="true" /> Practice-approved calls</span>
            <span><Check aria-hidden="true" /> Cancel anytime</span>
          </div>
        </section>

        <section className="problem-section section-shell">
          <div className="section-label">THE MISSED WORK</div>
          <div className="problem-grid">
            <h2>
              You already paid to acquire them. <span>Bring them back.</span>
            </h2>
            <div className="problem-copy">
              <p>
                Front-desk teams do not have another afternoon to chase a recall
                report. Practice software can show you the list, but it does not
                work the list.
              </p>
              <p className="problem-thesis">
                RecallCall does one thing: it works your lapsed-patient list
                until your team has appointments to confirm.
              </p>
            </div>
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <div className="section-label">HOW IT WORKS</div>
                <h2>From dormant list to confirmable booking.</h2>
              </div>
              <p>Thirty-minute setup. Three deliberate steps.</p>
            </div>

            <div className="steps-list">
              <article className="step-row">
                <span className="step-number">01</span>
                <FileSpreadsheet aria-hidden="true" className="step-icon" />
                <div>
                  <h3>Sign the BAA and upload your list</h3>
                  <p>
                    Export first name, phone, and last visit date from any PMS.
                    We begin with a five-contact dry run that you approve.
                  </p>
                </div>
              </article>
              <article className="step-row">
                <span className="step-number">02</span>
                <SlidersHorizontal aria-hidden="true" className="step-icon" />
                <div>
                  <h3>Set the voice</h3>
                  <p>
                    Choose Warm, Professional, or Direct. Add one note about how
                    your practice speaks. The system carries that voice through
                    every conversation.
                  </p>
                </div>
              </article>
              <article className="step-row">
                <span className="step-number">03</span>
                <MessageSquareText aria-hidden="true" className="step-icon" />
                <div>
                  <h3>Let RecallCall call, then confirm the bookings</h3>
                  <p>
                    At 8 PM, the owner gets the day’s calls, responses,
                    bookings, and projected value. The office manager confirms
                    the final slots from one queue.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="briefing-section section-shell">
          <div className="briefing-copy-block">
            <div className="section-label">THE OWNER VIEW</div>
            <h2>The result arrives before the report.</h2>
            <p>
              No dashboard archaeology. Every night, the owner gets the work
              completed, bookings advanced, patients who opted out, and the
              value moving back into the schedule.
            </p>
          </div>

          <div className="phone-frame" aria-label="Sample mobile owner briefing">
            <div className="phone-topline">
              <span>8:00</span>
              <span aria-hidden="true">● ● ●</span>
            </div>
            <div className="phone-header">
              <span className="mini-mark">RC</span>
              <div>
                <strong>RecallCall</strong>
                <small>nightly briefing</small>
              </div>
            </div>
            <div className="phone-message">
              <p>
                Today: 22 patients messaged. <strong>5 booked</strong> — 3
                hygiene, 2 implant consults.
              </p>
              <div className="phone-stats">
                <span><small>Positive replies</small><strong>13</strong></span>
                <span><small>Opt-outs</small><strong>1</strong></span>
              </div>
              <div className="phone-value">
                <small>Projected booking value</small>
                <strong>$8,400</strong>
              </div>
            </div>
            <span className="phone-link">Open booking queue <ArrowRight aria-hidden="true" /></span>
          </div>
        </section>

        <section className="aftercare-section" id="aftercare">
          <div className="section-shell aftercare-grid">
            <div className="aftercare-copy">
              <div className="section-label">AFTER THE APPOINTMENT · BILLY BE GOOD</div>
              <h2>A paper handout becomes a living recovery guide.</h2>
              <p className="aftercare-lede">
                Billy Be Good began with one photo of a veterinarian’s take-home
                sheet. We turn the same material your practice already uses into
                a private, branded guide that changes with each day of recovery.
              </p>

              <div className="aftercare-steps" aria-label="How Billy Be Good works">
                <div>
                  <Camera aria-hidden="true" />
                  <span><strong>1. Send the sheet</strong>Your existing aftercare instructions are the source.</span>
                </div>
                <div>
                  <Smartphone aria-hidden="true" />
                  <span><strong>2. We make it personal</strong>The visit date drives the patient’s timeline.</span>
                </div>
                <div>
                  <HeartPulse aria-hidden="true" />
                  <span><strong>3. Patients know what is normal</strong>Clear next steps and red flags reduce anxious calls.</span>
                </div>
              </div>

              <DemoDialog
                className="button button-outline"
                triggerLabel="See both products"
              />
            </div>

            <div className="recovery-guide" aria-label="Sample extraction recovery guide">
              <div className="recovery-topbar">
                <span className="recovery-brand">Billy Be Good</span>
                <span>Private guide</span>
              </div>
              <div className="recovery-intro">
                <small>Extraction recovery</small>
                <h3>Day 3</h3>
                <p>You are in the early healing phase. Some swelling and tenderness can still be normal today.</p>
              </div>
              <div className="recovery-progress" aria-label="Recovery progress: day 3 of 7">
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <span className={day <= 3 ? "is-complete" : undefined} key={day}>{day}</span>
                ))}
              </div>
              <div className="recovery-card recovery-card-today">
                <span>Today</span>
                <strong>Keep the area clean and choose soft foods.</strong>
                <p>Follow the medication and rinsing instructions provided by your practice.</p>
              </div>
              <div className="recovery-card recovery-card-warning">
                <span>Call the practice if</span>
                <strong>Pain or swelling is getting worse instead of better.</strong>
              </div>
              <div className="recovery-footer">
                Personalized from the practice’s approved take-home instructions.
              </div>
            </div>
          </div>
        </section>

        <section className="difference-section">
          <div className="section-shell">
            <div className="difference-heading">
              <div className="section-label">WHY IT WORKS</div>
              <h2>One narrow job. Built all the way through.</h2>
            </div>
            <div className="difference-list">
              {differentiators.map((item) => (
                <article key={item.number} className="difference-row">
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing-section section-shell" id="pricing">
          <div className="pricing-heading">
            <div className="section-label">SIMPLE PRICING</div>
            <h2>Choose the same product. Pay for when you joined.</h2>
            <p>No setup fee. No annual contract. No hidden message math.</p>
          </div>

          <div className="pricing-grid">
            <article className="price-card price-card-featured">
              <div className="price-card-top">
                <span>Founding Member</span>
                <small>First 25 practices</small>
              </div>
              <div className="price"><strong>$199</strong><span>/mo</span></div>
              <p>Lifetime pricing for the practices that help shape v0.</p>
              <ul>
                <li><Check aria-hidden="true" /> Full product</li>
                <li><Check aria-hidden="true" /> Price locked for life</li>
                <li><Check aria-hidden="true" /> Direct line to the founder</li>
                <li><Check aria-hidden="true" /> 10-appointment guarantee</li>
              </ul>
              <DemoDialog className="button button-primary button-full" triggerLabel="Book a 20-minute demo" />
            </article>

            <article className="price-card">
              <div className="price-card-top">
                <span>Standard</span>
                <small>Practice 26 onward</small>
              </div>
              <div className="price"><strong>$499</strong><span>/mo</span></div>
              <p>Recall reactivation without the bundled-platform overhead.</p>
              <ul>
                <li><Check aria-hidden="true" /> Full product</li>
                <li><Check aria-hidden="true" /> Standard support</li>
                <li><Check aria-hidden="true" /> 10-appointment guarantee</li>
                <li><Check aria-hidden="true" /> One-click cancel</li>
              </ul>
              <DemoDialog className="button button-outline button-full" triggerLabel="Book a 20-minute demo" />
            </article>
          </div>

          <p className="pricing-fineprint">
            If fewer than 10 appointments are booked from your recall list in
            the first 30 days, the month is refunded in full.
          </p>

          <div className="aftercare-addon">
            <div>
              <span className="section-label">OPTIONAL AFTERCARE ADD-ON</span>
              <h3>Add Billy Be Good to the same walkthrough.</h3>
              <p>
                Bring one existing take-home sheet. We’ll show you how it becomes
                a private, branded recovery guide for every patient who receives
                that procedure.
              </p>
            </div>
            <DemoDialog className="button button-outline" triggerLabel="See both products" />
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="section-shell faq-grid">
            <div className="faq-heading">
              <div className="section-label">FAQ</div>
              <h2>Straight answers before the demo.</h2>
              <p>Anything else? Bring it to the 20-minute walkthrough.</p>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta section-shell">
          <div>
            <div className="section-label">YOUR LIST IS ALREADY THERE</div>
            <h2>Put it back to work.</h2>
          </div>
          <div className="final-cta-action">
            <p>See the workflow. Run your numbers. Decide in 20 minutes.</p>
            <DemoDialog className="button button-primary button-large" triggerLabel="Book a 20-minute demo" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-grid">
          <div>
            <a className="brand" href="#top">
              <span className="brand-mark" aria-hidden="true">R<span>C</span></span>
              <span>RecallCall</span>
            </a>
            <p>Total recall before the visit. Clear guidance after it.</p>
          </div>
          <div className="footer-links">
            <a href="#how-it-works">How it works</a>
            <a href="#aftercare">Aftercare</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <p className="footer-meta">© 2026 RecallCall<br />HIPAA-ready workflow · BAA required</p>
        </div>
      </footer>
    </>
  );
}
