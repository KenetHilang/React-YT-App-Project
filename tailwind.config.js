/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      colors:{
        'real': '#e1e1f8',
        'background': '#050515',
        'primary': '#8887e2',
        'secondary': '#672188',
        'accent': '#c337ce',
      },
    },
  },
  plugins: [],
}