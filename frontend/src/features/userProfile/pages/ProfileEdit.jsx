import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../core/api/client";

export default function ProfileEdit() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "", phoneNum: "", course: "", batchYear: "",
    skills: "", portfolioUrl: "", githubUrl: "", linkedinUrl: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/profile").then((res) => {
      const data = res.data.data;
      setForm({
        fullName: data.fullName || "",
        phoneNum: data.phoneNum || "",
        course: data.course || "",
        batchYear: data.batchYear || "",
        skills: (data.skills || []).join(", "),
        portfolioUrl: data.portfolioUrl || "",
        githubUrl: data.githubUrl || "",
        linkedinUrl: data.linkedinUrl || "",
      });
      setLoading(false);
    });
  }, []);

  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.patch("/profile", {
      ...form,
      skills: form.skills.split(",").map((s) => s.trim()).filter(Boolean),
    });
    navigate("/app/jobs");
  };

  if (loading) return <p className="text-cream-textSecondary dark:text-espresso-textSecondary">Loading…</p>;

  const inputClass = "w-full px-3 py-2 rounded-lg bg-cream-card dark:bg-espresso-card border border-cream-border dark:border-espresso-border text-sm text-cream-textPrimary dark:text-espresso-textPrimary outline-none focus:border-caramel";
  const labelClass = "text-xs text-cream-textSecondary dark:text-espresso-textSecondary mb-1 block";

  return (
    <div className="max-w-lg">
      <h2 className="font-serif text-2xl font-semibold text-cream-textPrimary dark:text-espresso-textPrimary mb-6">
        Complete your profile
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className={labelClass}>Full name</label>
          <input className={inputClass} value={form.fullName} onChange={handleChange("fullName")} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Course / degree</label>
            <input className={inputClass} placeholder="B.Tech CSE" value={form.course} onChange={handleChange("course")} />
          </div>
          <div>
            <label className={labelClass}>Graduating year</label>
            <input className={inputClass} placeholder="2027" value={form.batchYear} onChange={handleChange("batchYear")} />
          </div>
        </div>
        <div>
          <label className={labelClass}>Skills (comma-separated)</label>
          <input className={inputClass} placeholder="React, Node.js, Python" value={form.skills} onChange={handleChange("skills")} />
        </div>
        <div>
          <label className={labelClass}>Portfolio URL</label>
          <input className={inputClass} value={form.portfolioUrl} onChange={handleChange("portfolioUrl")} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>GitHub</label>
            <input className={inputClass} value={form.githubUrl} onChange={handleChange("githubUrl")} />
          </div>
          <div>
            <label className={labelClass}>LinkedIn</label>
            <input className={inputClass} value={form.linkedinUrl} onChange={handleChange("linkedinUrl")} />
          </div>
        </div>
        <button type="submit" className="mt-2 bg-caramel text-white py-2.5 rounded-lg text-sm font-medium hover:bg-caramel-dark">
          Save profile
        </button>
      </form>
    </div>
  );
}