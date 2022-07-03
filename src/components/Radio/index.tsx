import React, { useEffect, useState } from 'react'
import './style.scss'

interface IRadio {
  // REQUIRED
  value: string | number | undefined
  label: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  // OPTIONAL
  primary?: boolean
  checked?: boolean
  disabled?: boolean
  className?: string
}

const Radio: React.FC<IRadio> = ({ value, onChange = () => undefined, primary, label, disabled, checked: checkedRadio = false }) => {
  const [checked, setChecked] = useState<boolean>(checkedRadio)

  useEffect(() => {
    setChecked(checkedRadio)
  }, [checkedRadio])

  const onChangeRadio = e => {
    setChecked(e.target.checked)
    onChange(e)
  }

  return (
    <label className={['vl-old-radio', disabled ? 'vl-old-radio-disabled' : ''].join(' ')}>
      <span className={['vl-old-radio__input', value && checked ? 'vl-old-radio-checked' : ''].join(' ')}>
        <input checked={checked} disabled={disabled} type='radio' onChange={onChangeRadio} value={value} />
        <span className={['vl-old-radio-inner', `vl-old-radio-inner-${primary ? 'primary' : 'secondary'}`].join(' ')} />
      </span>
      <span className={['vl-old-radio__label', value && checked ? 'checked' : ''].join(' ')}>{label}</span>
    </label>
  )
}
export default Radio
