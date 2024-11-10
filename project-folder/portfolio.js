// Tast 2: Create the Transaction Module
import { assets } from "./asset.js"; // import assets from asset.js

// Define and export a function that sums the total value of the portfolio by multiplying the price and quantity of each asset
export function calculatePortfolioValue() {
    // Use reduce method to total all the assets
    const totalPortfolioValue = assets.reduce((total, asset) => {
        // Total is price times quantity
        const assetTotal = asset.price * asset.quantity;
        total += assetTotal;
        return total;
    },0);
    return totalPortfolioValue; // This returns value for function
};

// Explode a function that calculates the percentage allocation of each asset in the portfolio
export function getPortfolioAllocation() {
    // Use former function 
    const getTotal = calculatePortfolioValue()
    // Use an array to return 
    const percentageArray = [];
    for (const asset of assets) {
        // Total is price times quantity
        const assetTotal = asset.price * asset.quantity;
        const percentage = assetTotal / getTotal;
        // Create an object of asset details to put into the returned array
        let assetDetails = {id: asset.id, percentageAllocation: percentage*100};
        percentageArray.push(assetDetails);
    };
    return percentageArray;
};
