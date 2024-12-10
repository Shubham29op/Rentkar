"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderController_1 = require("../controllers/orderController");
const router = express_1.default.Router();
// Fetch all orders
router.get("/", orderController_1.getOrders);
// Create a new order
router.post("/", orderController_1.createOrder);
// Update the status of an order
router.put("/:id/status", orderController_1.updateOrderStatus);
// Assign an order to a delivery partner
router.post("/assign", orderController_1.assignOrder);
exports.default = router;
