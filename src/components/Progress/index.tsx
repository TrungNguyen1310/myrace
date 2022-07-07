import React from 'react'
import { Progress } from 'antd'
import './style.scss'

interface IProgress {
  percent: number
  className?: string
  strokeColor?: string
  trailColor?: string
  showInfo?: boolean
  primary?: boolean
  secondaryPink?: boolean
  secondaryYellow?: boolean
  type?: 'line' | 'circle' | 'dashboard'
}

const ProgressBar: React.FC<IProgress> = props => {
  const { percent, className, showInfo = false, primary = true, secondaryPink = false, secondaryYellow = false, strokeColor = '', trailColor = '' } = props
  const classname = () => {
    if (strokeColor || trailColor) return ''
    if (primary && !secondaryPink && !secondaryYellow) return 'vl-progress-bar-primary'
    if (secondaryPink) return 'vl-progress-bar-pink'
    if (secondaryYellow) return 'vl-progress-bar-yellow'

    return ''
  }

  const classNameZeroPercent = percent === 0 ? 'vl-progress-bar-zero' : ''
  return <Progress {...props} showInfo={showInfo} className={['vl-progress-bar', classname(), classNameZeroPercent, className].join(' ')} />
}

export default ProgressBar
