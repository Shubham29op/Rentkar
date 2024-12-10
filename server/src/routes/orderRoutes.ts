import express from "express";
import {
  getOrders,
  createOrder,
  updateOrderStatus,
  assignOrder,
} from "../controllers/orderController";

const router = express.Router();

// Fetch all orders
router.get("/", getOrders);

// Create a new order
router.post("/", createOrder);

// Update the status of an order
router.put("/:id/status", updateOrderStatus);

// Assign an order to a delivery partner
router.post("/assign", assignOrder);

export default router;
