/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#111111', // Gris muy oscuro
        foreground: '#E0E0E0', // Gris claro (texto principal)
        primary: {
          DEFAULT: '#3b82f6', // Azul vibrante (ejemplo)
          foreground: '#FFFFFF', // Texto sobre primario
        },
        secondary: {
          DEFAULT: '#8b5cf6', // Violeta (ejemplo)
          foreground: '#FFFFFF', // Texto sobre secundario
        },
        muted: {
          DEFAULT: '#222222', // Gris oscuro (para fondos sutiles)
          foreground: '#888888', // Gris medio (texto secundario)
        },
        accent: {
          DEFAULT: '#14b8a6', // Teal (ejemplo)
          foreground: '#FFFFFF', // Texto sobre acento
        },
        border: '#2a2a2a', // Gris para bordes
        input: '#333333', // Fondo para inputs
        ring: '#3b82f6', // Color para anillos de foco (usando azul primario)
        card: {
          DEFAULT: '#181818', // Gris oscuro para tarjetas
          foreground: '#E0E0E0', // Texto en tarjetas
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        lg: `calc(var(--radius) + 2px)`,
        md: `var(--radius)`,
        sm: "calc(var(--radius) - 4px)",
      },
      // Puedes añadir aquí otras extensiones: keyframes, animation, etc.
    },
  },
  plugins: [],
}

