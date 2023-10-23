import { useRef } from 'react'

const useDebounce = <T extends (...args: any[]) => void>(
  fn: T,
  delay: number
) => {
  const Timer = useRef<number | undefined>()

  return function (...args: Parameters<T>) {
    if (Timer.current) {
      clearTimeout(Timer.current)
    }
    Timer.current = window.setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

export default useDebounce
