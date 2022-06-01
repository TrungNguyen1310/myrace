import React, { ReactNode } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Navbar from 'components/Navbar'
import { InputBase } from '@mui/material'
import AnimationLayouts from 'layouts/animationLayouts'

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children = null }) => {
  return (
    <>
      <div className='flex min-h-screen layout'>
        <Navbar>
          <div className='px-[15px] relative rounded-[23px] bg-vl_white-200 flex items-center justify-start w-auto 2xl:w-[539px]'>
            <div className='absolute h-full flex justify-center items-center'>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search items, collections, and accounts'
              inputProps={{ 'aria-label': 'search' }}
              className='pl-6 h-[40px] w-full'
              sx={{
                '& .MuiInputBase-input': {
                  background: 'transparent',
                  padding: 0,
                  paddingLeft: '13px',
                  '&::placeholder': {
                    color: '#949494',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '21px'
                  }
                },
                '& .MuiInputBase-input:focus': {
                  boxShadow: 'none',
                  outline: 'none'
                }
              }}
            />
          </div>
        </Navbar>
        <div className={'flex-1 h-auto flex justify-start pt-[100px] duration-300'}>
          <AnimationLayouts>{children}</AnimationLayouts>
        </div>
      </div>
    </>
  )
}

export default DefaultLayout
