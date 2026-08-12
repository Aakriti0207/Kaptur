/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Fraunces'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      colors: {
        // Sidebar — stays dark espresso in BOTH modes (brand anchor)
        sidebar: {
          bg: "#2B1F16",
          text: "#E8DDD0",
          textMuted: "#B39B85",
          active: "#C17F3E",
          activeText: "#2B1F16",
        },
        // Light mode surfaces
        cream: {
          canvas: "#F5EFE6",
          card: "#FFFFFF",
          textPrimary: "#3D2B1F",
          textSecondary: "#8B7355",
          border: "#E5DAC9",
        },
        // Dark mode surfaces
        espresso: {
          canvas: "#1F1815",
          card: "#3D2B1F",
          textPrimary: "#E8DDD0",
          textSecondary: "#B39B85",
          border: "#4A3826",
        },
        // Accent — same in both modes
        caramel: {
          DEFAULT: "#C17F3E",
          dark: "#8B5A28",
          light: "#E8B885",
        },
        // Status badges
        status: {
          applied: { bg: "#F5D48A", text: "#6B4E15" },
          interview: { bg: "#3D2B1F", text: "#E8DDD0" },
          offer: { bg: "#7FA88A", text: "#1F3823" },
          rejected: { bg: "#D98B7A", text: "#5C2A1E" },
          oa: { bg: "#B8A6D9", text: "#3A2A5C" },
          stale: { bg: "#C4BBAE", text: "#4A4136" },
        },
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
  plugins: [],
};
