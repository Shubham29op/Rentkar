import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import orderRoutes from "./routes/orderRoutes";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/orders", orderRoutes);

// Error-Handling Middleware
app.use((err: any, req: Request, res: Response, next: NextFunction): void => {
  console.error(err.stack);
  res.status(500).json({
    message: "An error occurred",
    error: err.message,
  });
});

export default app;
