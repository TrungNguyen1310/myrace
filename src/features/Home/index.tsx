import React from 'react'
import Input from 'components_ver2/Input'
import { Form } from 'antd'
import Button from 'components_ver2/Button'

const Home = () => {
  const onValuesChange = e => {
    console.log('okoko: ', e)
  }

  const onFinish = e => {
    console.log('onFinish: ', e)
  }
  return (
    <div>
      <Form layout='vertical' onValuesChange={onValuesChange} onFinish={onFinish}>
        <Form.Item label='Username' name='username'>
          <Input placeholder='type...' />
        </Form.Item>
        <Form.Item label='Password' name='password'>
          <Input placeholder='type...' />
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
