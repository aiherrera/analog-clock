import { useEffect, useState } from 'react'

const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState('')

  const handleResize = () => {
    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const isTablet = window.matchMedia('(max-width: 1023px)').matches

    if (isMobile) {
      setDeviceType('mobile')
    } else if (isTablet) {
      setDeviceType('tablet')
    } else {
      setDeviceType('desktop')
    }
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return deviceType
}

export default useDeviceType
