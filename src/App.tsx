import AnalogClock from './analog-clock/analog-clock'
import avatar from './assets/avatar.jpg'

function App() {
  return (
    <div className="flex h-screen w-full flex-col bg-sky-900 text-slate-200">
      <header className="w-ful flex justify-between px-10 pt-8">
        <div className="flex h-10 items-center">
          <div className="h-12 w-12">
            <img className="rounded-full" src={avatar} alt="Avatar" />
          </div>
          <h1 className="pl-4 text-center text-2xl">Analog clock</h1>
        </div>

        <nav className="flex gap-6">
          <a href="http://github.com/aiherrera" target="_blank">
            Github
          </a>
          <a href="http://aiherrera.com" target="_blank">
            Website
          </a>
          <a href="http://blog.aiherrera.com" target="_blank">
            Blog
          </a>
        </nav>
      </header>

      <main className="flex h-screen w-full justify-center">
        <AnalogClock />
      </main>
    </div>
  )
}

export default App
