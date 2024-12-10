import React, { useState } from "react";
import axios from "axios";

const ProfileEdit: React.FC<{ partnerId: string }> = ({ partnerId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    areas: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/partners/${partnerId}`, {
        ...formData,
        areas: formData.areas.split(",").map((area) => area.trim()),
      })
      .then(() => alert("Profile Updated"))
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Edit Partner Profile</h2>
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
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
        Save Changes
      </button>
    </form>
  );
};

export default ProfileEdit;
