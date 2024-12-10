import React from "react";
import OrdersDashboard from "../components/Orders/OrderDashboard";
import StatusTracking from "../components/Orders/StatusTracking";
//import AssignmentHistory from "../components/Orders/AssignmentHistory";

const OrdersPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-primary mb-6">Orders</h1>
      {/* Orders Dashboard */}
      <OrdersDashboard />
      {/* Status Tracking */}
      <div className="mt-6">
        <StatusTracking />
      </div>
      
    </div>
  );
};

export default OrdersPage;
