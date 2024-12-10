import React, { useState } from "react";

const ShiftScheduler: React.FC<{ shift: { start: string; end: string }; onUpdate: (shift: { start: string; end: string }) => void }> = ({ shift, onUpdate }) => {
  const [start, setStart] = useState(shift.start);
  const [end, setEnd] = useState(shift.end);

  const handleUpdate = () => {
    onUpdate({ start, end });
  };

  return (
    <div className="bg-white p-6 shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Shift Scheduling</h2>
      <div className="flex gap-4">
        <div>
          <label className="block mb-2">Start</label>
          <input
            type="time"
            value={start}
            onChange={(e) => setStart(e.target.value)}
            className="p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2">End</label>
          <input
            type="time"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
            className="p-2 border rounded"
          />
        </div>
      </div>
      <button className="bg-primary text-white px-4 py-2 rounded mt-4" onClick={handleUpdate}>
        Update Shift
      </button>
    </div>
  );
};

export default ShiftScheduler;
