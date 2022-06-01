/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, Method, AxiosRequestHeaders } from 'axios'

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  BadRequest = 404,
  TooManyRequests = 429,
  InternalServerError = 500
}

const handleError = error => {
  const { response: { status = null } = {} } = error

  switch (status) {
    case StatusCode.InternalServerError: {
      // Handle InternalServerError
      break
    }
    case StatusCode.Forbidden: {
      // Handle Forbidden
      break
    }
    case StatusCode.BadRequest: {
      // Handle BadRequest
      alert('Bad request. Please try again!')
      break
    }
    case StatusCode.Unauthorized: {
      // Handle Unauthorized
      break
    }
    case StatusCode.TooManyRequests: {
      // Handle TooManyRequests
      break
    }
  }

  return error
}

const headers: AxiosRequestHeaders = {
  'Content-Type': 'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin': '*'
}

export const request = async (url: string, method: Method, data?: any, params?: any): Promise<any> => {
  const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_URL,
    headers,
    params
  }

  const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
    try {
      const token = localStorage.getItem('accessToken')

      if (token != null) {
        config.headers = {
          Authorization: `Bearer ${token}`
        }
      }

      return config
    } catch (error: any) {
      throw new Error(error)
    }
  }

  const instance: any = axios.create(config)

  instance.interceptors.request.use(injectToken, error => Promise.reject(error))

  instance.interceptors.response.use(
    config => config,
    error => {
      return Promise.reject(error)
    }
  )
  try {
    const getMethod: string = method.toLowerCase()
    const res = await instance[getMethod](url, data)

    return res.data
  } catch (error) {
    return handleError(error)
  }
}
