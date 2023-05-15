import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import useSize from '../../hooks/use-size'

const DaylightIcon = ({ isDaytime = true, lastSize = '' }) => {
  const [size] = useSize(lastSize)

  return (
    <section className={`${size?.daylight} absolute rotate-12 transition-all delay-200`}>
      {isDaytime ? <SunIcon className="text-yellow-500" /> : <MoonIcon />}
    </section>
  )
}

export default DaylightIcon
