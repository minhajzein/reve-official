'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMenu, IoClose } from 'react-icons/io5'
import Link from 'next/link'
import navItems from '@/lib/constants/navItems'
import Logo from './Logo'
import Navbar from './Navbar'
import WhatsApp from './WhatsApp'

function Header() {
	const [isVisible, setIsVisible] = useState(true)
	const [lastScrollY, setLastScrollY] = useState(0)
	const [isScrolled, setIsScrolled] = useState(false)

	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const navs = navItems()

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
		<>
			<header
				className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
					} ${isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/40 py-[12px]' : 'bg-transparent py-[20px]'
					}`}
			>
				<div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px] flex justify-between items-center'>
					<Logo />

					{/* Desktop Navbar */}
					<Navbar />

					<div className='flex items-center gap-[12px]'>
						<WhatsApp />

						{/* Mobile Menu Toggle */}
						<button
							onClick={() => setIsMenuOpen(true)}
							className='md:hidden p-2 rounded-full bg-secondary/80 text-foreground hover:bg-primary hover:text-white transition-colors'
						>
							<IoMenu className='size-6' />
						</button>
					</div>
				</div>
			</header>

			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, x: '100%' }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: '100%' }}
						transition={{ type: 'spring', damping: 25, stiffness: 200 }}
						className='fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl md:hidden flex flex-col'
					>
						<div className='p-6 flex justify-end'>
							<button
								onClick={() => setIsMenuOpen(false)}
								className='p-2 rounded-full bg-secondary/80 text-foreground hover:bg-destructive hover:text-white transition-colors'
							>
								<IoClose className='size-8' />
							</button>
						</div>

						<div className='flex-1 flex flex-col items-center justify-center gap-8'>
							{navs.map((item, i) => (
								<Link
									key={i}
									href={item.link}
									onClick={() => setIsMenuOpen(false)}
									className='flex items-center gap-4 text-2xl font-bold text-foreground/80 hover:text-primary transition-colors'
								>
									{item.Icon && <item.Icon className='size-6' />}
									{item.label}
								</Link>
							))}
						</div>

						<div className='p-8 text-center'>
							<p className='text-muted-foreground text-sm'>© 2024 Reve Infotech</p>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	)
}

export default Header
