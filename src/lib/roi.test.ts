import { describe, expect, it } from "vitest";
import { calculateRecallOpportunity } from "./roi";

describe("calculateRecallOpportunity", () => {
  it("turns the default 1,000-patient practice into the hand-checked revenue opportunity", () => {
    const result = calculateRecallOpportunity({
      activePatients: 1_000,
      lapsedPercent: 40,
      averageHygieneRevenue: 300,
    });

    expect(result).toEqual({
      patientsWaiting: 400,
      patientsReactivated: 20,
      recoveredRevenue: 6_000,
      monthlyInvestment: 499,
      roiMultiple: 12,
    });
  });

  it("rounds patient counts before calculating recoverable revenue", () => {
    const result = calculateRecallOpportunity({
      activePatients: 333,
      lapsedPercent: 33,
      averageHygieneRevenue: 225,
    });

    expect(result.patientsWaiting).toBe(110);
    expect(result.patientsReactivated).toBe(6);
    expect(result.recoveredRevenue).toBe(1_350);
    expect(result.roiMultiple).toBe(2.7);
  });
});
