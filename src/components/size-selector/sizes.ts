export const SizesList = [
  { id: 'small', title: 'Small' },
  { id: 'medium', title: 'Medium' },
  { id: 'large', title: 'Large' },
]

export interface SizeMap {
  daylight: string
  dimension: string
  numbers: string
  center: string
  hands: {
    hour: string
    minute: string
    second: string
  }
}

const AVALIABLE_SIZES = [
  {
    key: 'large',
    value: {
      daylight: 'h-10 w-10 right-12 -top-0 group-hover:-top-6',
      dimension: 'w-96 h-96',
      numbers: 'inset-5 text-5xl',
      center: 'h-4 w-4 -bottom-[3px]',
      hands: {
        hour: 'h-[6.5em] w-1.5',
        minute: 'h-[11em] w-1',
        second: 'h-[11em] w-[0.09em]',
      },
    },
  },
  {
    key: 'medium',
    value: {
      daylight: 'h-8 w-8 right-5 -top-2 group-hover:-top-6',
      dimension: 'w-56 h-56',
      numbers: 'inset-2 text-2xl',
      center: 'h-4 w-4 -bottom-[3px]',
      hands: {
        hour: 'h-[4.5em] w-[0.3em]',
        minute: 'h-[6.5em] w-[0.2em]',
        second: 'h-[6.5em] w-[0.09em]',
      },
    },
  },
  {
    key: 'small',
    value: {
      daylight: 'h-6 w-6 right-3 -top-2 group-hover:-top-6',
      dimension: 'w-40 h-40',
      numbers: 'inset-1 text-xl',
      center: 'h-4 w-4 -bottom-[3px]',
      hands: {
        hour: 'h-[2.8em] w-[0.2em]',
        minute: 'h-[4.5em] w-[0.15em]',
        second: 'h-[4.5em] w-[0.07em]',
      },
    },
  },
]

export const SIZES: Map<string | null, SizeMap> = new Map(
  AVALIABLE_SIZES.map(({ key, value }) => [key, value])
)
