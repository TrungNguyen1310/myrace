import React from 'react'
import './style.scss'

interface LoadingProps {
  color?: string
}

const LoadingSpinner: React.FC<LoadingProps> = ({ color = '#FFFFFF' }) => {
  return (
    <div className='lds-ripple'>
      <div style={{ borderColor: color }} />
      <div style={{ borderColor: color }} />
    </div>
  )
}

export default LoadingSpinner
