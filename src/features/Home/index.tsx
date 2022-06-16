import React, { useState } from 'react'
import Select from 'components/Select'
import Input from 'components/Input'

const Home = () => {
  const [value, setvalue] = useState<string>('')
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
      <br />
      <br />
      <Input label='Email' value={value} onChange={e => setvalue(e.target.value)} placeholder='Type...' />
    </div>
  )
}

export default Home
