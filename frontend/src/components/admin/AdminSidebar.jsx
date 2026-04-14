import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

const navItems = [
  { label: "Hero", path: "hero", icon: "🏠" },
  { label: "About", path: "about", icon: "📖" },
  { label: "Amenities", path: "amenities", icon: "✨" },
  { label: "Connectivity", path: "nearby", icon: "📍" },
  { label: "Construction", path: "construction", icon: "🏗️" },
  { label: "FAQ", path: "faq", icon: "❓" },
  { label: "Buildings", path: "buildings", icon: "🏢" },
];

const AdminSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out successfully");
    navigate("/admin");
  };

  return (
    <>
      {/* ✅ Overlay (OUTSIDE sidebar) */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      {/* ✅ Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 bg-dark-800 border-r border-white/5 flex flex-col overflow-y-auto transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        {/* 🔥 Mobile Close Button */}
        <div className="md:hidden flex justify-end p-4">
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white text-xl"
          >
            ✕
          </button>
        </div>

        {/* Header */}
        <div className="p-6 border-b border-white/5">
          <p className="font-display text-xl tracking-widest text-gold-400">
            INFINITY
          </p>
          <p className="text-white/30 text-xs tracking-wider mt-1 uppercase">
            Admin Panel
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={`/admin/dashboard/${item.path}`}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 text-sm tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-gold-400/10 text-gold-400 border-l-2 border-gold-400"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`
              }
            >
              <span>{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/5 space-y-2">
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 px-4 py-3 text-sm text-white/40 hover:text-white hover:bg-white/5 transition-all"
          >
            <span>👁️</span> View Website
          </a>

          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400/70 hover:text-red-400 hover:bg-red-400/5 transition-all"
          >
            <span>🚪</span> Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
