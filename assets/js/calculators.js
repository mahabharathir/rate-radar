/**
 * Rate Radar - Loan Eligibility and EMI Calculators
 */

function initLoanEligibilityCalculator() {
  const incomeInput = document.getElementById("calc-income");
  const existingEmiInput = document.getElementById("calc-existing-emi");
  const interestInput = document.getElementById("calc-interest");
  const tenureInput = document.getElementById("calc-tenure");

  // Output fields
  const outMaxLoan = document.getElementById("calc-out-loan");
  const outMaxEmi = document.getElementById("calc-out-emi");
  const outTotalPayment = document.getElementById("calc-out-total");
  const outTotalInterest = document.getElementById("calc-out-interest");

  if (!incomeInput || !outMaxLoan) return;

  function calculateEligibility() {
    const monthlyIncome = parseFloat(incomeInput.value) || 0;
    const existingEmi = parseFloat(existingEmiInput.value) || 0;
    const annualRate = parseFloat(interestInput.value) || 8.5;
    const tenureYears = parseFloat(tenureInput.value) || 20;

    // Standard bank FOIR (Fixed Obligation to Income Ratio) benchmark: 50% of monthly income
    const maxAllowedTotalEmi = monthlyIncome * 0.50;
    const availableEmi = Math.max(0, maxAllowedTotalEmi - existingEmi);

    const monthlyRate = (annualRate / 12) / 100;
    const numberOfMonths = tenureYears * 12;

    let maxLoanAmount = 0;
    let totalRepayment = 0;
    let totalInterest = 0;

    if (availableEmi > 0 && monthlyRate > 0 && numberOfMonths > 0) {
      // Present Value formula: PV = EMI * [( (1+r)^n - 1 ) / ( r * (1+r)^n )]
      const factor = Math.pow(1 + monthlyRate, numberOfMonths);
      maxLoanAmount = availableEmi * ((factor - 1) / (monthlyRate * factor));
      totalRepayment = availableEmi * numberOfMonths;
      totalInterest = Math.max(0, totalRepayment - maxLoanAmount);
    }

    outMaxLoan.textContent = formatRupees(Math.round(maxLoanAmount), 0);
    outMaxEmi.textContent = formatRupees(Math.round(availableEmi), 0) + " / mo";

    if (outTotalPayment) {
      outTotalPayment.textContent = formatRupees(Math.round(totalRepayment), 0);
    }
    if (outTotalInterest) {
      outTotalInterest.textContent = formatRupees(Math.round(totalInterest), 0);
    }
  }

  [incomeInput, existingEmiInput, interestInput, tenureInput].forEach(el => {
    if (el) {
      el.addEventListener("input", calculateEligibility);
    }
  });

  // Sliders link to number displays if present
  const rangeIncome = document.getElementById("calc-income-range");
  if (rangeIncome) {
    rangeIncome.addEventListener("input", (e) => {
      incomeInput.value = e.target.value;
      calculateEligibility();
    });
    incomeInput.addEventListener("input", (e) => {
      rangeIncome.value = e.target.value;
    });
  }

  const rangeTenure = document.getElementById("calc-tenure-range");
  if (rangeTenure) {
    rangeTenure.addEventListener("input", (e) => {
      tenureInput.value = e.target.value;
      calculateEligibility();
    });
    tenureInput.addEventListener("input", (e) => {
      rangeTenure.value = e.target.value;
    });
  }

  calculateEligibility();
}

document.addEventListener("DOMContentLoaded", () => {
  initLoanEligibilityCalculator();
});
