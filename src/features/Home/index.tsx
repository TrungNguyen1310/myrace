import React from 'react'
import Input from 'components_ver2/Input'
import { Avatar, Form, Select as AntSelect } from 'antd'
import Button from 'components_ver2/Button'
import Select from 'components_ver2/Select'
import Badge from 'components_ver2/Badge'
import Checkbox from 'components_ver2/Checkbox'
import CheckboxGroup from 'components_ver2/CheckboxGroup'
import Radio from 'components_ver2/Radio'

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
      <Form
        layout='vertical'
        onValuesChange={onValuesChange}
        onFinish={onFinish}
        initialValues={{
          outlinedSelect: 'usa',
          fruit: false,
          groupFruits: ['vn']
        }}
      >
        <Form.Item label='Base Radio' name='radioFruit'>
          <Radio className='pl-10'>Adidas</Radio>
        </Form.Item>
        <Form.Item label='Primary Radio' name='radioFruit'>
          <Radio primary className='pl-10'>
            Nike
          </Radio>
        </Form.Item>
        <Form.Item label='Username' name='username' rules={[{ required: true, message: 'Please input Username !' }]}>
          <Input placeholder='type...' />
        </Form.Item>
        <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Please input Password !' }]}>
          <Input typeInput='Password' placeholder='type...' />
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
