'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProcessRoadmap from '../components/process/ProcessRoadmap'
import {
	FaLinkedin,
	FaTwitter,
	FaCheck,
	FaLightbulb,
	FaHandshake,
	FaRocket,
	FaGlobe,
	FaChartLine,
} from 'react-icons/fa6'
import { MdOutlineArrowOutward } from 'react-icons/md'

const team = [
	{
		name: 'Minhaj Zein',
		role: 'CEO & Founder',
		image: '/images/minhaj.png',
	},
	{
		name: 'Anjali Jayaraj',
		role: 'Co-Founder & Marketing Head',
		image: '/images/anjali.jpg',
	},
	{
		name: 'Abin Eldhose',
		role: 'Senior Flutter Developer',
		image: '/images/abin.JPG',
	},
]

const stats = [
	{ label: 'Projects Delivered', value: '100+' },
	{ label: 'Happy Clients', value: '50+' },
	{ label: 'Countries Served', value: '10+' },
	{ label: 'Years Experience', value: '5+' },
]

const values = [
	{
		title: 'Innovation First',
		description:
			'We constantly push boundaries, exploring new technologies to deliver cutting-edge solutions.',
		icon: FaLightbulb,
		className:
			'col-span-1 md:col-span-2 lg:col-span-1 bg-primary/5 border-primary/20',
	},
	{
		title: 'Client Partnership',
		description:
			'We view ourselves as your long-term partners, not just service providers.',
		icon: FaHandshake,
		className:
			'col-span-1 md:col-span-1 lg:col-span-1 bg-card border-border/40',
	},
	{
		title: 'Global Standards',
		description:
			'World-class code quality and best practices in every single project.',
		icon: FaGlobe,
		className:
			'col-span-1 md:col-span-1 lg:col-span-1 bg-card border-border/40',
	},
	{
		title: 'Results Driven',
		description:
			'Focused on delivering measurable outcomes that drive real business growth.',
		icon: FaChartLine,
		className:
			'col-span-1 md:col-span-1 lg:col-span-1 bg-card border-border/40',
	},
	{
		title: 'Future Ready',
		description:
			'Building scalable architectures that grow with your business needs.',
		icon: FaRocket,
		className:
			'col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-r from-primary/10 to-transparent border-primary/20',
	},
]

function AboutPage() {
	return (
		<main className='w-full bg-background'>
			{/* Modern Hero Section */}
			<section className='relative pt-32 pb-20 overflow-hidden'>
				<div className='absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]' />
				<div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px] relative z-10 text-center'>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium mb-8 animate-fade-in'>
						<span className='relative flex h-2 w-2'>
							<span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75'></span>
							<span className='relative inline-flex rounded-full h-2 w-2 bg-primary'></span>
						</span>
						Est. 2020
					</div>
					<h1 className='text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-tight'>
						Building the <span className='text-primary'>Future</span>
						<br />
						<span className='text-muted-foreground'>
							of Digital Experiences
						</span>
					</h1>
					<p className='text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12'>
						Reve Infotech is a global technology agency dedicated to
						transforming ambitious ideas into reality. We combine technical
						excellence with creative innovation to build software that matters.
					</p>

					<div className='relative w-full max-w-4xl mx-auto h-[300px] md:h-[400px] rounded-[32px] overflow-hidden border border-border/40 shadow-2xl'>
						<div className='absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10' />
						<Image
							src='/images/about-hero-new.png'
							alt='Team collaboration at Reve Infotech'
							fill
							className='object-cover'
							priority
						/>
					</div>
				</div>
			</section>

			{/* Stats Section */}
			<section className='py-12 border-y border-border/40 bg-secondary/20'>
				<div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
						{stats.map((stat, i) => (
							<div key={i} className='text-center'>
								<div className='text-4xl md:text-5xl font-bold text-primary mb-2'>
									{stat.value}
								</div>
								<div className='text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider'>
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Our Story / Mission */}
			<section className='py-24'>
				<div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
						<div>
							<h2 className='text-3xl md:text-4xl font-bold mb-8'>
								We are not just coders, <br />
								<span className='text-primary'>we are creators.</span>
							</h2>
							<div className='space-y-6 text-muted-foreground text-lg leading-relaxed'>
								<p>
									Founded with a clear vision to bridge the gap between complex
									technology and human-centric design, Reve Infotech has grown
									from a small team of passionate developers into a full-service
									digital agency.
								</p>
								<p>
									We believe that every line of code should serve a purpose.
									Whether it's a startup looking to disrupt the market or an
									enterprise seeking digital transformation, we approach every
									project with the same level of dedication and precision.
								</p>
								<ul className='space-y-4 mt-8'>
									{[
										'Transparent Communication',
										'Agile Methodology',
										'Continuous Innovation',
									].map((item, i) => (
										<li
											key={i}
											className='flex items-center gap-3 text-foreground font-medium'
										>
											<div className='size-6 rounded-full bg-primary/10 flex items-center justify-center text-primary'>
												<FaCheck className='size-3' />
											</div>
											{item}
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
							{values.map((val, i) => (
								<div
									key={i}
									className={`p-8 rounded-3xl border ${val.className} hover:scale-[1.02] transition-transform duration-300`}
								>
									<val.icon className='size-10 text-primary mb-4' />
									<h3 className='text-xl font-bold mb-2'>{val.title}</h3>
									<p className='text-sm text-muted-foreground'>
										{val.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Process Recap (Existing) */}
			<ProcessRoadmap />

			{/* Team Section */}
			<section className='py-24 bg-background'>
				<div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
					<div className='text-center mb-16'>
						<h2 className='text-3xl md:text-5xl font-bold mb-6'>
							Meet The <span className='text-primary'>Team</span>
						</h2>
						<p className='text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto'>
							The diverse group of thinkers, makers, and problem-solvers behind
							our success.
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
						{team.map((member, i) => (
							<div
								key={i}
								className='group relative bg-card border border-border/40 rounded-[32px] overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300'
							>
								<div className='aspect-square relative bg-secondary/50'>
									<Image
										src={member.image}
										alt={member.name}
										fill
										className='object-cover group-hover:scale-105 transition-transform duration-500'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center'>
										<div className='flex gap-4'>
											<Link
												href='#'
												className='p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all'
											>
												<FaLinkedin className='size-5' />
											</Link>
											<Link
												href='#'
												className='p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-black transition-all'
											>
												<FaTwitter className='size-5' />
											</Link>
										</div>
									</div>
								</div>
								<div className='p-6 text-center bg-card relative z-10'>
									<h3 className='text-xl font-bold mb-1'>{member.name}</h3>
									<p className='text-primary font-medium text-sm'>
										{member.role}
									</p>
								</div>
							</div>
						))}

						{/* Join Us Card */}
						<div className='group flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-primary/5 to-transparent border-2 border-dashed border-primary/20 rounded-[32px] hover:bg-primary/5 transition-all cursor-pointer'>
							<div className='size-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
								<FaRocket className='size-8 text-primary' />
							</div>
							<h3 className='text-2xl font-bold mb-2'>Join Us?</h3>
							<p className='text-muted-foreground mb-6'>
								We are always looking for talent.
							</p>
							<Link
								href='/contact'
								className='text-primary font-bold hover:underline inline-flex items-center gap-2'
							>
								View Openings <MdOutlineArrowOutward />
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-24'>
				<div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
					<div className='relative rounded-[48px] bg-primary overflow-hidden px-8 py-20 text-center'>
						<div className='absolute inset-0 bg-[url("/images/grid-pattern.png")] opacity-10' />
						<div className='absolute -top-24 -right-24 size-64 bg-white/10 rounded-full blur-3xl' />
						<div className='absolute -bottom-24 -left-24 size-64 bg-white/10 rounded-full blur-3xl' />

						<div className='relative z-10 max-w-2xl mx-auto'>
							<h2 className='text-3xl md:text-5xl font-bold text-white mb-6'>
								Ready to Transform Your Business?
							</h2>
							<p className='text-white/80 text-lg mb-10'>
								Let's collaborate to build something extraordinary. Our team is
								ready to bring your vision to life.
							</p>
							<Link
								href='/contact'
								className='inline-flex items-center gap-2 h-14 px-8 bg-white text-primary rounded-full text-lg font-bold hover:scale-105 transition-transform'
							>
								Start a Project
								<MdOutlineArrowOutward className='size-5' />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default AboutPage
