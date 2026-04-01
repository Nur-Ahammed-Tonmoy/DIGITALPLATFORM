import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f4ecff",
          100: "#e6d6ff",
          500: "#7f2dff",
          600: "#6a21e0",
          700: "#541bb2",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(18, 24, 40, 0.08)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #5a2df5 0%, #a61ff4 100%)",
      },
    },
  },
  plugins: [daisyui],
};
