import React from "react";
import MetricsCards from "../components/Dashboard/MetricCards";
import RecentAssignments from "../components/Dashboard/RecentAssignments";
//import PartnerAvailability from "../components/Dashboard/PartnerAvailability";
// Assuming ActiveOrdersMap will render a map
//import ActiveOrdersMap from "../components/Dashboard/ActiveOrdersMap";

const DashboardPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-primary mb-6">Dashboard</h1>
      {/* Key Metrics */}
      <MetricsCards />
      
      {/* Recent Assignments */}
      <div className="mt-6">
        <RecentAssignments />
      </div>
    </div>
  );
};

export default DashboardPage;
