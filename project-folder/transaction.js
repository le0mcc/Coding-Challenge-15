// Task 3: Create the Transaction Module
import { assets, getAssetById } from "./asset.js";

// Define and export a class Transaction
export class Transaction {
    // Initialize properties
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
    };

    // Utilize a function to change the quantity based on a 
    executeTransaction() {
        let asset = getAssetById(this.assetId)
        if (this.type === "sell") { // If method checks for a sell type
            // Updates asset quantity based on sale if there is enough assets available
            if (asset.quantity - this.quantity>= 0) {
                asset.quantity -= this.quantity 
            } else { // Throw an error if there is not enough assets available
                throw new Error(`Insufficient quantity for sale of ${asset.name}`)
            }
        } else if (this.type === "buy") { // Checks for a buy type
            if (this.quantity > 0) {
                asset.quantity += this.quantity; // Update quantity with bought assets
            } else {
                console.log('None available.');
            };
        } else {
            console.log("Invalid type. Must by 'buy' or 'sell'.") // Used in the case of invalid type
        }
    };
};