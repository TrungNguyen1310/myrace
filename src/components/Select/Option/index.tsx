/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface IOptionSelect {
  options: { value: string; label: string }[]
  onClickOption: any
  refProp: any
}

const OptionSelect: React.FC<IOptionSelect> = ({ options, refProp, onClickOption = () => undefined }) => {
  const onClick = (i: number) => {
    onClickOption(i)
  }

  return (
    <>
      {options.map((option, index) => (
        <div className='option p-4' key={option.value} onClick={() => onClick(index)}>
          <input type='radio' className='radio' id={option.value} name={option.value} value={option.value} ref={el => refProp.current.push(el)} />
          <label htmlFor='automobiles'>{option.label}</label>
        </div>
      ))}
    </>
  )
}

export default OptionSelect
