/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react'

const useOutsideClick = callback => {
  const ref = useRef<any>()
  useEffect(() => {
    const handleClick = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  return ref
}

export default useOutsideClick
