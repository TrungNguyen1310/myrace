import React, { useEffect } from 'react'
import { decrement, increment, fetchAll } from './demoSlice'
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks'
import LoadingSpinner from 'components/LoadingSpinner'
import AnimationLayouts from 'layouts/animationLayouts'

const Demo: React.FC = () => {
  const dispatch = useAppDispatch()
  const demoReducer = useAppSelector(state => state.demoReducer)
  const { value: count, listAlbums: albumsList, loading, users } = demoReducer

  useEffect(() => {
    dispatch(fetchAll())
  }, [])

  if (loading) return <LoadingSpinner />

  console.log('albumsList: ', albumsList)
  console.log('users: ', users)

  return (
    <AnimationLayouts>
      <div>
        <button aria-label='Increment value' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </AnimationLayouts>
  )
}

export default Demo
