import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'

interface IProgress {
  // REQUIRED
  value: number
  // OPTIONAL
  label?: string
  primary?: boolean | string
  secondaryyellow?: boolean | string
  secondarypink?: boolean | string
  variant?: 'buffer' | 'determinate' | 'indeterminate' | 'query'
  className?: string
  classNameWrapper?: string
}

const VlProgressBar: React.FC<IProgress> = ({ value = 0, variant = 'determinate', className, classNameWrapper, label, primary = false, secondarypink = false, secondaryyellow = false, ...props }) => {
  const BorderLinearProgress = styled(LinearProgress)<IProgress>(({ theme }) => {
    return {
      minHeight: 6,
      minWidth: 100,
      borderRadius: 3,
      [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[300],
        background: value
          ? (primary && 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #7A52F4') ||
            (secondarypink && 'linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), #F20089') ||
            (secondaryyellow && 'linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), #FFBD00')
          : theme.palette.color.vl_grey['#F5F5FA']
      },
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 3,
        backgroundColor:
          (primary && theme.palette.color.primary.primary_blue) ||
          (secondaryyellow && theme.palette.color.secondary.secondary_yellow) ||
          (secondarypink && theme.palette.color.secondary.secondary_pink) ||
          '#1a90ff'
      }
    }
  })

  return (
    <Box className={['flex items-center', classNameWrapper].join(' ')}>
      <BorderLinearProgress variant={variant} value={value} className={[className].join(' ')} {...props} />
      {label && <div className='pl-2 font-bold text-xs'>{label}</div>}
    </Box>
  )
}

export default VlProgressBar
