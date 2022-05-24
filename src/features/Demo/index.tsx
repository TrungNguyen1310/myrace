import React, { useEffect } from 'react'
import { decrement, fetchAlbums, increment } from './demoSlice'
import { RootState } from '../../store'
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks'

const Demo: React.FC = () => {
  const dispatch = useAppDispatch()
  const demoReducer = useAppSelector((state: RootState) => state.demoReducer)
  const { value: count, listAlbums: albumsList } = demoReducer

  useEffect(() => {
    dispatch(fetchAlbums())
  }, [])

  console.log('albumsList: ', albumsList)

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
