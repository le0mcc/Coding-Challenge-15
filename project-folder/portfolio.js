// Tast 2: Create the Transaction Module
import { assets } from "./asset.js"; // import assets from asset.js

// Define and export a function that sums the total value of the portfolio by multiplying the price and quantity of each asset
export function calculatePortfolioValue() {
    // Use reduce method to total all the assets
    const totalPortfolioValue = assets.reduce((total, asset) => {
        const assetTotal = asset.price * asset.quantity;
        total += assetTotal;
        return total;
    },0);
    return totalPortfolioValue;
};

// Explode a function that calculates the percentage allocation of each asset in the portfolio
export function getPortfolioAllocation() {
    const getTotal = calculatePortfolioValue()
    const percentageArray = [];
    for (const asset of assets) {
        const assetTotal = asset.price * asset.quantity;
        const percentage = assetTotal / getTotal;
        let assetDetails = {id: asset.id, percentageAllocation: percentage*100};
        percentageArray.push(assetDetails);
    };
    return percentageArray;
};