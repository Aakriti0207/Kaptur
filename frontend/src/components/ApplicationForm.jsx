import { useState } from "react";

const STATUS_OPTIONS = ["Applied", "OA", "Interview", "Offer", "Rejected", "Stale"];

const inputClass =
  "w-full px-3 py-2 rounded-lg bg-cream-canvas dark:bg-espresso-canvas border border-cream-border dark:border-espresso-border text-sm text-cream-textPrimary dark:text-espresso-textPrimary outline-none focus:border-caramel";

const labelClass =
  "text-xs text-cream-textSecondary dark:text-espresso-textSecondary mb-1 block";

export default function ApplicationForm({ initialData, onSubmit, onCancel, submitLabel }) {
  const [form, setForm] = useState({
    company: initialData?.company || "",
    role: initialData?.role || "",
    status: initialData?.status || "Applied",
    package: initialData?.package || "",
    platform: initialData?.platform || "",
    appliedDate: initialData?.appliedDate
      ? new Date(initialData.appliedDate).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
    notes: initialData?.notes || "",
  });
  const [saving, setSaving] = useState(false);

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSubmit(form);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div>
        <label className={labelClass}>Company *</label>
        <input
          className={inputClass}
          value={form.company}
          onChange={handleChange("company")}
          required
        />
      </div>

      <div>
        <label className={labelClass}>Role</label>
        <input className={inputClass} value={form.role} onChange={handleChange("role")} />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>Status</label>
          <select className={inputClass} value={form.status} onChange={handleChange("status")}>
            {STATUS_OPTIONS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>Applied date</label>
          <input
            type="date"
            className={inputClass}
            value={form.appliedDate}
            onChange={handleChange("appliedDate")}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className={labelClass}>Package</label>
          <input
            className={inputClass}
            placeholder="e.g. 12 LPA"
            value={form.package}
            onChange={handleChange("package")}
          />
        </div>
        <div>
          <label className={labelClass}>Platform</label>
          <input
            className={inputClass}
            placeholder="e.g. LinkedIn"
            value={form.platform}
            onChange={handleChange("platform")}
          />
        </div>
      </div>

      <div>
        <label className={labelClass}>Notes</label>
        <textarea
          className={inputClass}
          rows={2}
          value={form.notes}
          onChange={handleChange("notes")}
        />
      </div>

      <div className="flex gap-2 mt-2">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 py-2 rounded-lg text-sm font-medium border border-cream-border dark:border-espresso-border text-cream-textSecondary dark:text-espresso-textSecondary"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={saving}
          className="flex-1 py-2 rounded-lg text-sm font-medium bg-caramel text-white hover:bg-caramel-dark disabled:opacity-60"
        >
          {saving ? "Saving…" : submitLabel}
        </button>
      </div>
    </form>
  );
}