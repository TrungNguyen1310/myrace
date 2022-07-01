import React from 'react'
import Input from 'components_ver2/Input'
import { Form, Select as AntSelect } from 'antd'
import Button from 'components_ver2/Button'
import Select from 'components_ver2/Select'

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
          outlinedSelect: 'usa'
        }}
      >
        <Form.Item label='Username' name='username'>
          <Input placeholder='type...' />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input typeInput='Password' placeholder='type...' />
        </Form.Item>
        <Form.Item label='Outlined Select' name='outlinedSelect'>
          <Select allowClear placement='topLeft' placeholder='Select...'>
            <Option value='vn'>Viet Nam</Option>
            <Option value='usa'>USA</Option>
          </Select>
        </Form.Item>
        <Form.Item label='Standard Select' name='standardSelect'>
          <Select variant='standard' placeholder='Select...'>
            <Option value='vn'>Viet Nam</Option>
            <Option value='usa'>USA</Option>
          </Select>
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
