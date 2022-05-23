import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs?: true // removes the `xs` breakpoint
    sm?: true
    md?: true
    lg?: true
    xl?: true
    xxl?: true
    mobile?: true // adds the `mobile` breakpoint
    tablet?: true
    laptop?: true
    desktop?: true
  }
}

const theme = createTheme({
  palette: {},
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
