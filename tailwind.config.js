/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#9381ff",
        "secondary": "#DDE28D",
        "third": "#F4B6C1",
        "fourth": "#A6D5E7"
      }
    },
  },
  plugins: [],
}
