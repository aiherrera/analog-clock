import { useEffect, useState } from 'react'
import { THEMES, ThemeMap } from '../components/theme-selector/themes'

type ThemeHook = (themeName?: string) => [ThemeMap | undefined, (updateTheme: string) => void]

const useTheme: ThemeHook = (themeName = 'dark') => {
  const [theme, setTheme] = useState<ThemeMap | undefined>(undefined)

  useEffect(() => {
    const getThemeName = localStorage.getItem('theme')

    if (getThemeName) {
      const newTheme = THEMES.get(getThemeName)
      setTheme(newTheme)
    } else {
      updateTheme(themeName)
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
