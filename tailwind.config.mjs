/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sunbright brand palette — warm, hopeful, calming
        // TBD with Linda; placeholders aligned to "faith-integrated + Northern CA"
        sage: {
          50: '#f3f7f4',
          100: '#e1ece4',
          200: '#c4d8ca',
          300: '#9bbca7',
          400: '#6f9c80',
          500: '#4f8163',
          600: '#3c684e',
          700: '#315441',
          800: '#284336',
          900: '#22382e',
        },
        gold: {
          50: '#fbf8ee',
          100: '#f4ecd0',
          200: '#ead7a3',
          300: '#dcbb6d',
          400: '#cfa247',
          500: '#bd8a35',
          600: '#a06d2c',
          700: '#805228',
          800: '#6a4327',
          900: '#5a3924',
        },
        cream: {
          50: '#fdfbf7',
          100: '#f8f3e8',
          200: '#f0e6d0',
        },
        ink: {
          900: '#1f2624',
          700: '#3a4441',
          500: '#6b7773',
        },
      },
      fontFamily: {
        // Pair: humanist serif for headings + clean sans for body
        serif: ['Lora', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        prose: '68ch',
        '8xl': '88rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
