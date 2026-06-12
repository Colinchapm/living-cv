import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#f8fafc',
        mist: '#0f172a',
        forest: '#38bdf8',
        brass: '#38bdf8',
        clay: '#f97316',
        graphite: '#111827',
        panel: '#172033',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(2, 6, 23, 0.28)',
        glow: '0 0 0 1px rgba(34, 211, 238, 0.18), 0 14px 36px rgba(34, 211, 238, 0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config;
