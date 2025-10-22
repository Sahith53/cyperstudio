import React, { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('cipherstudio-theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      const shouldBeDark = savedTheme === 'dark'
      setIsDark(shouldBeDark)
      document.documentElement.classList.toggle('dark', shouldBeDark)
    } else {
      // Use system preference if no saved preference
      setIsDark(systemPrefersDark)
      document.documentElement.classList.toggle('dark', systemPrefersDark)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    document.documentElement.classList.toggle('dark', newTheme)
    localStorage.setItem('cipherstudio-theme', newTheme ? 'dark' : 'light')
    
    // Force a re-render by updating the theme
    window.dispatchEvent(new Event('theme-changed'))
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-200 border border-gray-200 dark:border-gray-600"
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="text-lg transition-transform duration-200 hover:scale-110">
        {isDark ? '☀️' : '🌙'}
      </span>
    </button>
  )
}

export default ThemeToggle