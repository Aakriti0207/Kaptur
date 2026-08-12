import { useEffect, useState } from "react";
import api from "../api/client";

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api
      .get("/profile")
      .then((res) => setProfile(res.data.data))
      .catch((err) => console.error("Failed to load profile:", err));
  }, []);

  return (
    <div>
      <h2 className="font-serif text-2xl font-semibold text-cream-textPrimary dark:text-espresso-textPrimary mb-6">
        Profile
      </h2>
      <div className="bg-cream-card dark:bg-espresso-card border border-cream-border dark:border-espresso-border rounded-card p-6 max-w-md">
        <div className="flex flex-col gap-4 text-sm">
          <div>
            <p className="text-cream-textSecondary dark:text-espresso-textSecondary text-xs mb-1">
              Full name
            </p>
            <p className="text-cream-textPrimary dark:text-espresso-textPrimary font-medium">
              {profile?.fullName || "—"}
            </p>
          </div>
          <div>
            <p className="text-cream-textSecondary dark:text-espresso-textSecondary text-xs mb-1">
              Email
            </p>
            <p className="text-cream-textPrimary dark:text-espresso-textPrimary font-medium">
              {profile?.email || "—"}
            </p>
          </div>
          <div>
            <p className="text-cream-textSecondary dark:text-espresso-textSecondary text-xs mb-1">
              Phone
            </p>
            <p className="text-cream-textPrimary dark:text-espresso-textPrimary font-medium">
              {profile?.phoneNum || "Not set"}
            </p>
          </div>
          <div>
            <p className="text-cream-textSecondary dark:text-espresso-textSecondary text-xs mb-1">
              Preferred roles
            </p>
            <p className="text-cream-textPrimary dark:text-espresso-textPrimary font-medium">
              {profile?.preferredJobRoles || "Not set"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
