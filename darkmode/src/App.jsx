import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/Theme'
import { useEffect } from 'react'
import Card from './components/CardUI'
import ThemeBtn from './components/Themebtn'

function App() {

  const [themeMode, setThemeMode] = useState("light")

  const lightMode = () => {
    setThemeMode("light")
  }

  const darkMode = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightMode, darkMode }}>
      <h1 className='text-3xl text-blue-800 font-bold'>DarkMode(ThemeSwitcher)</h1>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
