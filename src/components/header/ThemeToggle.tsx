'use client'

import { useTheme } from '@/app/contexts/ThemeContext'
import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'

export default function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()

	return (
		<Button
			onClick={toggleTheme}
			variant={'outline'}
			className='flex items-center size-[42px] border-primary cursor-pointer gap-2 px-3 py-2 border rounded-full text-primary hover:bg-primary bg-background hover:text-accent-foreground transition-colors duration-300'
		>
			{theme === 'light' ? (
				<Moon className='size-[24px]' />
			) : (
				<Sun className='size-[24px] text-primary-foreground' />
			)}
		</Button>
	)
}
