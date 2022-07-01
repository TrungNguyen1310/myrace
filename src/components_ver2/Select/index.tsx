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
  const { children, className, variant = 'outlined', showArrow } = props
  const variantClassname = variant === 'outlined' ? 'vl-select-outlined' : 'vl-select-standard'

  return (
    <AntSelect {...props} showArrow={'showArrow' in props ? showArrow : variant === 'outlined'} suffixIcon={<ArrowDownIcon />} className={['vl-select', variantClassname, className].join(' ')}>
      {children}
    </AntSelect>
  )
}

export default Select
