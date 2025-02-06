/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem", // Default padding for larger screens
        sm: "10px", // Padding for small (mobile) screens
      },
    },
  },
  plugins: [],
};
