import { useEffect, useState } from 'react'

type ClockHook = () => [any, boolean]

const useClock: ClockHook = () => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [timing, setTiming] = useState({ updateSeconds: {}, updateMinutes: {}, updateHours: {} })
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

    setTiming({
      updateSeconds: { transform: `rotate(${currentTime.getSeconds() * 6}deg)` },
      updateMinutes: { transform: `rotate(${currentTime.getMinutes() * 6}deg)` },
      updateHours: {
        transform: `rotate(${currentTime.getHours() * 30 + currentTime.getMinutes() / 2}deg)`,
      },
    })
  }, [currentTime])

  return [timing, isDaytime]
}

export default useClock
