/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "375",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      boxShadow: {
        insideSm: "inset 0 0.4rem rgba(0, 0, 0, 0.2)",
        insideLg: "inset 0 0.7rem rgba(0, 0, 0, 0.2)",
        outside: "0 0.4rem rgba(0, 0, 0, 0.2)",
        winner: "0 0 0 40px #293251, 0 0 0 80px #232c4b, 0 0 0 130px #1e2949",
      },
      backgroundImage: {
        pentagon: "url('src/assets/images/bg-pentagon.svg')",
      },
      colors: {
        primary: {
          "scissors-gradient-from": "hsl(39, 89%, 49%)",
          "scissors-gradient-to": "hsl(40, 84%, 53%)",
          "paper-gradient-from": "hsl(230, 89%, 62%)",
          "paper-gradient-to": "hsl(230, 89%, 65%)",
          "rock-gradient-from": "hsl(349, 71%, 52%)",
          "rock-gradient-to": "hsl(349, 70%, 56%)",
          "lizard-gradient-from": "hsl(261, 73%, 60%)",
          "lizard-gradient-to": "hsl(261, 72%, 63%)",
          "cyan-gradient-from": "hsl(189, 59%, 53%)",
          "cyan-gradient-to": "hsl(189, 58%, 57%)",
        },
        neutral: {
          "dark-text": "hsl(229, 25%, 31%)",
          "score-text": "hsl(229, 64%, 46%)",
          "header-outline": "hsl(217, 16%, 45%)",
          "bg-from": "hsl(214, 47%, 23%)",
          "bg-to": "hsl(237, 49%, 15%)",
        },
      },
      fontFamily: {
        BarlowSemi: "BarlowSemi",
        BarlowBold: "BarlowBold",
      },
    },
  },
  plugins: [],
};
