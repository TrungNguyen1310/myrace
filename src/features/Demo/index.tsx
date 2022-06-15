import React, { useEffect, useState } from 'react'
import { decrement, increment, fetchAll } from './demoSlice'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import LoadingSpinner from 'components/LoadingSpinner'
import AnimationLayouts from 'layouts/animationLayouts'
import VlBadge from 'components/Badge'
import VlCheckbox from 'components/Checkbox'
import CheckboxGroup, { ICheckboxList } from 'components/CheckboxGroup'
import VlInput from 'components/Input'
import { IconButton, InputAdornment } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import VlProgressBar from 'components/ProgressBar'
import VlRadio from 'components/Radio'

const Demo: React.FC = () => {
  const dispatch = useAppDispatch()
  const demoReducer = useAppSelector(state => state.demoReducer)
  const { value: count, listAlbums: albumsList, loading, users } = demoReducer
  const [value, setvalue] = useState<boolean>(false)
  const [value1, setvalue1] = useState<boolean>(true)
  const [value2, setvalue2] = useState<boolean>(true)
  const [value3, setvalue3] = useState<ICheckboxList[]>([
    {
      label: 'Shawshank Redemption',
      value: 'shawshankRedemption',
      checked: true
    },
    {
      label: 'The Godfather',
      value: 'theGodfather',
      checked: false
    },
    {
      label: 'The Dark Knight',
      value: 'theDarkKnight',
      checked: true
    },
    {
      label: 'Saving Private Ryan',
      value: 'savingPrivateRyan',
      checked: false
    },
    {
      label: 'Schindlers List',
      value: 'schindlersList',
      checked: true
    }
  ])
  const [value4, setvalue4] = useState<ICheckboxList[]>([
    {
      label: 'Apple',
      value: 'apple',
      checked: true
    },
    {
      label: 'Melon',
      value: 'melon',
      checked: false
    },
    {
      label: 'Orange',
      value: 'orange',
      checked: true
    }
  ])
  const [value5, setvalue5] = useState<string>('')
  const [value6, setvalue6] = useState<string>('')
  const [value7, setvalue7] = useState<string>('ssss')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [value8, setvalue8] = useState<string>('hello')
  const [value9, setvalue9] = useState<string>('apple')

  useEffect(() => {
    dispatch(fetchAll())
  }, [])

  if (loading) return <LoadingSpinner />

  // console.log('albumsList: ', albumsList)
  // console.log('users: ', users)

  return (
    <AnimationLayouts>
      <div>
        <button aria-label='Increment value' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <h1>BADGE</h1>
      <VlBadge badgeContent={10} primary>
        <div className='h-[30px] w-[30px] rounded-full bg-red-200 flex items-center justify-center'>VL</div>
      </VlBadge>
      <br />
      <br />
      <VlBadge badgeContent={0} showZero>
        <div className='h-[30px] w-[30px] rounded-full bg-red-200 flex items-center justify-center'>ok</div>
      </VlBadge>
      <br />
      <br />
      <h1>CHECKBOX</h1>
      <VlCheckbox label='Checkbox with darkMode' onChange={e => setvalue(e.target.checked)} checked={value} />
      <VlCheckbox darkMode={false} label='Checkbox without darkMode' onChange={e => setvalue(e.target.checked)} checked={value} />
      <VlCheckbox label='Checkbox' disabled onChange={e => setvalue1(e.target.checked)} checked={value1} />
      <VlCheckbox
        labelStyle={value2 ? 'text-primary_blue dark:text-secondary_pink' : 'text-red-400 dark:text-secondary_yellow'}
        label='Checkbox - Custom color'
        onChange={e => setvalue2(e.target.checked)}
        checked={value2}
      />
      <strong className='mr-4'>Checkbox Group (without darkMode): </strong>
      <CheckboxGroup darkMode={false} className='flex' checkboxesList={value3} onCheckboxGroupChange={val => setvalue3(val)} checkAll />
      <strong className='mr-4'>Checkbox Group (with darkMode): </strong>
      <CheckboxGroup
        labelStyleActive='text-primary_blue dark:text-secondary_pink'
        labelStyleInActive='text-green-400 dark:text-primary_purple'
        checkboxesList={value4}
        onCheckboxGroupChange={val => setvalue4(val)}
      />
      <h1>INPUT</h1>
      <VlInput placeholder='Type...' value={value5} onChange={e => setvalue5(e.target.value)} />
      <VlInput darkMode={false} className='ml-4' label='ABC' placeholder='Input...' value={value6} onChange={e => setvalue6(e.target.value)} />
      <VlInput
        type={showPassword ? 'text' : 'password'}
        endAdornment={
          <InputAdornment position='start'>
            <IconButton onClick={() => setShowPassword(!showPassword)} className='dark:text-red-500 text-sky-400 px-[15px] h-10 w-10'>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        className='ml-4'
        classNameInput='dark:text-primary_blue'
        label='Password'
        labelStyle='dark:text-red-300'
        placeholder='Input password...'
        value={value7}
        onChange={e => setvalue7(e.target.value)}
      />
      <VlInput variant='standard' classNameInput='dark:text-primary_purple' className='ml-4' label='ABC' placeholder='Input...' value={value8} onChange={e => setvalue8(e.target.value)} />
      <br />
      <h1>PROGRESS BAR</h1>
      <VlProgressBar value={30} className='w-full' />
      <VlProgressBar value={60} classNameWrapper='mt-3' className='w-[100px]' secondarypink />
      <VlProgressBar value={90} classNameWrapper='mt-3' className='w-[200px]' secondaryyellow label='90%' />
      <VlProgressBar value={50} classNameWrapper='mt-3' className='w-[300px]' primary />
      <VlProgressBar value={0} classNameWrapper='mt-3' className='w-[300px]' primary label='0%' />
      <br />
      <h1>RADIO</h1>
      <VlRadio
        value={value9}
        // darkMode={false}
        labelStyleActive='dark:text-red-500 text-vl_black'
        labelStyleInActive='dark:text-sky-400 text-vl_black-100'
        onChangeRadio={e => setvalue9(e.target.value)}
        listRadio={[
          { value: 'apple', label: 'Apple' },
          { value: 'samsung', label: 'Samsung' },
          { value: 'oppo', label: 'Oppo' }
        ]}
      />
    </AnimationLayouts>
  )
}

export default Demo
