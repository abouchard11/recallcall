"use client";

import { useState } from "react";

export function BriefingPlayer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="briefing-player">
      <button
        aria-controls="sample-briefing"
        aria-expanded={isOpen}
        className="briefing-trigger"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true" className="play-icon">
          {isOpen ? "Ⅱ" : "▶"}
        </span>
        Play sample nightly briefing
      </button>

      {isOpen ? (
        <div
          aria-label="Sample nightly briefing"
          className="briefing-message"
          id="sample-briefing"
          role="region"
        >
          <div className="briefing-meta">
            <span>RecallCall</span>
            <span>8:00 PM</span>
          </div>
          <p>
            Today: 22 patients contacted. <strong>5 booked</strong> — 3 hygiene,
            2 implant consults. 8 said “not now, keep me on the list.” 1 asked
            to be removed.
          </p>
          <div className="briefing-total">
            <span>Projected booking value</span>
            <strong>$8,400</strong>
          </div>
        </div>
      ) : null}
    </div>
  );
}
