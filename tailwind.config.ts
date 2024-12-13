import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Вказує, де Tailwind має шукати класи
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
