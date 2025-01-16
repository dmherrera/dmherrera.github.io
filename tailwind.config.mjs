import { Montserrat, PT_Serif } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#3D784E',
        darkHover: '#C9E2BC',
        darkTheme: '#01362b',
      },
      fontFamily: {
        Ultra: ['Ultra', "sans-serif"],
        PT_Serif: ['PT_Serif', 'sans-serif'],
        Montserrat: ['Montserrat', 'serif']
      },
      boxShadow: {
        'black' : '4px 4px 0 #000',
        'white' : '4px 4px 0 #fff',
      },
      gridTemplateColumns: {
        'auto' : 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
};
