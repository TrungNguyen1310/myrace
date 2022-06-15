import React, { useEffect, useState } from 'react'
import { decrement, increment, fetchAll } from './demoSlice'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import LoadingSpinner from 'components/LoadingSpinner'
import AnimationLayouts from 'layouts/animationLayouts'
import VlBadge from 'components/Badge'
import VlCheckbox from 'components/Checkbox'
import CheckboxGroup, { ICheckboxList } from 'components/CheckboxGroup'

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
      <VlCheckbox label='Checkbox with darkMode' onChange={e => setvalue(e.target.checked)} checked={value} />
      <VlCheckbox darkMode={false} label='Checkbox without darkMode' onChange={e => setvalue(e.target.checked)} checked={value} />
      <VlCheckbox label='Checkbox' disabled onChange={e => setvalue1(e.target.checked)} checked={value1} />
      <VlCheckbox
        className={value2 ? 'text-primary_blue dark:text-secondary_pink' : 'text-red-400 dark:text-secondary_yellow'}
        label='Checkbox - Custom color'
        onChange={e => setvalue2(e.target.checked)}
        checked={value2}
      />
      {/* <div className='flex flex-row items-center'> */}
      <strong className='mr-4'>Checkbox Group: </strong>
      <CheckboxGroup checkboxesList={value3} onCheckboxGroupChange={val => setvalue3(val)} checkAll />
      {/* </div> */}
    </AnimationLayouts>
  )
}

export default Demo
