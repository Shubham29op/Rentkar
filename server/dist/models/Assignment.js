"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const assignmentSchema = new mongoose_1.default.Schema({
    orderId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Order", required: true },
    partnerId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Partner", required: true },
    timestamp: { type: Date, default: Date.now },
    status: { type: String, enum: ["success", "failed"], required: true },
    reason: { type: String },
});
exports.default = mongoose_1.default.model("Assignment", assignmentSchema);
