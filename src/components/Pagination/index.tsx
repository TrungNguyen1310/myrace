/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import type { PaginationProps } from 'antd'
import { Pagination as AntPagination } from 'antd'

import './style.scss'

interface IPagination {
  total: number
  current?: number
  pageSize?: number
  defaultCurrent?: number
  defaultPageSize?: number
  className?: string
  disabled?: boolean
  hideOnSinglePage?: boolean
  showSizeChanger?: boolean
  showLessItems?: boolean
  showQuickJumper?: boolean
  showTitle?: boolean
  showTotal?: any
  responsive?: boolean
  variant?: 'centered' | 'transparent' | 'outlined'
  onChange?: (page: number, pageSize: number) => void
  onShowSizeChange?: (current?: number, size?: number) => void
}

const Pagination: React.FC<IPagination> = props => {
  const { className, variant = 'centered', showSizeChanger = false } = props
  const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    if (variant === 'transparent') {
      if (type === 'prev') {
        return <a>Previous</a>
      }
      if (type === 'next') {
        return <a>Next</a>
      }
    }
    return originalElement
  }
  return <AntPagination {...props} hideOnSinglePage showSizeChanger={showSizeChanger} itemRender={itemRender} className={['vl-pagination', className].join(' ')} />
}

export default Pagination
