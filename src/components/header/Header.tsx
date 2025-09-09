'use client'

import Logo from './Logo'
import Navbar from './Navbar'
import ThemeToggle from './ThemeToggle'
import WhatsApp from './WhatsApp'

function Header() {
	return (
		<div className='w-full bg-background sticky top-0 px-[16px] z-50 md:px-[80px] py-[15px] flex justify-between items-center'>
			<Logo />
			<Navbar />
			<div className='flex items-center gap-[8px]'>
				<ThemeToggle />
				<WhatsApp />
			</div>
		</div>
	)
}

export default Header
