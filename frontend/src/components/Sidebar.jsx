import { NavLink } from "react-router-dom";
import { LayoutDashboard, Briefcase, BarChart3, User, Moon, Sun, LogOut, Menu, X } from "lucide-react";
import { useTheme } from "../core/context/ThemeContext";
import { useNavigate } from "react-router-dom";
import api from "../core/api/client.js";
import { useState } from "react";

const navItems = [
  { to: "/app", label: "Overview", icon: LayoutDashboard },
  { to: "/app/applications", label: "Applications", icon: Briefcase },
  { to: "/app/insights", label: "Insights", icon: BarChart3 },
  { to: "/app/profile", label: "Profile", icon: User },
];

export default function Sidebar() {
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
        await api.post("/auth/logout");
        navigate("/login");
    } catch (err) {
        console.error("Logout failed:", err);
    }
};

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between bg-sidebar-bg px-4 py-3 sticky top-0 z-40">
        <h1 className="font-serif text-xl font-semibold text-caramel">kaptur</h1>
        <button onClick={() => setIsOpen(true)} className="text-sidebar-text">
          <Menu size={22} />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      <aside className={`
          fixed md:sticky top-0 left-0 h-screen w-60 bg-sidebar-bg flex flex-col justify-between px-4 py-6 z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
        `}
      >
        <div>
          <div className="flex items-center justify-between px-2 mb-8">
            <div>
              <h1 className="font-serif text-2xl font-semibold text-caramel">kaptur</h1>
              <p className="text-xs text-sidebar-textMuted mt-0.5">job applications</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="md:hidden text-sidebar-text">
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/app"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-caramel text-sidebar-activeText"
                      : "text-sidebar-text hover:bg-white/5"
                  }`
                }
              >
                <Icon size={17} />
                {label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="px-2">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 text-xs text-sidebar-textMuted hover:text-sidebar-text transition-colors mb-3"
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
            {isDark ? "Light mode" : "Dark mode"}
          </button>
          <button
              onClick={() => setShowLogoutConfirm(true)}
              className="flex items-center gap-2 text-xs text-sidebar-textMuted hover:text-sidebar-text transition-colors mb-3"
          >
              <LogOut size={14} />
              Logout
          </button>

          {showLogoutConfirm && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
                  <div className="bg-espresso-card border border-espresso-border rounded-card p-6 w-full max-w-sm">
                      <h3 className="font-serif text-lg font-semibold text-espresso-textPrimary mb-2">
                          Log out?
                      </h3>
                      <p className="text-sm text-espresso-textSecondary mb-5">
                          You'll need to sign in again to access your applications.
                      </p>
                      <div className="flex gap-2">
                          <button
                              onClick={() => setShowLogoutConfirm(false)}
                              className="flex-1 py-2 rounded-lg text-sm font-medium border border-espresso-border text-espresso-textSecondary"
                          >
                              Cancel
                          </button>
                          <button
                              onClick={handleLogout}
                              className="flex-1 py-2 rounded-lg text-sm font-medium bg-caramel text-white hover:bg-caramel-dark"
                          >
                              Log out
                          </button>
                      </div>
                  </div>
              </div>
          )}
          {/* <p className="text-[11px] text-sidebar-textMuted leading-relaxed">
            Synced with Gmail.
            <br />
            Last synced 4 min ago.
          </p> */}
        </div>
      </aside>
    </>
  );
}
