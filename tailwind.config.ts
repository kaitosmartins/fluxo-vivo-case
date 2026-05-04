import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#16A34A',
          secondary: '#22C55E',
          accent: '#F59E0B',
          bg: '#F8FAFC',
          text: '#0F172A',
          muted: '#64748B',
          border: '#E2E8F0',
        },
      },
      boxShadow: {
        soft: '0 4px 14px rgba(15, 23, 42, 0.08)',
      },
      borderRadius: {
        card: '12px',
        control: '10px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
