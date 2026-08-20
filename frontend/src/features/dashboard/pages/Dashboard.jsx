import { useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import api from "../../../core/api/client";
import StatCard from "../components/StatCard";
import StatusBadge from "../../../core/components/StatusBadge";
import InboxPreview from "../components/InboxPreview";
import SkeletonCard from "../../../core/components/skeletonCard";

export default function Dashboard() {
  const [stats, setStats] = useState(null);
  const [applications, setApplications] = useState([]);
  const [profile, setProfile] = useState(null);
  const [syncing, setSyncing] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const [statsRes, appsRes, profileRes] = await Promise.all([
        api.get("/dashboard"),
        api.get("/applications"),
        api.get("/profile"),
      ]);
      setStats(statsRes.data.data);
      setApplications(appsRes.data.data.slice(0, 4)); // recent 4
      setProfile(profileRes.data.data);
    } catch (err) {
      console.error("Failed to load dashboard:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleSync = async () => {
    setSyncing(true);
    try {
      await api.get("/gmails/sync");
      await loadData();
    } catch (err) {
      console.error("Sync failed:", err);
    } finally {
      setSyncing(false);
    }
  };

  if (loading) {
    return (
      <div>
        <div className="flex items-start justify-between mb-8">
          <div>
            <SkeletonCard className="h-8 w-64 mb-2" />
            <SkeletonCard className="h-4 w-40" />
          </div>
        </div>
        <div className="grid grid-cols-2 md:flex gap-4 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <SkeletonCard key={i} className="h-24 flex-1" />
          ))}
        </div>
        <SkeletonCard className="h-64" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-cream-textPrimary dark:text-espresso-textPrimary">
            Good morning,{" "}
            <span className="text-cream-textPrimary dark:text-espresso-textPrimary font-medium">
              {profile?.fullName || "there"}
            </span>
          </h2>
          <p className="text-sm text-cream-textSecondary dark:text-espresso-textSecondary mt-1">
            Your applications, at a glance.
          </p>
        </div>
        <button
          onClick={handleSync}
          disabled={syncing}
          className="flex items-center gap-2 text-sm font-medium bg-caramel text-white px-4 py-2 rounded-lg hover:bg-caramel-dark transition-colors disabled:opacity-60"
        >
          <RefreshCw size={15} className={syncing ? "animate-spin" : ""} />
          {syncing ? "Syncing…" : "Sync Gmail"}
        </button>
      </div>

      <div className="grid grid-cols-2 md:flex gap-4 mb-6">
        <StatCard value={stats?.totalApplications ?? 0} label="Applied" />
        <StatCard value={stats?.interviewsThisWeek ?? 0} label="Interviews this week" />
        <StatCard value={stats?.onlineAssessments ?? 0} label="Online assessments" />
        <StatCard value={stats?.offers ?? 0} label="Offers" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="bg-cream-card dark:bg-espresso-card border border-cream-border dark:border-espresso-border rounded-card p-5">
          <h3 className="font-medium text-cream-textPrimary dark:text-espresso-textPrimary mb-4">
            Recent applications
          </h3>
          {applications.length === 0 ? (
            <p className="text-sm text-cream-textSecondary dark:text-espresso-textSecondary">
              No applications yet. Sync your Gmail to get started.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {applications.map((app) => (
                <div key={app._id} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-cream-textPrimary dark:text-espresso-textPrimary">
                    {app.company}
                  </span>
                  <StatusBadge status={app.status} />
                </div>
              ))}
            </div>
          )}
        </div>
        <InboxPreview />
      </div>
    </div>
  );
}
