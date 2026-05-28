/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Sunbright brand palette — derived from actual logo (navy + gold)
        navy: {
          50: '#f0f4fb',
          100: '#d9e4f5',
          200: '#b3c8eb',
          300: '#7ea3d8',
          400: '#4a78c4',
          500: '#2a5aad',
          600: '#1d4490',
          700: '#1a3270', // primary brand navy (logo text color)
          800: '#152855',
          900: '#101e3f',
        },
        gold: {
          50: '#fffbea',
          100: '#fff3c0',
          200: '#ffe680',
          300: '#ffd740',
          400: '#ffc81a', // sun highlight
          500: '#f5b800', // primary brand gold (logo sun color)
          600: '#d49b00',
          700: '#aa7c00',
          800: '#876200',
          900: '#6b4e00',
        },
        sky: {
          50: '#f2f6fb',
          100: '#dce8f5',
          200: '#b9d1eb',
          300: '#8ab2d9',
          400: '#5a90c4',
          500: '#3a6fad', // water/wave blue from logo
          600: '#2d5a90',
          700: '#234875',
          800: '#1c3960',
          900: '#162d4d',
        },
        cream: {
          50: '#fdfbf7',
          100: '#f8f3e8',
          200: '#f0e6d0',
        },
        ink: {
          900: '#1a1f2e',
          700: '#3a4151',
          500: '#6b7280',
        },
      },
      fontFamily: {
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
