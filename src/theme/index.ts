import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs?: true
    sm?: true
    md?: true
    lg?: true
    xl?: true
    xxl?: true
    mobile?: true
    tablet?: true
    laptop?: true
    desktop?: true
  }
}

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    color: {
      primary: {
        primary_blue: string
        primary_purple: string
      }
      secondary: {
        secondary_yellow: string
        secondary_pink: string
      }
      vl_black: {
        100: string
        200: string
        DEFAULT: string
      }
      vl_grey: {
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        '#F5F5FA': string
      }
      vl_white: {
        DEFAULT: string
        100: string
        200: string
      }
      vl_neon: string
      vl_green: {
        100: string
      }
    }
    fontSize: {
      xs: string
      sm: string
      base: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
      '5xl': string
    }
    lineHeight: {
      '5xl': string
      '4xl': string
      '3xl': string
      '2xl': string
      xl: string
      lg: string
      base: string
      sm: string
      xs: string
    }
  }

  interface PaletteOptions {
    color?: {
      primary: {
        primary_blue: string
        primary_purple: string
      }
      secondary: {
        secondary_yellow: string
        secondary_pink: string
      }
      vl_black: {
        100: string
        200: string
        DEFAULT: string
      }
      vl_grey: {
        100: string
        200: string
        300: string
        400: string
        500: string
        600: string
        700: string
        800: string
        '#F5F5FA': string
      }
      vl_white: {
        DEFAULT: string
        100: string
        200: string
      }
      vl_neon: string
      vl_green: {
        100: string
      }
    }
    fontSize: {
      xs: string
      sm: string
      base: string
      lg: string
      xl: string
      '2xl': string
      '3xl': string
      '4xl': string
      '5xl': string
    }
    lineHeight: {
      '5xl': string
      '4xl': string
      '3xl': string
      '2xl': string
      xl: string
      lg: string
      base: string
      sm: string
      xs: string
    }
  }
}

const theme = createTheme({
  palette: {
    color: {
      // ==================== PRIMARY ====================
      primary: {
        primary_blue: '#276EF1',
        primary_purple: '#7A52F4'
      },
      // ==================== SECONDARY ====================
      secondary: {
        secondary_yellow: '#F4C952',
        secondary_pink: '#F20089'
      },
      vl_black: {
        100: '#5D5D5B',
        200: 'rgba(0, 0, 0, 0.85)',
        DEFAULT: '#000000'
      },
      vl_grey: {
        100: '#F1F1F1',
        200: 'rgba(235, 240, 240, 0.1);',
        300: 'rgba(235, 240, 240, 0.5)',
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
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '34px',
      '5xl': '42px'
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
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280
    }
  }
})

export default theme
