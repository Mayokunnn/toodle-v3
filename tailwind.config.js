/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mobile: "320px",
      // => @media (min-width: 640px) { ... }

      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      colors: {
        lightVeryLight: "hsl(0, 0%, 98%)",
        lightVeryGrayishBlue: " hsl(236, 33%, 92%)",
        lightGrayishBlue: " hsl(233, 11%, 84%)",
        lightDarkGrayishBlue: "hsl(236, 9%, 61%)",
        lightVeryDarkGrayishBlue: "hsl(235, 19%, 35%)",

        darkVeryBlue: "hsl(235, 21%, 11%)",
        darkVeryDesaturatedBlue: " hsl(235, 24%, 19%)",
        darkLightGrayishBlue: "hsl(234, 39%, 85%)",
        darkLightGrayishBlueHover: "hsl(236, 33%, 92%)",
        darkGrayishBlue: "hsl(234, 11%, 52%)",
        darkVeryGrayishBlue: " hsl(233, 14%, 35%)",

        brightBlue: "hsl(220, 98%, 61%)",
        gradientFirst: "hsl(192, 100%, 67%)",
        gradientSecond: "hsl(280, 87%, 65%)",
      },
    },
  },
  plugins: [],
};
