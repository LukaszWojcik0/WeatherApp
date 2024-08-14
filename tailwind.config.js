/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },

    extend: {
      colors: {
        "main-bg": "#3C3D37",
        "secondary-bg": "#ECDFCC",
      },
    },
  },
  plugins: [],
};
