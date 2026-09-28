import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        airbnb: {
          DEFAULT: '#FF385C',
          dark: '#E31C5F',
          light: '#FF5A5F',
        },
        charcoal: '#222222',
      },
      fontFamily: {
        sans: ['var(--font-circular)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 6px 16px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
};
export default config;
