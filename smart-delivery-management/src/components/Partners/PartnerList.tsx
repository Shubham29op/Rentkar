import React, { useEffect, useState } from "react";
import axios from "axios";
import { DeliveryPartner } from "../../types/types";

const PartnerList: React.FC = () => {
  const [partners, setPartners] = useState<DeliveryPartner[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/partners")
      .then((response) => setPartners(response.data))
      .catch(console.error);
  }, []);

  return (
    <div className="bg-white p-6 shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Partners List</h2>
      <ul>
        {partners.map((partner) => (
          <li key={partner._id} className="mb-2">
            <h3 className="text-lg font-bold">{partner.name}</h3>
            <p>Email: {partner.email}</p>
            <p>Status: {partner.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PartnerList;
