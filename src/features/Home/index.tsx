import React, { useState } from 'react'
import Select from 'components/Select'
import Input from 'components/Input'
import { ReactComponent as SocialIcon } from 'assets/icons/social.svg'
import Button from 'components/Button'

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
  const options2 = [
    { label: 'Viet Nam', value: 'vn' },
    { label: 'USA', value: 'usa' },
    { label: 'Canada', value: 'ca' }
  ]

  const onChangeSelect = value => {
    console.log(value)
  }

  return (
    <div>
      <div className='flex items-end mb-4'>
        <Button>Submit</Button>
        <Button disabled>Disabled</Button>
        <Button className='h-[24px] w-[40px]' primary>
          OK
        </Button>
        <Button className='h-[24px] w-[40px]' primaryBlue>
          ok
        </Button>
        <Button className='h-[24px] w-[40px]' secondaryPink>
          OK
        </Button>
        <Button className='' shape='circle' icon={<SocialIcon />} />
        <Button className='' icon={<SocialIcon />}>
          Search
        </Button>
      </div>
      <Select labelStyle='text-red-400' className='mb-10' variant='outlined' options={options} onChange={onChangeSelect} label='Juice' />
      <Select labelStyle='text-primary_purple' variant='standard' options={options1} onChange={onChangeSelect} label='ABC' />
      <Select defaultValue='vn' variant='outlined' options={options2} onChange={onChangeSelect} label='Country' />
      <br />
      <br />
      <Input label='Email' value={value} onChange={e => setvalue(e.target.value)} placeholder='Type...' icon={<SocialIcon />} />
      <Input classNameInput='bg-red-300' className='ml-20 text-sky-500' labelStyle='text-red-300' label='Text' value={value} onChange={e => setvalue(e.target.value)} placeholder='Type...' />
      <Input disabled label='Text' value={value} onChange={e => setvalue(e.target.value)} placeholder='Type...' />
      <Input label='Password' variant='standard' value={value} onChange={e => setvalue(e.target.value)} placeholder='Type...' icon={<SocialIcon />} />
    </div>
  )
}

export default Home
