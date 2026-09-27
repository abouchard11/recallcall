export type RecallInputs = {
  activePatients: number;
  lapsedPercent: number;
  averageHygieneRevenue: number;
};

export type RecallOpportunity = {
  patientsWaiting: number;
  patientsReactivated: number;
  recoveredRevenue: number;
  monthlyInvestment: number;
  roiMultiple: number;
};

export function calculateRecallOpportunity(
  inputs: RecallInputs,
): RecallOpportunity {
  const patientsWaiting = Math.round(
    inputs.activePatients * (inputs.lapsedPercent / 100),
  );
  const patientsReactivated = Math.round(patientsWaiting * 0.05);
  const recoveredRevenue =
    patientsReactivated * inputs.averageHygieneRevenue;
  const monthlyInvestment = 499;

  return {
    patientsWaiting,
    patientsReactivated,
    recoveredRevenue,
    monthlyInvestment,
    roiMultiple: Number((recoveredRevenue / monthlyInvestment).toFixed(1)),
  };
}
