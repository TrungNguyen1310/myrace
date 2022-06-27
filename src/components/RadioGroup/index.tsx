import Radio from 'components/Radio'
import React from 'react'

export interface IRadioList {
  label: string
  value: string
  disabled?: boolean
}

interface IRadioGroup {
  radioList: IRadioList[]
  value: string | number | undefined
  onChange: (value: IRadioList) => void
  className?: string
}

const RadioGroup: React.FC<IRadioGroup> = ({ radioList, value, onChange, className }) => {
  const onChangeRadioGroup = e => {
    const val = radioList.find(item => item.value === e.target.value) || { label: '', value: '' }
    onChange(val)
  }

  const renderRadioList = () => {
    if (!radioList) return null
    return radioList.map(item => <Radio checked={value === item.value} disabled={item.disabled} key={item.value} value={item.value} label={item.label} onChange={e => onChangeRadioGroup(e)} />)
  }

  return <div className={[className].join(' ')}>{renderRadioList()}</div>
}

export default RadioGroup
