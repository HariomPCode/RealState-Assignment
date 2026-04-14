import { Routes, Route, Navigate } from "react-router-dom";
import AdminSidebar from "../components/admin/AdminSidebar";
import DashboardOverview from "../components/admin/DashboardOverview";
import EditHero from "../components/admin/EditHero";
import EditAbout from "../components/admin/EditAbout";
import EditAmenities from "../components/admin/EditAmenities";
import EditNearby from "../components/admin/EditNearby";
import EditConstruction from "../components/admin/EditConstruction";
import EditFAQ from "../components/admin/EditFAQ";
import EditBuildings from "../components/admin/EditBuildings";
import { useState } from "react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="min-h-screen bg-dark-900 flex">
      <AdminSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <main className="flex-1 ml-0 md:ml-64 overflow-auto">
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden mb-4 px-4 py-2 bg-gold-400 text-black rounded"
        >
          ☰ Menu
        </button>
        <div className="max-w-3xl mx-auto p-8">
          <Routes>
            <Route index element={<DashboardOverview />} />
            <Route path="hero" element={<EditHero />} />
            <Route path="about" element={<EditAbout />} />
            <Route path="amenities" element={<EditAmenities />} />
            <Route path="nearby" element={<EditNearby />} />
            <Route path="construction" element={<EditConstruction />} />
            <Route path="faq" element={<EditFAQ />} />
            <Route path="buildings" element={<EditBuildings />} />
            <Route
              path="*"
              element={<Navigate to="/admin/dashboard" replace />}
            />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
