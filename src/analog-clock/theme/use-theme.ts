import { useEffect, useState } from 'react'
import { THEMES, ThemeType } from './themes'

type ThemeHook = (themeName?: string) => [ThemeType | undefined, (updateTheme: string) => void]

const useTheme: ThemeHook = (themeName = 'dark') => {
  const [theme, setTheme] = useState<ThemeType | undefined>(undefined)

  useEffect(() => {
    const getThemeName = localStorage.getItem('theme')

    if (getThemeName) {
      const newTheme = THEMES.get(getThemeName)
      setTheme(newTheme)
      localStorage.setItem('theme', getThemeName)
    } else {
      updateTheme(getThemeName)
    }
  }, [themeName])

  const updateTheme = (value: string | null) => {
    const newTheme = THEMES.get(value)

    setTheme(newTheme)
    localStorage.setItem('theme', value!)
  }

  return [theme, updateTheme]
}

export default useTheme
