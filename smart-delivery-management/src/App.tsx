import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import PartnersPage from "./pages/PartnersPage";
import OrdersPage from "./pages/OrdersPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-secondary">
          <Routes>
            {/* Define the routes for the pages */}
            <Route path="/" element={<DashboardPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
