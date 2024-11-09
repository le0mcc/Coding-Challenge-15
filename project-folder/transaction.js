// Task 3: Create the Transaction Module
import { assets, getAssetById } from "./asset.js";

// Define and export a class Transaction
export class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;
    };

    executeTransaction() {
        let asset = getAssetById(this.assetId)
        if (this.type === "sell") {
            if (asset.quantity - this.quantity>= 0) {
                asset.quantity -= this.quantity
            } else {
                throw new Error(`Insufficient quantity for sale of ${asset.name}`)
            }
        } else if (this.type === "buy") {
            if (this.quantity > 0) {
                asset.quantity += this.quantity;
            } else {
                console.log('None available.');
            };
        };
    };
};