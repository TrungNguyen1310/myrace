/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { FormGroup } from '@mui/material'
import CheckboxItem from 'components/CheckboxGroup/CheckboxItem'

export interface ICheckboxList {
  label: string
  value: string
  checked: boolean
}

interface ICheckboxGroup {
  checkboxesList: ICheckboxList[]
  onCheckboxGroupChange: any
  checkAll?: boolean
}

const CheckboxGroup: React.FC<ICheckboxGroup> = ({ checkboxesList = [], onCheckboxGroupChange = () => undefined, checkAll = false }) => {
  const [parentCheckboxChecked, setParentCheckboxChecked] = useState<boolean>(false)

  // *********** [START] HANDLE SELECT ALL CHECKBOXES ***********
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

  const handleParentCheckboxChange = isChecked => {
    const newCheckState = checkboxesList.map(aCheckbox => ({
      ...aCheckbox,
      checked: isChecked
    }))
    onCheckboxGroupChange(newCheckState)
  }
  // *********** [END] HANDLE SELECT ALL CHECKBOXES ***********

  const handleChildCheckboxChange = (isChecked, index) => {
    const newCheckState = checkboxesList.map((aCheckbox, i) => (index === i ? { ...aCheckbox, checked: isChecked } : aCheckbox))
    onCheckboxGroupChange(newCheckState)
  }

  const renderCheckboxes = () => {
    if (!checkboxesList) return null

    return checkboxesList.map((item, index) => (
      <CheckboxItem
        key={`checkbox-${index}`}
        checkboxLabel={item.label}
        checkboxValue={item.value}
        checked={item.checked}
        checkboxChangeCallback={checkStatus => handleChildCheckboxChange(checkStatus, index)}
      />
    ))
  }

  return (
    <div className='checkbox-wrapper'>
      <FormGroup>
        <div className='checkbox-head'>
          {checkAll && <CheckboxItem checkboxLabel='All' checkboxValue='all' checked={parentCheckboxChecked} checkboxChangeCallback={handleParentCheckboxChange} />}
          <div className='checkbox-children'>{renderCheckboxes()}</div>
        </div>
      </FormGroup>
    </div>
  )
}

export default CheckboxGroup
