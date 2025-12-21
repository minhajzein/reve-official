'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6'
import Logo from '../header/Logo'

const footerLinks = [
	{
		title: 'Company',
		links: [
			{ name: 'About Us', href: '/about-us' },
			{ name: 'Our Team', href: '/team' },
			{ name: 'Careers', href: '/careers' },
			{ name: 'Contact', href: '/contact' }
		]
	},
	{
		title: 'Services',
		links: [
			{ name: 'Web Solutions', href: '/services' },
			{ name: 'Mobile Apps', href: '/services' },
			{ name: 'AI & ML', href: '/services' },
			{ name: 'Cloud Systems', href: '/services' }
		]
	},
	{
		title: 'Resources',
		links: [
			{ name: 'Blog', href: '/blog' },
			{ name: 'Case Studies', href: '/projects' },
			{ name: 'FAQ', href: '/faq' },
			{ name: 'Support', href: '/support' }
		]
	}
]

function Footer() {
	return (
		<footer className='w-full bg-background pt-20 pb-10'>
			<div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>

				{/* Explore Section (Restored) */}
				<div className='relative overflow-hidden rounded-[32px] border border-border/40 p-8 md:p-16 mb-20 bg-card group'>
					<Image
						src='/images/left-abstract.png'
						alt='Reve Infotech'
						width={300}
						height={300}
						className='absolute top-0 left-0 h-full w-auto object-contain opacity-20 group-hover:opacity-40 transition-opacity hidden md:block'
					/>
					<div className='relative z-10 flex flex-col md:flex-row items-center justify-between gap-8'>
						<div className='max-w-2xl text-center md:text-left'>
							<h2 className='text-3xl md:text-4xl font-bold mb-4'>
								Start Your Digital <span className='text-primary'>Transformation</span> Today
							</h2>
							<p className='text-muted-foreground'>
								Ready to take your business to the next level? Our team of experts is here to help you navigate the digital landscape with cutting-edge IT solutions and innovative strategies.
							</p>
						</div>
						<Link href='/services' className='px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all whitespace-nowrap'>
							Explore our services
						</Link>
					</div>
					<Image
						src='/images/right-abstract.png'
						alt='Reve Infotech'
						width={300}
						height={300}
						className='absolute bottom-0 right-0 h-full w-auto object-contain opacity-20 group-hover:opacity-40 transition-opacity'
					/>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16'>
					{/* Brand & Newsletter */}
					<div className='space-y-6'>
						<Logo variant='square' />
						<p className='text-muted-foreground text-xs md:w-[50%] max-w-sm'>
							Empowering global enterprises with cutting-edge IT solutions and innovative digital products.
						</p>
						<div className='flex gap-4'>
							{[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
								<Link key={i} href='#' className='size-10 rounded-full border border-border/40 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all cursor-pointer'>
									<Icon className='size-5' />
								</Link>
							))}
						</div>
					</div>

					{/* Links Grid */}
					<div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
						{footerLinks.map((section, i) => (
							<div key={i} className='space-y-6'>
								<h3 className='text-lg font-bold'>{section.title}</h3>
								<ul className='space-y-4'>
									{section.links.map((link, j) => (
										<li key={j}>
											<Link href={link.href} className='text-muted-foreground hover:text-primary transition-colors text-sm cursor-pointer'>
												{link.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='pt-10 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6'>
					<p className='text-muted-foreground text-sm'>
						&copy; {new Date().getFullYear()} Reve Infotech. All rights reserved.
					</p>
					<div className='flex gap-8'>
						<Link href='/privacy' className='text-muted-foreground hover:text-primary transition-colors text-sm'>Privacy Policy</Link>
						<Link href='/terms' className='text-muted-foreground hover:text-primary transition-colors text-sm'>Terms of Service</Link>
						<Link href='/cookies' className='text-muted-foreground hover:text-primary transition-colors text-sm'>Cookie Policy</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
