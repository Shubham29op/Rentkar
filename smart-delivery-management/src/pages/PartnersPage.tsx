import React, { useState } from "react";
import RegistrationForm from "../components/Partners/RegistrationForm";
import PartnerList from "../components/Partners/PartnerList";
import ProfileEdit from "../components/Partners/ProfileEdit";
import AreaManagement from "../components/Partners/AreaManagement";
import ShiftScheduler from "../components/Partners/ShiftScheduler";
import { DeliveryPartner } from "../types/types";

const PartnersPage: React.FC = () => {
  const [selectedPartner, setSelectedPartner] = useState<DeliveryPartner | null>(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-primary mb-6">Partners</h1>
      {/* Registration Form */}
      <RegistrationForm />
      <div className="mt-6">
        {/* Partner List */}
        <PartnerList />
      </div>
      {/* Optional Features */}
      {selectedPartner && (
        <div className="mt-6">
          <ProfileEdit partnerId={selectedPartner._id!} />
          <AreaManagement
            areas={selectedPartner.areas}
            onUpdate={(newAreas) =>
              setSelectedPartner({ ...selectedPartner, areas: newAreas })
            }
          />
          <ShiftScheduler
            shift={selectedPartner.shift}
            onUpdate={(newShift) =>
              setSelectedPartner({ ...selectedPartner, shift: newShift })
            }
          />
        </div>
      )}
    </div>
  );
};

export default PartnersPage;
