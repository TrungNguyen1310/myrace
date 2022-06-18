import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ReactComponent as MoonIcon } from 'assets/icons/moon.svg'
import { ThemeContext } from 'context/ThemeContext'
import Select from '../Select'
import './style.scss'
import Button from 'components/Button'

const Footer: React.FC = () => {
  const { i18n, t } = useTranslation()
  const [currency, setCurrency] = useState<string>('1')
  const [language, setLanguage] = useState<string>('en')
  const options = [
    { label: t('components.footer.language.english'), value: 'en' },
    { label: t('components.footer.language.german'), value: 'de' }
  ]
  const [theme, setTheme] = useContext(ThemeContext)

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const onChangeSelect = (opt, type: string) => {
    if (type === 'currency') {
      setCurrency(opt.value)
    } else {
      i18n.changeLanguage(opt.value)
      setLanguage(opt.value)
    }
  }

  const getCurrentLanguage = () => {
    const lang = localStorage.getItem('i18nextLng') || 'en'
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

  useEffect(() => {
    getCurrentLanguage()
  }, [])

  return (
    <footer className='w-full h-[86px] max-h-[100px] hidden px-8 bg-vl_white-200 absolute z-20 dark:bg-black md:flex items-center justify-between'>
      {/* ======= LEFT ======= */}
      <div className='flex items-center justify-between'>
        <p className='text-right-footer pr-[22px] dark:text-white'>{t('components.footer.privacy_policy')}</p>
        <p className='text-right-footer pr-[22px] dark:text-white'>{t('components.footer.license')}</p>
        <p className='text-right-footer pr-[22px] dark:text-white'>{t('components.footer.api')}</p>
        <p className='text-right-footer'>{t('components.footer.copywrite')}</p>
      </div>
      {/* ======= RIGHT ======= */}
      {/* <div className='flex items-center justify-between relative bg-pink-400 w-full' /> */}
      <div className='flex items-center justify-between relative'>
        {/* <Select variant='standard' disableUnderline value={currency} onChange={e => onChangeSelect(e, 'currency')}>
          <MenuItem value='1'>{t('components.footer.currency.usd')}</MenuItem>
          <MenuItem value='2'>{t('components.footer.currency.vnd')}</MenuItem>
        </Select> */}
        <Select placement='top' defaultValue='en' options={options} onChange={opt => onChangeSelect(opt, 'language')} className='px-[41px]' classNameSelect='lang-select' />
        <Button shape='circle' onClick={toggleDarkMode} className={`${theme === 'dark' && 'darkmode'} border-solid border border-vl_grey-500 w-[46px] h-[46px]`}>
          <MoonIcon />
        </Button>
      </div>
    </footer>
  )
}

export default Footer
