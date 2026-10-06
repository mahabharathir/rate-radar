/**
 * Rate Radar - Client-Side Currency Converter Logic
 */

let currencyData = null;

async function initCurrencyConverter() {
  const fromInput = document.getElementById("conv-from-amount");
  const toInput = document.getElementById("conv-to-amount");
  const fromSelect = document.getElementById("conv-from-currency");
  const toSelect = document.getElementById("conv-to-currency");
  const swapBtn = document.getElementById("conv-swap-btn");
  const rateInfo = document.getElementById("conv-rate-info");

  if (!fromInput || !fromSelect || !toSelect) return;

  const data = await fetchData("currency.json");
  if (!data || !data.pairs) return;
  currencyData = data.pairs;

  // Rates against INR
  const ratesToInr = {
    INR: 1.0
  };

  currencyData.forEach(p => {
    ratesToInr[p.baseCode] = p.rate;
  });

  function calculate(fromSource = true) {
    const fromCode = fromSelect.value;
    const toCode = toSelect.value;

    const fromInrRate = ratesToInr[fromCode] || 1;
    const toInrRate = ratesToInr[toCode] || 1;

    // Cross exchange rate: 1 fromCode = (fromInrRate / toInrRate) toCode
    const exchangeRate = fromInrRate / toInrRate;

    if (fromSource) {
      const amount = parseFloat(fromInput.value) || 0;
      toInput.value = (amount * exchangeRate).toFixed(2);
    } else {
      const targetAmount = parseFloat(toInput.value) || 0;
      fromInput.value = (targetAmount / exchangeRate).toFixed(2);
    }

    if (rateInfo) {
      rateInfo.textContent = `1 ${fromCode} = ${exchangeRate.toFixed(4)} ${toCode} (Benchmark Reference Rate)`;
    }
  }

  fromInput.addEventListener("input", () => calculate(true));
  toInput.addEventListener("input", () => calculate(false));
  fromSelect.addEventListener("change", () => calculate(true));
  toSelect.addEventListener("change", () => calculate(true));

  if (swapBtn) {
    swapBtn.addEventListener("click", () => {
      const tempCode = fromSelect.value;
      fromSelect.value = toSelect.value;
      toSelect.value = tempCode;
      calculate(true);
    });
  }

  calculate(true);
}

document.addEventListener("DOMContentLoaded", () => {
  initCurrencyConverter();
});
