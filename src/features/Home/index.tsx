import Select from 'components/Select'
import React from 'react'

const Home = () => {
  const options = [
    { label: 'Apple', value: 'apple' },
    { label: 'Lemon', value: 'lemon' },
    { label: 'Melon', value: 'melon' }
  ]

  const onChangeSelect = value => {
    console.log(value)
  }
  return (
    <div>
      <Select variant='outlined' options={options} onChange={onChangeSelect} label='Juice' />
    </div>
  )
}

export default Home
