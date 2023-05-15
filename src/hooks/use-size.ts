import { useEffect, useState } from 'react'
import { SIZES, SizeMap } from '../components/size-selector/sizes'

type SizeHook = (themeName?: string) => [SizeMap | undefined, string, (updateTheme: string) => void]

const useSize: SizeHook = (sizeName = 'large') => {
  const [size, setSize] = useState<SizeMap | undefined>(undefined)
  const [lastSize, setLastSize] = useState<string>('')

  useEffect(() => {
    const getSizeName = localStorage.getItem('size')

    if (getSizeName) {
      setLastSize(getSizeName)

      const newSize = SIZES.get(getSizeName)
      setSize(newSize)
    } else {
      updateSize(sizeName)
    }
  }, [sizeName])

  const updateSize = (value: string | null) => {
    const newSize = SIZES.get(value)

    setLastSize(value!)
    setSize(newSize)
    localStorage.setItem('size', value!)
  }

  return [size, lastSize, updateSize]
}

export default useSize
