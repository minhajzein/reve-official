'use client'

import { useTheme } from '@/contexts/ThemeContext'
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
	variant?: 'default' | 'square'
	className?: string
}

function Logo({ variant = 'default', className }: LogoProps) {
	const { theme } = useTheme()

	const src = variant === 'square'
		? '/images/secondary-logo.png'
		: theme === 'dark' ? '/images/logo-light.png' : '/images/logo-dark.png'

	return (
		<Link href='/'>
			<Image
				src={src}
				alt='Reve Infotech'
				width={variant === 'square' ? 80 : 100}
				height={variant === 'square' ? 80 : 40}
				className={`object-contain cursor-pointer ${className}`}
			/>
		</Link>
	)
}

export default Logo
