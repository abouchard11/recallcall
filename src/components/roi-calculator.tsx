"use client";

import { useMemo, useState } from "react";
import { calculateRecallOpportunity } from "@/lib/roi";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function RoiCalculator() {
  const [activePatients, setActivePatients] = useState(1_000);
  const [lapsedPercent, setLapsedPercent] = useState(40);
  const [averageHygieneRevenue, setAverageHygieneRevenue] = useState(300);

  const opportunity = useMemo(
    () =>
      calculateRecallOpportunity({
        activePatients,
        lapsedPercent,
        averageHygieneRevenue,
      }),
    [activePatients, lapsedPercent, averageHygieneRevenue],
  );

  return (
    <div className="roi-calculator">
      <div className="calculator-heading">
        <div>
          <span className="section-code">RECALL / 01</span>
          <h2>What is your quiet recall list worth?</h2>
        </div>
        <span className="live-indicator">
          <span aria-hidden="true" /> live estimate
        </span>
      </div>

      <div className="slider-stack">
        <label className="range-control">
          <span className="range-label">
            <span>Active patients</span>
            <output>{activePatients.toLocaleString()}</output>
          </span>
          <input
            aria-label="Active patients"
            max="5000"
            min="200"
            step="100"
            type="range"
            value={activePatients}
            onChange={(event) => setActivePatients(Number(event.target.value))}
          />
          <span className="range-bounds">
            <span>200</span>
            <span>5,000</span>
          </span>
        </label>

        <label className="range-control">
          <span className="range-label">
            <span>Lapsed 6+ months</span>
            <output>{lapsedPercent}%</output>
          </span>
          <input
            aria-label="Percent lapsed six months or more"
            max="60"
            min="20"
            step="1"
            type="range"
            value={lapsedPercent}
            onChange={(event) => setLapsedPercent(Number(event.target.value))}
          />
          <span className="range-bounds">
            <span>20%</span>
            <span>60%</span>
          </span>
        </label>

        <label className="range-control">
          <span className="range-label">
            <span>Average hygiene revenue</span>
            <output>{currency.format(averageHygieneRevenue)}</output>
          </span>
          <input
            aria-label="Average hygiene revenue"
            max="500"
            min="150"
            step="25"
            type="range"
            value={averageHygieneRevenue}
            onChange={(event) =>
              setAverageHygieneRevenue(Number(event.target.value))
            }
          />
          <span className="range-bounds">
            <span>$150</span>
            <span>$500</span>
          </span>
        </label>
      </div>

      <div className="roi-output" aria-live="polite">
        <div className="waiting-count">
          <span>Patients waiting</span>
          <strong>{opportunity.patientsWaiting.toLocaleString()}</strong>
        </div>
        <div className="revenue-output">
          <span>At a 5% reactivation rate</span>
          <strong>{currency.format(opportunity.recoveredRevenue)}</strong>
          <small>recoverable next month</small>
        </div>
        <div className="roi-multiple">
          <span>ROI on $499</span>
          <strong>{opportunity.roiMultiple}x</strong>
        </div>
      </div>
    </div>
  );
}
