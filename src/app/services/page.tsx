'use client'

import React from 'react'
import ServiceCard from '../components/service-section/ServiceCard'
import { FaComputer, FaMobile, FaBrain, FaCloud, FaShieldHalved, FaChartLine } from 'react-icons/fa6'
import { MdOutlineArrowOutward } from 'react-icons/md'

import { servicesData } from '@/lib/services-data'

const allServices = Object.values(servicesData)


function ServicesPage() {
	return (
		<main className='w-full bg-background pt-20 pb-24'>
			<div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
				<div className='text-center mb-20 max-w-3xl mx-auto'>
					<h1 className='text-3xl md:text-5xl font-extrabold tracking-tight mb-6'>
						Our <span className='text-primary'>Expert</span> Services
					</h1>
					<p className='text-base md:text-lg text-muted-foreground leading-relaxed'>
						We provide a wide range of specialized IT services designed to transform your business and drive technological innovation.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{allServices.map((service, index) => (
						<ServiceCard key={index} {...service} />
					))}
				</div>

				<div className='mt-24 p-8 md:p-14 rounded-[32px] md:rounded-[48px] bg-primary/5 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left relative overflow-hidden group'>
					<div className='absolute top-0 right-0 size-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-700' />
					<div className='relative z-10 space-y-4'>
						<h2 className='text-2xl md:text-3xl font-bold tracking-tight'>Need a <span className='text-primary'>Custom</span> Solution?</h2>
						<p className='text-sm md:text-base text-muted-foreground max-w-2xl leading-relaxed'>Let&apos;s discuss your unique requirements and build something extraordinary together. Our team is ready to bring your vision to life.</p>
					</div>
					<button className='relative z-10 px-8 py-4 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all flex items-center gap-3 shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-base whitespace-nowrap'>
						Get a Free Consultation
						<MdOutlineArrowOutward className='size-5' />
					</button>
				</div>
			</div>
		</main>
	)
}

export default ServicesPage
