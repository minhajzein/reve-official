'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProcessRoadmap from '../components/process/ProcessRoadmap'
import { FaLinkedin, FaTwitter } from 'react-icons/fa6'

const team = [
	{
		name: 'Minhaj Zein',
		role: 'CEO & Founder',
		image: '/images/minhaj.png'
	},
	{
		name: 'Elena Vance',
		role: 'Lead Developer',
		image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena'
	},
	{
		name: 'Mark S.',
		role: 'Solution Architect',
		image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mark'
	}
]

function AboutPage() {
	return (
		<main className='w-full'>
			{/* About Hero */}
			<section className='pt-32 pb-20 px-[20px] md:px-[80px] bg-background'>
				<div className='max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
					<div>
						<h1 className='text-5xl md:text-7xl font-bold mb-6'>
							Where <span className='text-primary'>Quality</span> Meets Reality
						</h1>
						<p className='text-muted-foreground text-xl leading-relaxed'>
							Reve Infotech is a global tech agency dedicated to transforming businesses through innovative digital solutions. We believe in building software that is not only functional but future-proof.
						</p>
					</div>
					<div className='relative h-[400px] lg:h-[500px] rounded-[32px] overflow-hidden border border-border/40'>
						<Image
							src='/images/vision.png'
							alt='Our Vision'
							fill
							className='object-cover'
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
					</div>
				</div>
			</section>

			{/* Process Recap */}
			<ProcessRoadmap />

			{/* Team Section */}
			<section className='py-24 bg-background'>
				<div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl md:text-5xl font-bold mb-4'>Meet Our <span className='text-primary'>Team</span></h2>
						<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>
							The brilliant minds behind our innovative solutions.
						</p>
					</div>

					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{team.map((member, i) => (
							<div key={i} className='group bg-card border border-border/40 rounded-[32px] p-8 text-center transition-all hover:-translate-y-2'>
								<div className='relative size-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20'>
									<Image
										src={member.image}
										alt={member.name}
										fill
										className='object-cover'
									/>
								</div>
								<h3 className='text-2xl font-bold mb-1'>{member.name}</h3>
								<p className='text-primary font-medium mb-6'>{member.role}</p>
								<div className='flex justify-center gap-4'>
									<Link href='#' className='p-3 rounded-full bg-background border border-border/40 text-muted-foreground hover:text-primary transition-all cursor-pointer'>
										<FaLinkedin className='size-5' />
									</Link>
									<Link href='#' className='p-3 rounded-full bg-background border border-border/40 text-muted-foreground hover:text-primary transition-all cursor-pointer'>
										<FaTwitter className='size-5' />
									</Link>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	)
}

export default AboutPage
