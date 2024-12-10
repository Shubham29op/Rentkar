import React, { useEffect, useState } from "react";
import axios from "axios";
import { Order } from "../../types/types";

const StatusTracking: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders")
      .then((response) => setOrders(response.data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white p-6 shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Status Tracking</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id} className="mb-2">
            <h3 className="font-bold">{order.orderNumber}</h3>
            <p>Status: {order.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StatusTracking;
