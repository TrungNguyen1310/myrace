/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactElement, ReactNode } from 'react'
import { Select as AntSelect } from 'antd'
import { ReactComponent as ArrowDownIcon } from 'assets/icons/arrowdown.svg'
import './style.scss'

interface ISelect {
  children: ReactNode
  clearIcon?: ReactNode
  suffixIcon?: ReactNode
  removeIcon?: ReactNode
  tagRender?: (props: any) => ReactElement
  className?: string
  title?: string
  placeholder?: string
  value?: string
  searchValue?: string
  open?: boolean
  loading?: boolean
  virtual?: boolean
  disabled?: boolean
  autoFocus?: boolean
  showArrow?: boolean
  allowClear?: boolean
  showSearch?: boolean
  onChange?: any
  status?: 'error' | 'warning'
  mode?: 'multiple' | 'tags'
  variant?: 'standard' | 'outlined'
  options?: { label: string; value: string }[]
  placement?: 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'
}

const Select: React.FC<ISelect> = props => {
  const { children, className, variant = 'outlined' } = props
  const variantClassname = variant === 'outlined' ? 'vl-select-outlined_ver2' : 'vl-select-standard_ver2'
  return (
    <AntSelect {...props} showArrow={variant === 'outlined'} suffixIcon={<ArrowDownIcon />} className={['vl-select', variantClassname, className].join(' ')}>
      {children}
    </AntSelect>
  )
}

export default Select
