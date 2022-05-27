import React, { ReactNode } from 'react'
import { InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import Navbar from '../components/Navbar'

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children = null }) => {
  return (
    <>
      <div className='flex min-h-screen layout'>
        <Navbar>
          <div className='container w-full relative rounded-[23px] bg-vl_white-200'>
            <div className='absolute h-full flex justify-center items-center'>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
              className='pl-6 h-[40px]'
              sx={{
                '& .MuiInputBase-input': {
                  background: 'transparent'
                },
                '& .MuiInputBase-input:focus': {
                  boxShadow: 'none',
                  outline: 'none'
                }
              }}
            />
          </div>
        </Navbar>
        <div className={'flex-1 h-auto flex justify-start pt-[100px] duration-300'}>{children}</div>
      </div>
    </>
  )
}

export default DefaultLayout
