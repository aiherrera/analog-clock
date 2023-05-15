import { ChangeEvent, FC } from 'react'
import { ClockSizes } from '../../types/clock-sizes'
import { SizesList } from './sizes'
import useDeviceType from '../../hooks/use-device-type'

interface SizesProps {
  updateSize: (size: ClockSizes) => void
  defaultSize: string
}

const Sizes: FC<SizesProps> = ({ updateSize, defaultSize }) => {
  const deviceType = useDeviceType()

  const handleUpdateSize = (event: ChangeEvent<HTMLInputElement>) => {
    const size = event.target.value as ClockSizes
    updateSize(size)
  }

  return (
    <div>
      <label className="text-base font-semibold text-slate-200">Select the size of the clock</label>

      <fieldset className="mt-4">
        <legend className="sr-only">Clock size selection</legend>

        <div className="space-y-2 sm:flex sm:items-center sm:space-x-5 sm:space-y-0">
          {SizesList.map((size) => (
            <div key={size.id} className="flex items-center">
              <input
                id={size.id}
                name="size-id"
                type="radio"
                value={size.id}
                checked={size.id === defaultSize}
                disabled={deviceType === 'mobile' && size.id === 'large'}
                onChange={handleUpdateSize}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor={size.id}
                className="ml-3 block text-sm font-medium leading-6 text-slate-300"
              >
                {size.title}{' '}
                {deviceType === 'mobile' && size.id === 'large' && '(disabled on mobile)'}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}

export default Sizes
