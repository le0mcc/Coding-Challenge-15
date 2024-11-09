// Tast 2: Create the Transaction Module
import { assetArray } from "./asset"; // import assets from asset.js

// Define and export a function that sums the total value of the portfolio by multiplying the price and quantity of each asset
export function calculatePortfolioValue() {
    // Utilize a for loop to get each asset
    for (const asset in assetArray) {
        // Use reduce method to total all the assets
        const totalPortfolioValue = assetArray.reduce((total, asset) => {
        const assetTotal = asset.price * asset.quantity;
        total += assetTotal;
        return total;
        },0);
    };
};