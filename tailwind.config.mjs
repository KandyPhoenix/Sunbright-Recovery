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
        // Landscape palette — rock, waterfall, moss, sandstone, terracotta
        stone: {
          50:  '#f5f3f1',
          100: '#e8e3de',
          200: '#d4cbc3',
          300: '#b8aca0',
          400: '#9a8c80',
          500: '#7d6e63',
          600: '#655750',
          700: '#504540', // medium dark stone
          800: '#3d3530', // deep charcoal rock
          900: '#2a2420', // near-black warm stone
        },
        terra: {
          50:  '#fdf4ee',
          100: '#fae4d0',
          200: '#f5c9a0',
          300: '#eda66a',
          400: '#e3853c',
          500: '#c8683a', // primary terracotta
          600: '#a85230', // deep terra
          700: '#874026',
          800: '#6d321f',
          900: '#59281a',
        },
        moss: {
          50:  '#f3f5ef',
          100: '#e2e8d8',
          200: '#c5d1b2',
          300: '#a0b485',
          400: '#7a9458',
          500: '#5e7a3e',
          600: '#4a6230',
          700: '#3c5028', // deep moss green
          800: '#2f3f1f',
          900: '#243018',
        },
        sand: {
          50:  '#faf7f2',
          100: '#f5ede0',
          200: '#ecdcc4', // warm sandy bg
          300: '#dfc9a5',
          400: '#cfb280',
          500: '#bb9560',
          600: '#a07a45',
          700: '#826038',
          800: '#694d2e',
          900: '#553d25',
        },
        water: {
          50:  '#f0f6f8',
          100: '#d8eaef',
          200: '#b0d4de',
          300: '#80b8c8',
          400: '#5099ae',
          500: '#3a7d94', // waterfall blue-grey
          600: '#2e6378',
          700: '#264f60',
          800: '#1f3f4e',
          900: '#183240',
        },
        // Flyer / V2 palette — earthy, warm, rustic
        forest: {
          50:  '#f4f7f0',
          100: '#e2ecda',
          200: '#c4d9b6',
          300: '#9dbd87',
          400: '#729e58',
          500: '#548239',
          600: '#3e6628',
          700: '#3a5220', // primary olive green (flyer headline color)
          800: '#2c3f1a',
          900: '#1f2d12',
        },
        antique: {
          50:  '#fdf8ee',
          100: '#f9edcc',
          200: '#f2d997',
          300: '#e8be58',
          400: '#dea52c',
          500: '#c8900a', // antique gold (flyer script/accent color)
          600: '#a87008',
          700: '#865408',
          800: '#6b420a',
          900: '#57350b',
        },
        burlap: {
          50:  '#fdfaf4',
          100: '#f8f0e0',
          200: '#f0e6cc', // warm cream background (flyer bg)
          300: '#e5d4ae',
          400: '#d6be8c',
          500: '#c4a56a',
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
