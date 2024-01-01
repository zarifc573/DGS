const {nextui} = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1240px',
      },
      colors: {
        'primary': '#1B1C1E',
        'secondary': '#D2FF3A',
        'tertiary': '#B9FF66',
        'white-rgba': 'rgba(255, 255, 255, 0.40)'
      },
      fontFamily: {
        'darker': ['Darker Grotesque', 'sans-serif'],
        'work': ['Work Sans', 'sans-serif'],
        'pops': ['Poppins', 'sans-serif']
      },
      borderRadius: {
        'corner': '18px 5px',
      },
      boxShadow: {
        'shade': '0px 5px 15px 0px rgba(0, 0, 0, 0.15), 0px 2px 4px 0px rgba(0, 0, 0, 0.20)',
        'general': '0px 2px 12px 0px rgba(20, 20, 43, 0.08)',
        'custom': '0px 158.48px 337.191px 0px rgba(21, 21, 21, 0.24)'
      },
      backgroundImage: {
        'strategy':'url(../public/assets/IMAGE.png)',
        'shadow': 'url(../public/assets/shadow 2.png)',
        'girl' : 'url(../public/assets/girl.png)',
        'union' : 'url(../public/assets/Union.png)'
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
