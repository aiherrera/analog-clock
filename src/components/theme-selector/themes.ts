export interface ThemeMap {
  main: string
  shadow: string
  hand: {
    center: string
    second: string
    minute: string
    hour: string
  }
}

const AVALIABLE_THEMES = [
  {
    key: 'dark',
    value: {
      main: 'bg-slate-900 text-slate-300',
      shadow: 'shadow-xl shadow-slate-400',
      hand: {
        center: 'bg-slate-200 before:bg-slate-800',
        second: 'bg-slate-300',
        minute: 'bg-slate-300',
        hour: 'bg-slate-300',
      },
    },
  },
  {
    key: 'light',
    value: {
      main: 'bg-slate-300 text-slate-800',
      shadow: 'shadow-xl shadow-slate-400',
      hand: {
        center: 'bg-slate-800 before:bg-slate-300',
        second: 'bg-slate-800',
        minute: 'bg-slate-600',
        hour: 'bg-slate-600',
      },
    },
  },
  {
    key: 'neutral',
    value: {
      main: 'bg-neutral-300 text-teal-700',
      shadow: 'ring-offset-[2px] ring-[10px] shadow-[10px 5px 10px rgba(0, 0, 0, 1)]',
      hand: {
        center: 'bg-teal-700 before:bg-neutral-300',
        second: 'bg-teal-600',
        minute: 'bg-teal-700',
        hour: 'bg-teal-700',
      },
    },
  },
]

export const THEMES: Map<string | null, ThemeMap> = new Map(
  AVALIABLE_THEMES.map(({ key, value }) => [key, value])
)
