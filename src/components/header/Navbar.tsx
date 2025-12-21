'use client'

import navItems, { Item } from '@/lib/constants/navItems'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

function NavItem({ item, isActive }: { item: Item; isActive: boolean }) {
	const { link, label, Icon } = item

	return (
		<Link
			className={`flex items-center px-[16px] py-[8px] rounded-full transition-all duration-300 group cursor-pointer ${isActive
				? 'bg-primary text-white shadow-lg shadow-primary/20'
				: 'hover:bg-primary/10 text-foreground/80 hover:text-primary'
				}`}
			href={link}
		>
			{Icon && (
				<Icon
					className={`size-[16px] mr-[8px] transition-transform group-hover:-translate-y-[2px] ${isActive ? 'text-white' : ''
						}`}
				/>
			)}
			<span className='text-[14px] font-medium'>{label}</span>
		</Link>
	)
}

function Navbar() {
	const navs = navItems()
	const pathname = usePathname()

	return (
		<nav className='bg-background/50 backdrop-blur-md border border-border/40 rounded-full px-[4px] py-[4px] hidden md:flex items-center gap-[4px]'>
			{navs.map((item, i) => {
				const isActive =
					pathname === item.link || (item.link !== '/' && pathname.startsWith(item.link))
				return <NavItem key={i} item={item} isActive={isActive} />
			})}
		</nav>
	)
}

export default Navbar
