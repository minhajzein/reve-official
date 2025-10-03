import Image from 'next/image'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { FaTelegramPlane } from 'react-icons/fa'
import Link from 'next/link'

interface FooterLink {
	label: string
	href: string
}

interface FooterSection {
	title: string
	links: FooterLink[]
}

const footerSections: FooterSection[] = [
	{
		title: 'Home',
		links: [
			{ label: 'Hero Section', href: '#' },
			{ label: 'Features', href: '#' },
			{ label: 'Properties', href: '#' },
			{ label: 'Testimonials', href: '#' },
			{ label: "FAQ's", href: '#' },
		],
	},
	{
		title: 'About Us',
		links: [
			{ label: 'Our Story', href: '#' },
			{ label: 'Our Works', href: '#' },
			{ label: 'How It Works', href: '#' },
			{ label: 'Our Team', href: '#' },
			{ label: 'Our Clients', href: '#' },
		],
	},
	{
		title: 'Properties',
		links: [
			{ label: 'Portfolio', href: '#' },
			{ label: 'Categories', href: '#' },
		],
	},
	{
		title: 'Services',
		links: [
			{ label: 'Valuation Mastery', href: '#' },
			{ label: 'Strategic Marketing', href: '#' },
			{ label: 'Negotiation Wizardry', href: '#' },
			{ label: 'Closing Success', href: '#' },
			{ label: 'Property Management', href: '#' },
		],
	},
	{
		title: 'Contact Us',
		links: [
			{ label: 'Contact Form', href: '#' },
			{ label: 'Our Offices', href: '#' },
		],
	},
]

function Navigations() {
	return (
		<div className='md:p-[80px] p-[16px] md:flex-row md:gap-[80px] gap-[16px]'>
			<div className='grid grid-cols-2 gap-8 md:grid-cols-7'>
				<div className='flex flex-col col-span-full md:col-span-2 gap-[8px]'>
					<Image
						src='/images/secondary-logo.png'
						alt='Reve Infotech'
						width={0}
						height={0}
						sizes='100vw'
						className=' object-contain size-[100px] cursor-pointer'
					/>
					<div className='flex items-center h-fit gap-2 p-[4px]'>
						<Input
							type='email'
							placeholder='Enter your email'
							className='rounded-[8px] w-fit ring-0 focus:ring-0'
						/>
						<Button variant='default' className='h-fit'>
							<FaTelegramPlane />
						</Button>
					</div>
				</div>
				{footerSections.map((section, idx) => (
					<div key={idx} className='text-sm'>
						<h4 className='text-gray-500 mb-4'>{section.title}</h4>
						<ul className='space-y-2'>
							{section.links.map((link, i) => (
								<li key={i}>
									<Link
										href={link.href}
										className='hover:text-white transition-colors'
									>
										{link.label}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	)
}

export default Navigations
