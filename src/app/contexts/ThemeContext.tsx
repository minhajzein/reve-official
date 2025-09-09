'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
	theme: Theme
	toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setTheme] = useState<Theme>('dark')
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		const saved = localStorage.getItem('theme') as Theme | null
		const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches
		const initial = saved || (systemDark ? 'dark' : 'light')

		setTheme(initial)
		document.documentElement.classList.toggle('dark', initial === 'dark')
		setMounted(true)
	}, [])

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark'
		setTheme(newTheme)
		localStorage.setItem('theme', newTheme)
		document.documentElement.classList.toggle('dark', newTheme === 'dark')
	}

	if (!mounted) return null

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export function useTheme() {
	const context = useContext(ThemeContext)
	if (!context) throw new Error('useTheme must be used inside ThemeProvider')
	return context
}
