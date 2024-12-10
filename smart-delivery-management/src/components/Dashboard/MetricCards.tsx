import React from "react";

const MetricsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 shadow-md rounded">
        <h2 className="text-lg font-bold">Total Assignments</h2>
        <p className="text-2xl">123</p>
      </div>
      <div className="bg-white p-6 shadow-md rounded">
        <h2 className="text-lg font-bold">Success Rate</h2>
        <p className="text-2xl">95%</p>
      </div>
    </div>
  );
};

export default MetricsCards;
