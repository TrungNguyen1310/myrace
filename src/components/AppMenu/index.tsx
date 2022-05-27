import { Avatar } from '@mui/material'
import React from 'react'

const AppMenu: React.FC = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='bg-vl_neon rounded-[23px] h-10 w-[135px] md:flex md:justify-center md:items-center cursor-pointer hidden'>
        <p className='font-bold text-sm leading-[21px] not-italic text-black'>Connect Wallet</p>
      </div>
      <Avatar className='ml-2 bg-orange-400'>VL</Avatar>
    </div>
  )
}

export default AppMenu
