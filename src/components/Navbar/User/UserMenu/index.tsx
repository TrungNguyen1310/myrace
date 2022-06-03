import { Avatar } from '@mui/material'
import Button from 'components/Button'
import React from 'react'
import { useTranslation } from 'react-i18next'

const UserMenu: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className='flex justify-center items-center'>
      <Button className='bg-vl_neon ml-[37px] w-full p-[14px] hidden md:flex'>{t('components.navbar.connect_wallet')}</Button>
      <Avatar className='ml-2 bg-orange-400'>VL</Avatar>
    </div>
  )
}

export default UserMenu
