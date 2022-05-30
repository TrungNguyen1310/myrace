import React from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ViewMobile from 'components/Navbar/LandingMenu/Mobile'
import ViewMenuDesktop from 'components/Navbar/LandingMenu/Desktop'

const LandingMenu: React.FC = () => {
  const theme = useTheme()
  const mobileScreen = useMediaQuery(theme.breakpoints.down('md')) // min-width: 768px

  return <>{mobileScreen ? <ViewMobile /> : <ViewMenuDesktop />}</>
}

export default LandingMenu
