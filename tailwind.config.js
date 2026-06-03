/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00B8C4',
        secondary: '#0EA5E9',
        accent: '#FF2E93',
        navy: '#0F172A',
        'text-dark': '#1E293B',
        'text-light': '#64748B',
        'section-alt': '#F8FAFC',
        border: '#E2E8F0',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #00B8C4, #0EA5E9, #FF2E93)',
        'brand-gradient-btn': 'linear-gradient(135deg, #00B8C4, #0EA5E9)',
        'hero-overlay': 'linear-gradient(135deg, rgba(15,23,42,0.75) 0%, rgba(15,23,42,0.4) 60%, rgba(15,23,42,0.2) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0,184,196,0.10)',
        'card-hover': '0 12px 40px rgba(0,184,196,0.22)',
        'btn': '0 4px 16px rgba(0,184,196,0.35)',
        'btn-hover': '0 8px 28px rgba(0,184,196,0.50)',
      },
    },
  },
  plugins: [],
}
