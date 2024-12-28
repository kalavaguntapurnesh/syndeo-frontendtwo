/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {},
      colors: {
        // footer: "#001327",
        footer: "#f8f9fb",
        inputColor: "#F8F8F8",
        // footerLinks: "#000000",
        footerLinks: "#212121",
        scrollToTop: "#e7473c",
        trackColor: "#002147",
        colorThree: "#2a3b2c",
        mainColor: "#AE275F",
        // colorFour: "#c36",
        colorFour: "#AE275F",
        colorFive: "#000000",
      },
    },
  },
  plugins: [],
};
