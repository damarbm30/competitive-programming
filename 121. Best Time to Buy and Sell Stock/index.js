var maxProfit = function (prices) {
  if (prices.length < 2) return 0;

  let maxProfit = 0,
    buy = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buy) buy = prices[i];
    maxProfit = Math.max(maxProfit, prices[i] - buy);
  }

  return maxProfit;
};
