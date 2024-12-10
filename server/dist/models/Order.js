"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const orderSchema = new mongoose_1.default.Schema({
    orderNumber: { type: String, required: true },
    customer: {
        name: { type: String, required: true },
        phone: { type: String, required: true },
        address: { type: String, required: true },
    },
    area: { type: String, required: true },
    items: [
        {
            name: { type: String, required: true },
            quantity: { type: Number, required: true },
            price: { type: Number, required: true },
        },
    ],
    status: { type: String, enum: ["pending", "assigned", "picked", "delivered"], default: "pending" },
    scheduledFor: { type: String },
    assignedTo: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Partner" },
    totalAmount: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
exports.default = mongoose_1.default.model("Order", orderSchema);
