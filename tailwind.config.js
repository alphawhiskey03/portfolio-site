export default {
  darkMode: "class",
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx}", // make sure jsx is included
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['"Space Grotesk"', "sans-serif"],
      },
    },
  },
};
