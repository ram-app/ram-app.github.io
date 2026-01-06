/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{app,components,libs,pages,hooks}/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'Roboto', 'sans-serif'],
        mono: ['var(--font-roboto-mono)', 'Roboto Mono', 'monospace'],
        pacifico: ['var(--font-pacifico)', 'Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
}

