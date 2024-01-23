# Best Time to Buy and Sell Stock

1. Initialize the buy price as the first element of the array
2. Loop the array, everytime the price is lower than buy, set the buy price to it
3. Else, compare both between the current maxProfit and current element/price on array - buy, get the higher value

We don't need to worry about the buy has the bigger index than sell since everytime a lower price is found, the buy will be set to the current price and the maxProfit will automatically set to zero (because when the buy is higher than zero, the current profit will be negative. The maxprofit will remain zero)
