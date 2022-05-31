module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "gilroy-medium": ["Gilroy-Medium", "sans-serif"],
        "gilroy-bold": ["Gilroy-Bold", "sans-serif"]
      },
      backgroundImage: {
        "spider-men": "url('./src/assets/background-spider-men.jpg')"
      }
    }
  },
  plugins: []
};
