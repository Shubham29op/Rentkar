import React, { useState } from "react";
import axios from "axios";

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    areas: "",
    shiftStart: "",
    shiftEnd: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/partners", {
        ...formData,
        areas: formData.areas.split(",").map((area) => area.trim()),
        shift: { start: formData.shiftStart, end: formData.shiftEnd },
      })
      .then(() => alert("Partner Registered"))
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Register a New Partner</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={formData.phone}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <textarea
        name="areas"
        placeholder="Areas (comma-separated)"
        value={formData.areas}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="time"
        name="shiftStart"
        placeholder="Shift Start"
        value={formData.shiftStart}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="time"
        name="shiftEnd"
        placeholder="Shift End"
        value={formData.shiftEnd}
        onChange={handleInputChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
        Register Partner
      </button>
    </form>
  );
};

export default RegistrationForm;
