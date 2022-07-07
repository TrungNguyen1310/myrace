import React from 'react'
import { Avatar, Form, Select as AntSelect } from 'antd'

import Input from 'components/Input'
import Button from 'components/Button'
import Select from 'components/Select'
import Badge from 'components/Badge'
import Checkbox from 'components/Checkbox'
import CheckboxGroup from 'components/CheckboxGroup'
import Radio from 'components/Radio'
import RadioGroup from 'components/RadioGroup'
import Switch from 'components/Switch'
import ProgressBar from 'components/Progress'
import Pagination from 'components/Pagination'

const { Option } = AntSelect

const Home = () => {
  const onValuesChange = e => {
    console.log('okoko: ', e)
  }

  const onFinish = e => {
    console.log('onFinish: ', e)
  }

  return (
    <div>
      <ProgressBar percent={50} className='w-32' />
      <br />
      <ProgressBar percent={20} className='w-32' secondary_pink />
      <br />
      <ProgressBar percent={90} className='w-32' secondary_yellow />
      <br />
      <Pagination defaultCurrent={12} total={500} />
      <Form
        layout='vertical'
        onValuesChange={onValuesChange}
        onFinish={onFinish}
        initialValues={{
          outlinedSelect: 'usa',
          fruit: false,
          groupFruits: ['vn'],
          radioGroup: '1',
          radioNike: 'nike'
        }}
      >
        <Form.Item label='Switch' name='switchVal' valuePropName='checked'>
          <Switch />
        </Form.Item>
        <Form.Item label='Base Radio' name='radioAdidas' valuePropName='checked'>
          <Radio className='pl-10' value='adidas'>
            Adidas
          </Radio>
        </Form.Item>
        <Form.Item label='Primary Radio' name='radioNike' valuePropName='checked'>
          <Radio disabled primary className='pl-10' value='nike'>
            Nike
          </Radio>
        </Form.Item>
        <Form.Item label='Radio Group' name='radioGroup'>
          <RadioGroup className='pl-10'>
            <Radio value='1'>Adidas</Radio>
            <Radio value='2'>Nike</Radio>
          </RadioGroup>
        </Form.Item>
        <Form.Item label='Radio Group with options' name='radioGroupOpts'>
          <RadioGroup className='pl-10' options={['Apple', 'Pear', 'Orange']} />
        </Form.Item>
        <Form.Item label='Username' name='username' rules={[{ required: true, message: 'Please input Username !' }]}>
          <Input placeholder='type...' />
        </Form.Item>
        <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Please input Password !' }]}>
          <Input inputType='Password' placeholder='type...' />
        </Form.Item>
        <Form.Item label='Outlined Select' name='outlinedSelect' rules={[{ required: true, message: 'Please select !' }]}>
          <Select allowClear placement='topLeft' placeholder='Select...'>
            <Option value='vn'>Viet Nam</Option>
            <Option value='usa'>USA</Option>
          </Select>
        </Form.Item>
        <Form.Item label='Standard Select' name='standardSelect' rules={[{ required: true, message: 'Please select !' }]}>
          <Select variant='standard' placeholder='Select...'>
            <Option value='vn'>Viet Nam</Option>
            <Option value='usa'>USA</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Badge count={5} primary>
            <Avatar shape='square' size='large' />
          </Badge>
          <Badge count={1} className='ml-5'>
            <Avatar shape='square' size='large' />
          </Badge>
          <Badge count={0} className='ml-5' showZero>
            <Avatar shape='square' size='large' />
          </Badge>
          <Badge count={10} className='ml-5' color='#e227ec'>
            <Avatar shape='square' size='large' />
          </Badge>
          <Badge count={11} className='ml-5' color='#e227ec' overflowCount={10}>
            <Avatar shape='square' size='large' />
          </Badge>
          <Badge count={10} className='ml-5' color='green' dot>
            <Avatar shape='square' size='large' />
          </Badge>
        </Form.Item>
        <Form.Item label='Checkbox' name='fruit' valuePropName='checked'>
          <Checkbox className='pl-10' value='apple'>
            Apple
          </Checkbox>
        </Form.Item>
        <Form.Item label='Checkbox Group' name='groupFruits'>
          <CheckboxGroup
            className='pl-10'
            options={[
              { label: 'Viet Nam', value: 'vn', disabled: true },
              { label: 'USA', value: 'usa' },
              { label: 'Canada', value: 'ca' }
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit' type='primary' className='w-[360px]'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Home
