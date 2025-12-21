'use client'

import { Cog, House, BookOpen, Info, Headset } from 'lucide-react'
import { ComponentType, SVGProps } from 'react'

export type Item = {
	label: string
	link: string
	Icon?: ComponentType<SVGProps<SVGSVGElement>>
}

function navItems(): Item[] {
	return [
		{
			label: 'Home',
			link: '/',
			Icon: House,
		},
		{
			label: 'Blogs',
			link: '/blog',
			Icon: BookOpen,
		},
		{
			label: 'Services',
			link: '/services',
			Icon: Cog,
		},
		{
			label: 'About Us',
			link: '/about-us',
			Icon: Info,
		},
		{
			label: 'Contact',
			link: '/contact',
			Icon: Headset,
		},
	]
}

export default navItems
