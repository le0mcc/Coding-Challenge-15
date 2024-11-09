// Task 4: Create the Main Application
import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio.js";
import { Transaction } from "./transaction.js";

const portfolioValue = document.getElementById("totalPortfolio");
const allocationValues = document.getElementById("allocationPercentages");
const transactionList = document.getElementById("transactionExamples")

portfolioValue.innerHTML = `Total original asset value: $${calculatePortfolioValue()}`
for (const asset of getPortfolioAllocation()) {
    const listAssets = document.createElement('li');
    listAssets.innerHTML = `Asset ID: ${asset.id} <br />Percentage Allocation: ${Math.round(asset.percentageAllocation)}%`;
    allocationValues.appendChild(listAssets);
};

let transactionOne = new Transaction(1, "buy", 20);
let transactionTwo = new Transaction(2, "sell", 1);
let transactionThree = new Transaction(3, "sell", 15);
const transactions = [transactionOne, transactionTwo, transactionThree];
for (const trans of transactions) {
    trans.executeTransaction();
    const listTransactions = document.createElement('li');
    listTransactions.innerHTML = `Asset ID: ${trans.assetId}<br />Transaction Type: ${trans.type}<br />Quantity: ${trans.quantity}<br />Updated total asset value: ${calculatePortfolioValue()}`;
    transactionList.appendChild(listTransactions);
};