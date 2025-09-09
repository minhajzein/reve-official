'use client'

import { useTheme } from '@/app/contexts/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	const { theme } = useTheme()

	return (
		<Link href='/'>
			<Image
				src={
					theme === 'dark' ? '/images/logo-light.png' : '/images/logo-dark.png'
				}
				alt='Reve Infotech'
				width={100}
				height={40}
				className='object-contain cursor-pointer'
			/>
		</Link>
	)
}

export default Logo
