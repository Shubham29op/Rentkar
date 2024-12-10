import React, { useEffect, useState } from "react";
import axios from "axios";
import { Assignment } from "../../types/types";

const RecentAssignments: React.FC = () => {
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/assignments/metrics")
      .then((response) => setAssignments(response.data.recentAssignments))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white p-6 shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Recent Assignments</h2>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment.orderId} className="mb-2">
            <h3 className="font-bold">Order: {assignment.orderId}</h3>
            <p>Status: {assignment.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentAssignments;
