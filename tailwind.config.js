/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctor_portal: {
          primary: "#F5F5F5",

          secondary: "#454545",

          accent: "#919191",

          neutral: "#414141",

          "base-100": "#FFFFFF",

          info: "#F77EDB",

          success: "#10562C",

          warning: "#9A6509",

          error: "#F5312E",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
