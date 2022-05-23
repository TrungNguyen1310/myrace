module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontWeight: {
        medium: 500,
        semibold: 600,
        bold: 700
      },
      colors: {
        main: '#B6FF00',
        primary: '#949494',
        vl_gray: '#949494',
        vl_gray_1: '#F1F1F1',
        vl_gray_2: '#6B6B6B',
        vl_gray_3: 'rgba(207, 219, 213, 0.6)',
        vl_white_1: '#F9F9F9',
        vl_bg_neon: '#B6FF00'
      },
      boxShadow: {
        primary: '0px 3px 4px rgba(153, 155, 168, 0.25)'
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
      }
    }
  },
  plugins: []
}
