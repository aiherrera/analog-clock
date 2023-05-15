/**
 * author: Alain Iglesias
 * website: https://aiherrera.com
 *
 * There is an article explaining how this component was built in my blog
 * check it out: https://blog.aiherrera.com/
 */
import { FC } from 'react'
import useAudio from './use-audio'
import useClock from './use-clock'
import useTheme from './theme/use-theme'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import SelectTheme from './theme/select-theme'

interface AnalogClockProps {
  clockSize?: 'small' | 'medium' | 'large'
}

const AnalogClock: FC<AnalogClockProps> = ({ clockSize = 'large' }) => {
  const [playing, toggleTick] = useAudio('./tick.mp3')
  const [currentTime, isDaytime] = useClock()

  const [theme, updateTheme] = useTheme('dark')

  const clockNumbers = Array.from({ length: 12 }, (_, i) => i + 1)

  const updateSeconds = { transform: `rotate(${currentTime.getSeconds() * 6}deg)` }
  const updateMinutes = { transform: `rotate(${currentTime.getMinutes() * 6}deg)` }
  const updateHours = {
    transform: `rotate(${currentTime.getHours() * 30 + currentTime.getMinutes() / 2}deg)`,
  }

  const getClockSize = () => {
    switch (clockSize) {
      case 'large':
        return {
          size: 'w-96 h-96',
          numbers: 'inset-5 text-5xl',
          center: 'h-4 w-4 -bottom-[3px]',
          hands: {
            hour: 'h-[6.5em] w-1.5',
            minute: 'h-[11em] w-1',
            second: 'h-[11em] w-[0.09em]',
          },
        }

      case 'medium':
        return {
          size: 'w-56 h-56',
          numbers: 'inset-2 text-2xl',
          center: 'h-2.5 w-2.5 bottom-[2px]',
          hands: {
            hour: 'h-[4.5em] w-[0.3em]',
            minute: 'h-[6.5em] w-[0.2em]',
            second: 'h-[6.5em] w-[0.09em]',
          },
        }

      default:
        return {
          size: 'w-40 h-40',
          numbers: 'inset-1 text-xl',
          center: 'h-2 w-2 bottom-[2px]',
          hands: {
            hour: 'h-[2.8em] w-[0.2em]',
            minute: 'h-[4.5em] w-[0.15em]',
            second: 'h-[4.5em] w-[0.07em]',
          },
        }
    }
  }

  const clockUI = getClockSize()

  return (
    <div className="flex cursor-pointer flex-wrap items-center justify-center gap-10">
      <div className="relative flex cursor-pointer flex-col gap-y-5">
        <div className="flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id="ticking"
              name="ticking"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-slate-50 focus:ring-indigo-600"
              onChange={toggleTick}
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="tiking" className="font-medium text-gray-200">
              Enable clock ticking ({playing ? 'on' : 'off'})
            </label>
          </div>
        </div>

        <SelectTheme updateTheme={updateTheme} />
      </div>

      <div className="group relative flex cursor-pointer items-center justify-center text-sm">
        <section className="absolute right-12 top-5 h-10 w-10 rotate-12 transition-all delay-200 group-hover:-top-5">
          {isDaytime ? <SunIcon className="text-yellow-500" /> : <MoonIcon />}
        </section>

        <div
          className={`${clockUI.size} ${theme?.main} ${theme?.shadow} relative flex items-center justify-center rounded-full`}
        >
          {clockNumbers.map((num) => (
            <label
              key={num}
              className={`absolute ${clockUI.numbers} text-center`}
              style={{ transform: `rotate(calc(${num}*(360deg/12)))` }}
            >
              <span
                className={`inline-block`}
                style={{ transform: `rotate(calc(${num}*(-360deg/12)))` }}
              >
                {num}
              </span>
            </label>
          ))}

          <section className="box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25); absolute z-50 flex h-4 w-4 justify-center">
            {/* Clock center */}
            <span
              className={`${clockUI.center} ${theme?.hand.center} absolute z-50 flex rounded-full before:absolute before:left-0.5 before:top-0.5 before:h-3 before:w-3 before:justify-center before:rounded-full`}
            ></span>
            {/* Second hand */}
            <span
              className={`${clockUI.hands?.second} ${theme?.hand.second} absolute bottom-1.5 z-30 w-1 origin-bottom rounded-md`}
              style={updateSeconds}
            ></span>
            {/* Minute hand */}
            <span
              className={`${clockUI.hands?.minute} ${theme?.hand.minute} absolute bottom-1.5 z-20 origin-bottom rounded-md`}
              style={updateMinutes}
            ></span>
            {/* Hour hand */}
            <span
              className={`${clockUI.hands?.hour} ${theme?.hand.hour} absolute bottom-1.5 z-10 origin-bottom divide-zinc-100 rounded-md`}
              style={updateHours}
            ></span>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AnalogClock
