import React from 'react'
import Button from 'components/Button'
import VlButton from 'components/Button'
import { useTranslation } from 'react-i18next'
import Avatar from 'assets/images/Img.png'

const UserMenu: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className='flex justify-center items-center'>
      <VlButton borderColor='none' className='bg-vl_neon ml-[37px] h-10 hover:bg-lime-500 hidden md:flex md:items-center md:justify-center'>
        {t('components.navbar.connect_wallet')}
      </VlButton>
      <Button shape='circle' className='ml-2 w-10 h-10'>
        <img alt='Avatar' src={Avatar} />
      </Button>
    </div>
  )
}

export default UserMenu
