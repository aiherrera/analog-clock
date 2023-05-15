import { useEffect, useState } from 'react'

type ClockHook = () => [Date, boolean]

const useClock: ClockHook = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [isDaytime, setIsDaytime] = useState(true)

  const updateTime = () => {
    setCurrentTime(new Date())
  }

  useEffect(() => {
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const hours = currentTime.getHours()

    const sunriseTime = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate(),
      6,
      0,
      0
    )
    const sunsetTime = new Date(
      currentTime.getFullYear(),
      currentTime.getMonth(),
      currentTime.getDate(),
      18,
      0,
      0
    )

    setIsDaytime(hours >= sunriseTime.getHours() && hours < sunsetTime.getHours())
  }, [currentTime])

  return [currentTime, isDaytime]
}

export default useClock
