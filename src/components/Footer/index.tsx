import React, { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ReactComponent as MoonIcon } from 'assets/icons/moon.svg'
import { ThemeContext } from 'context/ThemeContext'
import Select from 'components_ver2/Select'
import './style.scss'
import Button from 'components_ver2/Button'

const Footer: React.FC = () => {
  const { i18n, t } = useTranslation()
  const [currency, setCurrency] = useState<string>('vnd')
  const [language, setLanguage] = useState<string>('en')
  const options = [
    { label: t('components.footer.language.english'), value: 'en' },
    { label: t('components.footer.language.german'), value: 'de' }
  ]

  const options1 = [
    { label: t('components.footer.currency.usd'), value: 'usd' },
    { label: t('components.footer.currency.vnd'), value: 'vnd' }
  ]
  const [theme, setTheme] = useContext(ThemeContext)

  const getCurrentLanguage = () => {
    const lang = localStorage.getItem('i18nextLng') || 'en'

    setLanguage(lang)
    i18n.changeLanguage(lang)
  }

  useEffect(() => {
    getCurrentLanguage()
  }, [])

  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const onChangeSelect = (value, type: string) => {
    if (type === 'currency') {
      setCurrency(value)
    } else {
      i18n.changeLanguage(value)
      setLanguage(value)
    }
  }

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
      <div className='flex items-center justify-between relative'>
        <Select showArrow={false} bordered={false} value={currency} options={options1} onChange={val => onChangeSelect(val, 'currency')} className='lang-select w-fit' />
        <Select showArrow={false} bordered={false} value={language} options={options} onChange={val => onChangeSelect(val, 'language')} className='px-[41px] currency-select w-fit' />
        <Button
          shape='circle'
          icon={<MoonIcon />}
          onClick={toggleDarkMode}
          className={`${theme === 'dark' && 'darkmode-btn'} border-solid border border-vl_grey-500 w-[46px] h-[46px] dark:bg-transparent`}
        />
      </div>
    </footer>
  )
}

export default Footer
