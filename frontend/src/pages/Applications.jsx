import { useEffect, useState } from "react";
import { Search, ArrowRight, Archive } from "lucide-react";
import api from "../api/client";
import StatusBadge from "../components/StatusBadge";

const FILTERS = ["All", "Applied", "OA", "Interview", "Offer", "Rejected"];

export default function Applications() {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const loadApplications = async () => {
    try {
      const res = await api.get("/applications");
      setApplications(res.data.data);
    } catch (err) {
      console.error("Failed to load applications:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApplications();
  }, []);

  const handleArchive = async (id) => {
    try {
      await api.patch(`/applications/${id}/archive`);
      setApplications((prev) => prev.filter((app) => app._id !== id));
    } catch (err) {
      console.error("Archive failed:", err);
    }
  };

  const filtered = applications.filter((app) => {
    const matchesFilter = activeFilter === "All" || app.status === activeFilter;
    const matchesSearch =
      app.company?.toLowerCase().includes(search.toLowerCase()) ||
      app.role?.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const countFor = (status) =>
    status === "All"
      ? applications.length
      : applications.filter((a) => a.status === status).length;

  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold text-cream-textPrimary dark:text-espresso-textPrimary">
        Applications
      </h2>
      <p className="text-sm text-cream-textSecondary dark:text-espresso-textSecondary mt-1 mb-6">
        Your job search, in one place.
      </p>

      <div className="relative mb-4">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-cream-textSecondary dark:text-espresso-textSecondary"
        />
        <input
          type="text"
          placeholder="Search applications"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-cream-card dark:bg-espresso-card border border-cream-border dark:border-espresso-border text-sm text-cream-textPrimary dark:text-espresso-textPrimary placeholder:text-cream-textSecondary dark:placeholder:text-espresso-textSecondary outline-none focus:border-caramel"
        />
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeFilter === filter
                ? "bg-caramel text-white"
                : "bg-cream-card dark:bg-espresso-card border border-cream-border dark:border-espresso-border text-cream-textSecondary dark:text-espresso-textSecondary"
            }`}
          >
            {filter} · {countFor(filter)}
          </button>
        ))}
      </div>

      <div className="bg-cream-card dark:bg-espresso-card border border-cream-border dark:border-espresso-border rounded-card overflow-hidden">
        <div className="grid grid-cols-[1.5fr_1.5fr_1fr_0.8fr_0.5fr] px-5 py-3 text-xs font-medium text-cream-textSecondary dark:text-espresso-textSecondary border-b border-cream-border dark:border-espresso-border">
          <span>Company</span>
          <span>Role</span>
          <span>Status</span>
          <span>Applied</span>
          <span></span>
        </div>

        {loading ? (
          <p className="p-5 text-sm text-cream-textSecondary dark:text-espresso-textSecondary">
            Loading…
          </p>
        ) : filtered.length === 0 ? (
          <p className="p-5 text-sm text-cream-textSecondary dark:text-espresso-textSecondary">
            No applications match this view.
          </p>
        ) : (
          filtered.map((app) => (
            <div
              key={app._id}
              className="grid grid-cols-[1.5fr_1.5fr_1fr_0.8fr_0.5fr] px-5 py-3.5 items-center text-sm border-b border-cream-border dark:border-espresso-border last:border-0 hover:bg-cream-canvas/50 dark:hover:bg-espresso-canvas/50"
            >
              <span className="font-medium text-cream-textPrimary dark:text-espresso-textPrimary">
                {app.company}
              </span>
              <span className="text-cream-textSecondary dark:text-espresso-textSecondary">
                {app.role || "—"}
              </span>
              <span>
                <StatusBadge status={app.status} />
              </span>
              <span className="text-cream-textSecondary dark:text-espresso-textSecondary text-xs">
                {new Date(app.appliedDate).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <div className="flex items-center gap-2 justify-end">
                <button
                  onClick={() => handleArchive(app._id)}
                  title="Archive"
                  className="text-cream-textSecondary dark:text-espresso-textSecondary hover:text-caramel"
                >
                  <Archive size={15} />
                </button>
                <ArrowRight
                  size={15}
                  className="text-cream-textSecondary dark:text-espresso-textSecondary"
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
