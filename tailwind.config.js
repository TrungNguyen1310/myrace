/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '2xl': '1440px'
        // => @media (min-width: 992px) { ... }
      },
      fontSize: {
        xs: [
          '12px',
          {
            lineHeight: '18px'
          }
        ],
        sm: [
          '14px',
          {
            lineHeight: '21px'
          }
        ],
        base: [
          '16px',
          {
            lineHeight: '24px'
          }
        ],
        lg: [
          // <h6></h6>
          '18px',
          {
            lineHeight: '24px'
          }
        ],
        xl: [
          // <h5></h5>
          '20px',
          {
            lineHeight: '28px'
          }
        ],
        '2xl': [
          // <h4></h4>
          '24px',
          {
            lineHeight: '29px'
          }
        ],
        '3xl': [
          // <h3></h3>
          '28px',
          {
            lineHeight: '34px'
          }
        ],
        '4xl': [
          // <h2></h2>
          '34px',
          {
            lineHeight: '41px'
          }
        ],
        '5xl': [
          // <h1></h1>
          '42px',
          {
            lineHeight: '51px'
          }
        ]
      },
      lineHeight: {
        '5xl': '51px',
        '4xl': '41px',
        '3xl': '34px',
        '2xl': '29px',
        xl: '28px',
        lg: '24px',
        base: '24px',
        sm: '21px',
        xs: '18px'
      },
      fontWeight: {
        medium: 500,
        semibold: 600,
        bold: 700,
        800: 800
      },
      fontStyle: {
        normal: 'normal',
        italic: 'italic'
      },
      colors: {
        // ==================== PRIMARY ====================
        primary_blue: '#276EF1',
        primary_purple: '#7A52F4', // to custom other primary_purple colors, see [ plugins -> addUtilities -> .color-primary_purple_* (* is a number) ]
        // ==================== SECONDARY ====================
        secondary_yellow: '#F4C952', // to custom other secondary_yellow colors, see [ plugins -> addUtilities -> .color-secondary_yellow_* (* is a number) ]
        secondary_pink: '#F20089', // to custom other secondary_pink colors, see [ plugins -> addUtilities -> .color-secondary_pink_* (* is a number) ]

        // ==================== DARK ====================
        vl_black: {
          100: '#5D5D5B',
          200: 'rgba(0, 0, 0, 0.85)',
          DEFAULT: 'black'
        },

        // ==================== BASIC ====================
        vl_grey: {
          100: '#F1F1F1',
          200: 'rgba(235, 240, 240, 0.1);', // [vl_grey-300]: #EBF0F0, 10%
          300: 'rgba(235, 240, 240, 0.5)', // [vl_grey-300]: #EBF0F0, 70%
          400: '#EBF0F0',
          500: 'rgba(207, 219, 213, 0.6)',
          600: '#E8E8E8',
          700: '#949494',
          800: '#6B6B6B',
          '#F5F5FA': '#F5F5FA'
        },
        vl_white: {
          DEFAULT: '#FFFFFF',
          100: 'rgba(255, 255, 255, 0.5)',
          200: '#F9F9F9'
        },
        vl_neon: '#B6FF00',
        vl_green: {
          100: '#CFDBD5'
        }
      },
      boxShadow: {
        // ==================== PRIMARY ====================
        primary_100: '0px 3px 4px rgba(153, 155, 168, 0.25)', // 4px
        primary_200: '0px 8px 12px rgba(153, 155, 168, 0.25)', // 8px
        primary_300: '0px 12px 14px rgba(0, 0, 0, 0.1)', // 12px
        primary_400: '0px 16px 18px rgba(153, 155, 168, 0.18)', // 16px
        primary_500: '0px 20px 24px rgba(153, 155, 168, 0.18)', // 20px
        // ==================== PRIMARY ====================
        secondary_100: '0px -15px 20px rgba(13, 10, 25, 0.06)', // -15px
        secondary_200: '0px -6px 20px rgba(13, 10, 25, 0.08)' // -6px
      },
      container: {
        padding: {
          DEFAULT: '2rem',
          sm: '2rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2rem'
        }
      },
      width: {
        sidebarOpen: '248px',
        sidebarClose: '74px'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(#000,#000 24%,transparent 34%)'
      }
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Inter', 'serif']
    }
  },
  plugins: [
    plugin(function ({ addBase, theme, addUtilities }) {
      addBase({
        h1: {
          fontSize: theme('fontSize.5xl'),
          lineHeight: theme('lineHeight.5xl'),
          fontStyle: theme('fontStyle.normal'),
          fontWeight: theme('fontWeight.800')
        },
        h2: {
          fontSize: theme('fontSize.4xl'),
          lineHeight: theme('lineHeight.4xl'),
          fontStyle: theme('fontStyle.normal'),
          fontWeight: theme('fontWeight.800')
        },
        h3: {
          fontSize: theme('fontSize.3xl'),
          lineHeight: theme('lineHeight.3xl'),
          fontStyle: theme('fontStyle.normal'),
          fontWeight: theme('fontWeight.800')
        },
        h4: {
          fontSize: theme('fontSize.2xl'),
          lineHeight: theme('lineHeight.2xl'),
          fontStyle: theme('fontStyle.normal'),
          fontWeight: theme('fontWeight.800')
        },
        h5: {
          fontSize: theme('fontSize.xl'),
          lineHeight: theme('lineHeight.xl'),
          fontStyle: theme('fontStyle.normal'),
          fontWeight: theme('fontWeight.800')
        },
        h6: {
          fontSize: theme('fontSize.lg'),
          lineHeight: theme('lineHeight.lg'),
          fontStyle: theme('fontStyle.normal'),
          fontWeight: theme('fontWeight.800')
        },
        p: {
          fontSize: theme('fontSize.sm'),
          lineHeight: theme('lineHeight.sm'),
          fontStyle: theme('fontStyle.normal')
        }
      }),
        addUtilities({
          // ==================== PRIMARY PURPLE ====================
          '.color-primary_purple_100': {
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #7A52F4;'
          },
          '.color-primary_purple_200': {
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #7A52F4;'
          },
          // ==================== SECONDARY YELLOW + PINK ====================
          '.color-secondary_yellow_100': {
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), #FFBD00;'
          },
          '.color-secondary_pink_100': {
            background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), #F20089;'
          }
          // ==================== BASE ====================
        })
    }),
    require('tailwind-scrollbar')
  ]
}
