"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const partnerSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    status: { type: String, enum: ["active", "inactive"], default: "inactive" },
    currentLoad: { type: Number, default: 0 },
    areas: [{ type: String }],
    shift: {
        start: { type: String, required: true },
        end: { type: String, required: true },
    },
    metrics: {
        rating: { type: Number, default: 0 },
        completedOrders: { type: Number, default: 0 },
        cancelledOrders: { type: Number, default: 0 },
    },
});
exports.default = mongoose_1.default.model("Partner", partnerSchema);
