import React, { useState } from "react";

const AreaManagement: React.FC<{ areas: string[]; onUpdate: (areas: string[]) => void }> = ({ areas, onUpdate }) => {
  const [newArea, setNewArea] = useState("");

  const handleAddArea = () => {
    if (newArea.trim()) {
      onUpdate([...areas, newArea.trim()]);
      setNewArea("");
    }
  };

  const handleRemoveArea = (area: string) => {
    onUpdate(areas.filter((a) => a !== area));
  };

  return (
    <div className="bg-white p-6 shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Manage Areas</h2>
      <ul>
        {areas.map((area, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>{area}</span>
            <button
              className="text-red-500"
              onClick={() => handleRemoveArea(area)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={newArea}
        onChange={(e) => setNewArea(e.target.value)}
        placeholder="Add new area"
        className="w-full p-2 mb-4 border rounded"
      />
      <button className="bg-accent text-white px-4 py-2 rounded" onClick={handleAddArea}>
        Add Area
      </button>
    </div>
  );
};

export default AreaManagement;
