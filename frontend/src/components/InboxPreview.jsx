import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import api from "../api/client";

export default function InboxPreview() {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get("/gmails/preview")
      .then((res) => setEmails(res.data.data))
      .catch((err) => console.error("Failed to load inbox preview:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-cream-card dark:bg-espresso-card border border-cream-border dark:border-espresso-border rounded-card p-5">
      <div className="flex items-center gap-2 mb-4">
        <Mail size={16} className="text-caramel" />
        <h3 className="font-medium text-cream-textPrimary dark:text-espresso-textPrimary">
          Recent inbox activity
        </h3>
      </div>

      {loading ? (
        <p className="text-sm text-cream-textSecondary dark:text-espresso-textSecondary">Loading…</p>
      ) : emails.length === 0 ? (
        <p className="text-sm text-cream-textSecondary dark:text-espresso-textSecondary">
          No relevant emails found.
        </p>
      ) : (
        <div className="flex flex-col divide-y divide-cream-border dark:divide-espresso-border">
          {emails.map((email) => (
            <div key={email.id} className="py-3 first:pt-0 last:pb-0">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-cream-textPrimary dark:text-espresso-textPrimary truncate">
                  {email.from.replace(/<.*>/, "").trim()}
                </span>
                <span className="text-xs text-cream-textSecondary dark:text-espresso-textSecondary shrink-0 ml-2">
                  {new Date(email.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                </span>
              </div>
              <p className="text-xs text-cream-textSecondary dark:text-espresso-textSecondary line-clamp-1">
                {email.subject}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}