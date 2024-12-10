module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Blue tone similar to Rentkar's theme
        secondary: "#F3F4F6", // Light gray for background
        accent: "#F59E0B", // Accent color
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Clean font family
      },
    },
  },
  plugins: [],
};
