'use client'

import { useEffect, useState } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import WhatsApp from './WhatsApp'

function Header() {
	const [isVisible, setIsVisible] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY
			setIsScrolled(currentScrollY > 20)

			if (currentScrollY < 10) {
				setIsVisible(true)
			} else if (currentScrollY > lastScrollY) {
				setIsVisible(false)
			} else {
				setIsVisible(true)
			}

			setLastScrollY(currentScrollY)
		}

		window.addEventListener('scroll', handleScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [lastScrollY])

	return (
		<header
			className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
				} ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/40 py-[12px]' : 'bg-transparent py-[20px]'
				}`}
		>
			<div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px] flex justify-between items-center'>
				<Logo />
				<Navbar />
				<div className='flex items-center gap-[12px]'>
					<WhatsApp />
				</div>
			</div>
		</header>
	)
}

export default Header
