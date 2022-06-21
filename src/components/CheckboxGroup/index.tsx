/* eslint-disable @typescript-eslint/no-explicit-any */
import Checkbox from 'components/Checkbox'
import React, { useEffect, useState } from 'react'

export interface ICheckboxList {
  label: string
  value: string
  checked: boolean
}

interface ICheckboxGroup {
  checkboxesList: ICheckboxList[]
  onCheckboxGroupChange: any
  checkAll?: boolean
  className?: string
  classNameCheckbox?: string
}

const CheckboxGroup: React.FC<ICheckboxGroup> = ({ checkboxesList, checkAll, className, onCheckboxGroupChange, ...props }) => {
  const [parentCheckboxChecked, setParentCheckboxChecked] = useState<boolean>(false)

  useEffect(() => {
    if (checkAll) updateParentWithChildren(checkboxesList)
  }, [checkboxesList, checkAll])

  const updateParentWithChildren = checkboxesArr => {
    let allChecked = false
    checkboxesArr.every(item => {
      if (!item.checked) {
        allChecked = false
        return false
      }

      allChecked = true
      return true
    })

    setParentCheckboxChecked(allChecked)
  }

  const handleParentCheckboxChange = e => {
    const newCheckboxState = checkboxesList.map(aCheckbox => ({
      ...aCheckbox,
      checked: e.target.checked
    }))

    onCheckboxGroupChange(newCheckboxState)
  }

  const onChangeCheckboxGroup = (e, index: number) => {
    const newCheckboxState = checkboxesList.map((aCheckbox, i) => (index === i ? { ...aCheckbox, checked: e.target.checked } : aCheckbox))
    onCheckboxGroupChange(newCheckboxState)
  }

  const renderCheckboxes = () => {
    if (!checkboxesList) return null

    return checkboxesList.map((item, index) => <Checkbox key={item.value} value={item.value} checked={item.checked} label={item.label} onChange={e => onChangeCheckboxGroup(e, index)} />)
  }

  return (
    <div className={[className].join(' ')}>
      {checkAll && <Checkbox value='all' label='All' checked={parentCheckboxChecked} onChange={handleParentCheckboxChange} />}
      <div className='checkbox-children'>{renderCheckboxes()}</div>
    </div>
  )
}

export default CheckboxGroup
