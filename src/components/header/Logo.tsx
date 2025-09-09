'use client'

import { useTheme } from '@/app/contexts/ThemeContext'

function Logo() {
	const { theme } = useTheme()

	return (
		<img
			src={
				theme === 'dark' ? '/images/logo-light.png' : '/images/logo-dark.png'
			}
			className='w-[100px] object-contain'
			alt='Reve Infotech'
		/>
	)
}

export default Logo
