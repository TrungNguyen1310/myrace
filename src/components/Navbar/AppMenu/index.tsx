import { Avatar } from '@mui/material'
import Button from 'components/Button'
import React from 'react'

const AppMenu: React.FC = () => {
  return (
    <div className='flex justify-center items-center'>
      <Button className='bg-vl_neon ml-[37px] w-full p-[14px] hidden md:flex'>
        Connect Wallet
      </Button>
      <Avatar className='ml-2 bg-orange-400'>VL</Avatar>
    </div>
  )
}

export default AppMenu
