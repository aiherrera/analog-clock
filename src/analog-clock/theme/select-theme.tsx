import { ChangeEvent, FC, useEffect, useState } from 'react'

interface SelectThemeProps {
  updateTheme: (theme: string) => void
}

const SelectTheme: FC<SelectThemeProps> = ({ updateTheme }) => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value

    setSelectedOption(newValue)
    updateTheme(newValue)
  }

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme')

    setSelectedOption(currentTheme || 'dark')
  }, [])

  return (
    <div>
      <label htmlFor="location" className="block text-base font-medium leading-6 text-gray-200">
        Select theme
      </label>

      <select
        id="theme"
        name="theme"
        className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="dark">Dark</option>
        <option value="light">Light</option>
        <option value="neutral">Neutral</option>
      </select>
    </div>
  )
}

export default SelectTheme
