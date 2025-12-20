'use client'

import { useEffect, useState } from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import WhatsApp from './WhatsApp'

function Header() {
	const [isVisible, setIsVisible] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY

			if (currentScrollY < 10) {
				// Always show header at top of page
				setIsVisible(true)
			} else if (currentScrollY > lastScrollY) {
				// Scrolling down - hide header
				setIsVisible(false)
			} else {
				// Scrolling up - show header
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
		<div
			className={`w-full bg-background fixed top-0 px-[16px] z-50 md:px-[80px] py-[15px] flex justify-between items-center transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
				}`}
		>
			<Logo />
			<Navbar />
			<div className='flex items-center gap-[8px]'>
				<WhatsApp />
			</div>
		</div>
	)
}

export default Header
