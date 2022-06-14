import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'

interface IProgress {
  // REQUIRED
  value: number
  // OPTIONAL
  primary?: boolean
  secondaryYellow?: boolean
  secondaryPink?: boolean
  variant?: 'buffer' | 'determinate' | 'indeterminate' | 'query'
  className?: string
}

const BorderLinearProgress = styled(LinearProgress)<IProgress>(({ theme, value, ...props }) => {
  return {
    minHeight: 6,
    minWidth: 100,
    borderRadius: 3,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[300],
      background: value
        ? (props?.primary && 'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), #7A52F4') ||
          (props?.secondaryPink && 'linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), #F20089') ||
          (props?.secondaryYellow && 'linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), #FFBD00')
        : theme.palette.color.vl_grey['#F5F5FA']
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 3,
      backgroundColor:
        (props?.primary && theme.palette.color.primary.primary_blue) ||
        (props?.secondaryYellow && theme.palette.color.secondary.secondary_yellow) ||
        (props?.secondaryPink && theme.palette.color.secondary.secondary_pink) ||
        '#1a90ff'
    }
  }
})

const ProgressBar: React.FC<IProgress> = ({ value = 0, variant = 'determinate', className, ...props }) => {
  return (
    <Box>
      <BorderLinearProgress variant={variant} value={value} className={[className].join(' ')} {...props} />
    </Box>
  )
}

export default ProgressBar
