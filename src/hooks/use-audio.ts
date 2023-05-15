import { useEffect, useState } from 'react'

type AudioHook = (src: string) => [boolean, () => void]

const useAudio: AudioHook = (src = '') => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  const toggleTick = () => {
    setPlaying(!playing)
  }

  useEffect(() => {
    const audioObj = new Audio(src)
    setAudio(audioObj)

    return () => {
      audioObj.pause()
      setAudio(null)
    }
  }, [src])

  useEffect(() => {
    if (!audio) return

    if (playing) {
      audio
        .play()
        .then(() => {
          // Autoplay started!
        })
        .catch((error) => {
          // Autoplay was prevented.
          console.log(error)
        })
    } else {
      audio.pause()
    }

    audio.loop = true
  }, [audio, playing])

  useEffect(() => {
    if (!audio) return

    const handleEnded = () => setPlaying(false)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('ended', handleEnded)
    }
  }, [audio])

  return [playing, toggleTick]
}

export default useAudio
