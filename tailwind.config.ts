import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#17212b',
        mist: '#f5f7f8',
        forest: '#24524a',
        brass: '#b7791f',
        clay: '#a24d3d',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(23, 33, 43, 0.10)',
      },
    },
  },
  plugins: [],
} satisfies Config;
