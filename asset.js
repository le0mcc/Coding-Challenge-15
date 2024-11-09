// Task 1: Create the Asset Module
// Define and export an array of assets
export const assetArray = [
    { id: 1, name: "Corporate Bond", type: bond, price: 1000, quantity: 15 },
    { id: 2, name: "Savings", type: cash, price: 1000, quantity: 1 },
    { id: 3, name: "Common Stock", type: stocks, price: 100, quantity: 30 }
];

// Export a function that returns asset details based on the provided id
export function getAssetById(id) {
    return assetArray.find(asset => asset.id ===id); // returns id from array
}