import AnalogClock from './components/analog-clock/analog-clock'
import avatar from './assets/avatar.jpg'

function App() {
  return (
    <div className="flex flex-col bg-sky-900 text-slate-200">
      <header className="flex w-full justify-between px-10 py-12">
        <div className="flex h-10 items-center">
          <div className="h-12 w-12">
            <img className="rounded-full" src={avatar} alt="Avatar" />
          </div>
          <h1 className="hidden pl-4 text-center text-2xl md:flex">Analog clock</h1>
        </div>

        <nav className="flex items-center gap-6">
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

      <main className="flex h-[calc(100vh-140px)] w-full px-10">
        <AnalogClock />
      </main>
    </div>
  )
}

export default App
