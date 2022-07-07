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
  secondary_pink?: boolean
  secondary_yellow?: boolean
  type?: 'line' | 'circle' | 'dashboard'
}

const ProgressBar: React.FC<IProgress> = ({ secondary_pink = false, secondary_yellow = false, ...props }) => {
  const { percent, className, showInfo = false, primary = true, strokeColor = '', trailColor = '' } = props
  const classname = () => {
    if (strokeColor || trailColor) return ''
    if (primary && !secondary_pink && !secondary_yellow) return 'vl-progress-bar-primary'
    if (secondary_pink) return 'vl-progress-bar-pink'
    if (secondary_yellow) return 'vl-progress-bar-yellow'

    return ''
  }

  const classNameZeroPercent = percent === 0 ? 'vl-progress-bar-zero' : ''
  return <Progress {...props} showInfo={showInfo} className={['vl-progress-bar', classname(), classNameZeroPercent, className].join(' ')} />
}

export default ProgressBar
