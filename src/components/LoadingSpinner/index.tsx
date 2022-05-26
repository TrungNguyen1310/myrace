import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'
import './style.scss'

interface LoadingProps {
  color?: string
}

const LoadingSpinner: React.FC<LoadingProps> = ({ color = '#FFF' }) => {
  return (
    <Backdrop sx={{ color: `${color}`, zIndex: theme => theme.zIndex.drawer + 1 }} open={true}>
      <CircularProgress color='inherit' />
    </Backdrop>
  )
}

export default LoadingSpinner
