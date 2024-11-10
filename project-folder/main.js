// Task 4: Create the Main Application
import { calculatePortfolioValue, getPortfolioAllocation } from "./portfolio.js";
import { Transaction } from "./transaction.js";

// Get Elements from the HTML
const portfolioValue = document.getElementById("totalPortfolio");
const allocationValues = document.getElementById("allocationPercentages");
const transactionList = document.getElementById("transactionExamples")

// Update TotalPortfolio Value
portfolioValue.innerHTML = `Total original asset value: $${calculatePortfolioValue()}`

// Utlize a for loop to list each asset's allocation
for (const asset of getPortfolioAllocation()) { 
    const listAssets = document.createElement('li'); // Create list element
    listAssets.innerHTML = `Asset ID: ${asset.id} <br />Percentage Allocation: ${Math.round(asset.percentageAllocation)}%`;
    allocationValues.appendChild(listAssets); // Append item to list
};

// Create transactions for examples
let transactionOne = new Transaction(1, "buy", 20);
let transactionTwo = new Transaction(2, "sell", 1);
let transactionThree = new Transaction(3, "sell", 15);

// Add transactions to array in order to use it in a for loop
const transactions = [transactionOne, transactionTwo, transactionThree];
for (const trans of transactions) {
    trans.executeTransaction(); // Run the transactions through the function to update quantities 
    const listTransactions = document.createElement('li');
    listTransactions.innerHTML = `Asset ID: ${trans.assetId}<br />Transaction Type: ${trans.type}<br />Quantity: ${trans.quantity}<br />Updated total asset value: ${calculatePortfolioValue()}`;
    transactionList.appendChild(listTransactions); // Append transaction to list
};