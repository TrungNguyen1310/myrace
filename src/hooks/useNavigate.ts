import { useTransition } from 'react'
import { useNavigate } from 'react-router-dom'

const useNavigateHook = () => {
  const _navigate = useNavigate()
  const [pending, startTransition] = useTransition()

  const navigate = (path: string) => {
    startTransition(() => {
      _navigate(path)
    })
  }

  return [navigate]
}

export { useNavigateHook }
