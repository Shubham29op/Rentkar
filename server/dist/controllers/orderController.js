"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignOrder = exports.updateOrderStatus = exports.createOrder = exports.getOrders = void 0;
const Order_1 = __importDefault(require("../models/Order"));
const Partner_1 = __importDefault(require("../models/Partner"));
// Fetch all orders with optional filters
const getOrders = async (req, res, next) => {
    try {
        const { status, area } = req.query;
        const query = {};
        if (status)
            query.status = status;
        if (area)
            query.area = area;
        const orders = await Order_1.default.find(query).sort({ createdAt: -1 });
        res.status(200).json(orders);
    }
    catch (error) {
        next(error); // Pass the error to error-handling middleware
    }
};
exports.getOrders = getOrders;
// Create a new order
const createOrder = async (req, res, next) => {
    try {
        const order = new Order_1.default(req.body);
        await order.save();
        res.status(201).json({ message: "Order created successfully", order });
    }
    catch (error) {
        next(error);
    }
};
exports.createOrder = createOrder;
// Update the status of an order
const updateOrderStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const order = await Order_1.default.findById(id);
        if (!order) {
            res.status(404).json({ message: "Order not found" });
            return;
        }
        order.status = status;
        order.updatedAt = new Date();
        await order.save();
        res.status(200).json({ message: "Order status updated", order });
    }
    catch (error) {
        next(error);
    }
};
exports.updateOrderStatus = updateOrderStatus;
// Assign an order to a partner
const assignOrder = async (req, res, next) => {
    try {
        const { orderId, partnerId } = req.body;
        const order = await Order_1.default.findById(orderId);
        if (!order) {
            res.status(404).json({ message: "Order not found" });
            return;
        }
        const partner = await Partner_1.default.findById(partnerId);
        if (!partner) {
            res.status(404).json({ message: "Partner not found" });
            return;
        }
        // Check if the partner can take more orders
        if (partner.currentLoad >= 3) {
            res.status(400).json({ message: "Partner is at full capacity" });
            return;
        }
        // Assign the order
        order.assignedTo = partnerId;
        order.status = "assigned";
        order.updatedAt = new Date();
        await order.save();
        // Update partner's current load
        partner.currentLoad += 1;
        await partner.save();
        res.status(200).json({ message: "Order assigned successfully", order });
    }
    catch (error) {
        next(error);
    }
};
exports.assignOrder = assignOrder;
