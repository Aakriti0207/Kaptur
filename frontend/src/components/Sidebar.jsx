import { NavLink } from "react-router-dom";
import { LayoutDashboard, Briefcase, BarChart3, User, Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { to: "/", label: "Overview", icon: LayoutDashboard },
  { to: "/applications", label: "Applications", icon: Briefcase },
  { to: "/insights", label: "Insights", icon: BarChart3 },
  { to: "/profile", label: "Profile", icon: User },
];

export default function Sidebar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <aside className="w-60 shrink-0 bg-sidebar-bg h-screen sticky top-0 flex flex-col justify-between px-4 py-6">
      <div>
        <div className="px-2 mb-8">
          <h1 className="font-serif text-2xl font-semibold text-caramel">kaptur</h1>
          <p className="text-xs text-sidebar-textMuted mt-0.5">job applications</p>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
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
        <p className="text-[11px] text-sidebar-textMuted leading-relaxed">
          Synced with Gmail.
          <br />
          Last synced 4 min ago.
        </p>
      </div>
    </aside>
  );
}
