'use client'
import React,{ useEffect, useState } from 'react'

function Header() {
   const [darkMode, setDarkMode] = useState(false)
    useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    }
  }, [])
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
  return (
   <header className='flex justify-end shadow-sm h-20 px-24'>
        <button
          onClick={toggleDarkMode}
        >
          {darkMode ? <div>'Dark'</div> : <div>'Light'</div>}
        </button>
    </header>
  )
}

export default Header
