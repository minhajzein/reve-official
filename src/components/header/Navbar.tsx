'use client'

import navItems from '@/app/lib/constants/navItems'
import Link from 'next/link'
import { ComponentType, SVGProps } from 'react'

type Item = {
	label: string
	link: string
	Icon?: ComponentType<SVGProps<SVGSVGElement>>
}

function NavItem({ item }: { item: Item }) {
	const { link, label, Icon } = item

	return (
		<Link
			className='flex items-center hover:bg-secondary dark:text-primary dark:hover:text-primary-foreground h-[42px] group border-r cursor-pointer gap-[4px] px-[12px] text-primary transition-colors duration-300'
			href={link}
		>
			{Icon && (
				<Icon className='size-[18px] flip-on-hover transform-gpu group-hover:animate-collapsible-down' />
			)}
			<span className='text-[14px]'>{label}</span>
		</Link>
	)
}

function Navbar() {
	const navs = navItems()

	return (
		<div className='border rounded-full overflow-hidden h-[42px] flex justify-center items-center'>
			{navs.map((item, i) => (
				<NavItem key={i} item={item} />
			))}
		</div>
	)
}

export default Navbar
