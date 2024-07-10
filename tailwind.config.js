import plugin from "tailwindcss/plugin"
import colors from "tailwindcss/colors"
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx,html}',
    ],
    theme: {
      extend: {
        colors: {
          red: {
            600: '#7E0707'
          },
          green: {
            600: '#74B8BD',
            700: '#0B3B3C'
          },
          gray: {
            600: '#D9D9D9'
          }
        }
      },
      fontFamily: {
        'scada': ['Scada', 'sans-serif']
      },
    },
    plugins: [
      plugin(({addUtilities, addComponents, theme}) => {
        addUtilities({
          '.text-shadow': {
            textShadow: '1px 1px rgba(0,0,0,0.4)',
        },
        '.outline-none-border': {
            outline: 'none',
            border: 'none',
        },
          '.flex-center-between': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }
        })
      })
    ],
  };
  