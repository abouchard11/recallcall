"use client";

import { useState, type FormEvent } from "react";
import { createPortal } from "react-dom";

type DemoDialogProps = {
  triggerLabel: string;
  className?: string;
};

export function DemoDialog({ triggerLabel, className }: DemoDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setSubmittedName(String(formData.get("name") ?? ""));
  }

  return (
    <>
      <button
        className={className}
        type="button"
        onClick={() => setIsOpen(true)}
      >
        {triggerLabel}
      </button>

      {isOpen
        ? createPortal(
            <div className="dialog-backdrop" onMouseDown={() => setIsOpen(false)}>
              <section
                aria-labelledby="demo-dialog-title"
                aria-modal="true"
                className="dialog-panel"
                role="dialog"
                onMouseDown={(event) => event.stopPropagation()}
              >
                <button
                  aria-label="Close demo form"
                  className="dialog-close"
                  type="button"
                  onClick={() => setIsOpen(false)}
                >
                  ×
                </button>

                {submittedName ? (
                  <div aria-label="Demo requested" className="dialog-success" role="status">
                    <span aria-hidden="true" className="success-mark">
                      ✓
                    </span>
                    <h2 id="demo-dialog-title">You’re on the list, {submittedName}.</h2>
                    <p>
                      We’ll use your practice email to arrange a 20-minute demo.
                      No sales maze, just the product and your recall math.
                    </p>
                    <button className="button button-primary" type="button" onClick={() => setIsOpen(false)}>
                      Done
                    </button>
                  </div>
                ) : (
                  <>
                    <p className="dialog-kicker">20 minutes · founder-led</p>
                    <h2 id="demo-dialog-title">See RecallCall in action</h2>
                    <p className="dialog-copy">
                      Bring a rough patient count—and, if you want to see Billy Be
                      Good, one of your existing take-home instruction sheets.
                    </p>

                    <form className="demo-form" onSubmit={handleSubmit}>
                      <label>
                        <span>Your name</span>
                        <input name="name" required type="text" />
                      </label>
                      <label>
                        <span>Practice email</span>
                        <input name="email" required type="email" />
                      </label>
                      <label>
                        <span>Practice name</span>
                        <input name="practice" required type="text" />
                      </label>
                      <label>
                        <span>What would you like to see?</span>
                        <select defaultValue="both" name="interest">
                          <option value="recallcall">RecallCall</option>
                          <option value="aftercare">Billy Be Good aftercare</option>
                          <option value="both">Both products</option>
                        </select>
                      </label>
                      <button className="button button-primary button-full" type="submit">
                        Request my demo
                      </button>
                    </form>
                  </>
                )}
              </section>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
