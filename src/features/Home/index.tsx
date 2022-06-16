import React from 'react'
import Select from 'components/Select'

const Home = () => {
  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Lemon', value: 'lemon' },
    { label: 'Melon', value: 'melon' }
  ]
  const options1 = [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
    { label: 'C', value: 'c' }
  ]

  const onChangeSelect = value => {
    console.log(value)
  }

  return (
    <div>
      <Select labelStyle='text-red-400' className='mb-10' variant='outlined' options={options} onChange={onChangeSelect} label='Juice' />
      <Select labelStyle='text-primary_purple' variant='standard' options={options1} onChange={onChangeSelect} label='ABC' />
    </div>
  )
}

export default Home
