/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig } from 'axios'

export const request = async (url = '', method = '', data = {}, params = {}) => {
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  }

  const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_URL,
    headers,
    params
  }

  const instance: any = axios.create(config)

  instance.interceptors.response.use(
    config => config,
    error => {
      return Promise.reject(error)
    }
  )
  try {
    const getMethod: string = method.toLowerCase()
    const res = await instance[getMethod](url, data)
    // const res = await instance.get(url, data)
    return res.data
  } catch (e) {
    return e
  }
}
