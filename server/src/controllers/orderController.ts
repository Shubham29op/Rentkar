import { Request, Response, NextFunction } from "express";
import Order from "../models/Order";
import Partner from "../models/Partner";

// Fetch all orders with optional filters
export const getOrders = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { status, area } = req.query;

    const query: any = {};
    if (status) query.status = status;
    if (area) query.area = area;

    const orders = await Order.find(query).sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    next(error); // Pass the error to error-handling middleware
  }
};

// Create a new order
export const createOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json({ message: "Order created successfully", order });
  } catch (error) {
    next(error);
  }
};

// Update the status of an order
export const updateOrderStatus = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await Order.findById(id);
    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }

    order.status = status;
    order.updatedAt = new Date();
    await order.save();

    res.status(200).json({ message: "Order status updated", order });
  } catch (error) {
    next(error);
  }
};

// Assign an order to a partner
export const assignOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { orderId, partnerId } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      res.status(404).json({ message: "Order not found" });
      return;
    }

    const partner = await Partner.findById(partnerId);
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
  } catch (error) {
    next(error);
  }
};
