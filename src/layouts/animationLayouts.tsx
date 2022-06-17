import React, { ReactNode, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const AnimationLayouts: React.FC<{ children: ReactNode }> = ({ children = null }) => {
  const { pathname } = useLocation()
  const [transitionStage, setTransistionStage] = useState('fadeIn')

  useEffect(() => {
    setTransistionStage('fadeOut')
  }, [pathname])

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === 'fadeOut') {
          setTransistionStage('fadeIn')
        }
      }}
    >
      {children}
    </div>
  )
}

export default AnimationLayouts
