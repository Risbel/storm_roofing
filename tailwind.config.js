/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "who-are-we-card":
          "linear-gradient(to right, #142245 0%, #142245 1%, rgba(140, 224, 246, 0) 100%);",
        contact: "url('/blue-roof-footer.bmp')",
      },
      padding: {
        4.5: "1.115rem",
      },
    },
  },
  plugins: [],
};
