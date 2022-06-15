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
  darkMode?: boolean
  className?: string
  classNameFormCheckbox?: string
  classNameCheckbox?: string
  labelStyleActive?: string
  labelStyleInActive?: string
}

const CheckboxGroup: React.FC<ICheckboxGroup> = ({
  checkAll = false,
  darkMode = true,
  checkboxesList = [],
  onCheckboxGroupChange = () => undefined,
  className,
  classNameCheckbox,
  classNameFormCheckbox,
  labelStyleActive,
  labelStyleInActive
}) => {
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
        darkMode={darkMode}
        key={`checkbox-${index}`}
        checked={item.checked}
        checkboxLabel={item.label}
        checkboxValue={item.value}
        checkboxChangeCallback={checkStatus => handleChildCheckboxChange(checkStatus, index)}
        className={classNameCheckbox}
        classNameFormCheckbox={classNameFormCheckbox}
        labelStyleActive={labelStyleActive}
        labelStyleInActive={labelStyleInActive}
      />
    ))
  }

  return (
    <FormGroup>
      <div className={[className].join(' ')}>
        {checkAll && (
          <CheckboxItem
            checkboxLabel='All'
            checkboxValue='all'
            checked={parentCheckboxChecked}
            checkboxChangeCallback={handleParentCheckboxChange}
            darkMode={darkMode}
            className={classNameCheckbox}
            classNameFormCheckbox={classNameFormCheckbox}
            labelStyleActive={labelStyleActive}
            labelStyleInActive={labelStyleInActive}
          />
        )}
        <div className='checkbox-children'>{renderCheckboxes()}</div>
      </div>
    </FormGroup>
  )
}

export default CheckboxGroup
