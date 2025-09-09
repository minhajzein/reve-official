'use client'

import { Cog, House, ShieldUser } from 'lucide-react'
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
			label: 'Services',
			link: '/services',
			Icon: Cog,
		},
		{
			label: 'About Us',
			link: '/about',
			Icon: ShieldUser,
		},
	]
}

export default navItems
