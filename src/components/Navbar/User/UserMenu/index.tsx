import React from 'react'
import { Avatar } from 'antd'
import { useTranslation } from 'react-i18next'

import { Button } from 'components'
import AvatarImg from 'assets/images/avatar.png'

const UserMenu: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className='flex justify-center items-center'>
      <Button type='text' className='bg-vl_neon ml-[37px] h-10 hover:bg-lime-500 focus:bg-vl_neon hidden md:flex md:items-center md:justify-center'>
        {t('components.navbar.connect_wallet')}
      </Button>
      <Avatar className='ml-2 w-10 h-10 cursor-pointer' src={AvatarImg} />
    </div>
  )
}

export default UserMenu
