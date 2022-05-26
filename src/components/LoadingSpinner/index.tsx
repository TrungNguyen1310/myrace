import { Backdrop } from '@mui/material'
import React from 'react'
import './style.scss'

interface LoadingProps {
  color?: string
}

const LoadingSpinner: React.FC<LoadingProps> = ({ color = '#FFFFFF' }) => {
  return (
    <Backdrop sx={{ zIndex: theme => theme.zIndex.drawer }} open={true}>
      <div className='lds-ripple'>
        <div style={{ borderColor: color }} />
        <div style={{ borderColor: color }} />
      </div>
    </Backdrop>
  )
}

export default LoadingSpinner
