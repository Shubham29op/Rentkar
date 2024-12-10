import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Smart Delivery</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-accent">Dashboard</Link>
          <Link to="/partners" className="hover:text-accent">Partners</Link>
          <Link to="/orders" className="hover:text-accent">Orders</Link>
          <Link to="/assignments" className="hover:text-accent">Assignments</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
