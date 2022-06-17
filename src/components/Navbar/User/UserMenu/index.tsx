import Button from 'components/Button'
import VlButton from 'components/Button'
import React from 'react'
import { useTranslation } from 'react-i18next'

const UserMenu: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className='flex justify-center items-center'>
      <VlButton className='bg-vl_neon ml-[37px] p-[14px] hover:bg-lime-500 hidden md:flex'>{t('components.navbar.connect_wallet')}</VlButton>
      <Button shape='circle' className='ml-2 bg-orange-400'>
        VL
      </Button>
    </div>
  )
}

export default UserMenu
