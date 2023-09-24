/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kaushan: ["Kaushan Script"],
        righteous: ["Righteous"],
        roboto: ["Roboto"],
        roboto_mono: ["Roboto Mono"],
        black_ops_one: ["Black Ops One"],
      },
    },
  },
  plugins: [],
};
