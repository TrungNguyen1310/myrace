import React from 'react'
import { InputBase } from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import SearchIcon from '@mui/icons-material/Search'

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    background: 'transparent',
    padding: 0,
    paddingLeft: '13px',
    [theme.breakpoints.down('xl')]: {
      paddingLeft: '8px'
    },
    '&::placeholder': {
      color: '#949494',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '21px',
      [theme.breakpoints.down('xl')]: {
        fontSize: '12px',
        lineHeight: '18px'
      }
    }
  },
  '& .MuiInputBase-input:focus': {
    boxShadow: 'none',
    outline: 'none'
  }
}))

const SearchBar = () => {
  const theme = useTheme()
  const mobileScreen = useMediaQuery(theme.breakpoints.down('xl')) // min-width: 1280px
  return (
    <div className='px-[15px] relative rounded-[23px] bg-vl_white-200 flex items-center justify-start w-auto xl:w-[400px] 2xl:w-[539px]'>
      <div className='absolute h-full flex justify-center items-center'>
        <SearchIcon />
      </div>
      <StyledInputBase
        placeholder={`${mobileScreen ? 'Search items, collections...' : 'Search items, collections, and accounts'}`}
        inputProps={{ 'aria-label': 'search' }}
        className='pl-6 h-[40px] w-full'
      />
    </div>
  )
}

export default SearchBar
