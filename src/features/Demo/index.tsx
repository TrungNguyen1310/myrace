import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './demoSlice'
import { RootState } from '../../store'

const Demo: React.FC = () => {
  const count = useSelector((state: RootState) => state.demoReducer.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button aria-label='Increment value' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Demo
