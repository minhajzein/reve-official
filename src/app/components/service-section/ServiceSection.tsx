'use client'

import React, { useCallback } from 'react'
import ServiceCard from './ServiceCard'
import { FaComputer, FaMobile, FaBrain, FaCloud, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { MdOutlineArrowOutward } from 'react-icons/md'
import useEmblaCarousel from 'embla-carousel-react'

const services = [
	{
		title: 'Web Solutions',
		description: 'Custom, high-performance web applications built with modern frameworks to scale your business operations.',
		image: '/images/software-dev.png',
		icon: FaComputer,
		tags: ['Next.js', 'React', 'Premium'],
		stats: [
			{ label: 'PERFORMANCE', value: '99.9%' },
			{ label: 'DEVELOPMENT', value: 'Agile' }
		]
	},
	{
		title: 'Mobile Apps',
		description: 'Native and cross-platform mobile experiences that engage users and deliver seamless performance.',
		image: '/images/mobile-app.png',
		icon: FaMobile,
		tags: ['iOS', 'Android', 'Flutter'],
		stats: [
			{ label: 'PLATFORMS', value: 'Multi' },
			{ label: 'UX DESIGN', value: 'Modern' }
		]
	},
	{
		title: 'AI & Machine Learning',
		description: 'Intelligent solutions that leverage data to automate processes and provide actionable insights.',
		image: '/images/ai-ml.png',
		icon: FaBrain,
		tags: ['AI', 'Data', 'LLM'],
		stats: [
			{ label: 'ACCURACY', value: 'High' },
			{ label: 'INTEGRATION', value: 'API' }
		]
	},
	{
		title: 'Cloud Systems',
		description: 'Scalable cloud infrastructure and DevOps practices to ensure your services remain available and secure.',
		image: '/images/cloud.png',
		icon: FaCloud,
		tags: ['AWS', 'DevOps', 'Cloud'],
		stats: [
			{ label: 'UPTIME', value: '100%' },
			{ label: 'SECURITY', value: 'AES-256' }
		]
	}
]

function ServiceSection() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: 'start',
		containScroll: 'trimSnaps',
		dragFree: true
	})

	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev()
	}, [emblaApi])

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext()
	}, [emblaApi])

	return (
		<section className='w-full py-24 bg-background overflow-hidden'>
			<div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
				<div className='flex flex-col md:flex-row justify-between items-end mb-16 gap-6'>
					<div className='max-w-2xl'>
						<h2 className='text-4xl md:text-5xl font-bold mb-4'>
							Expert IT <span className='text-primary'>Solutions</span>
						</h2>
						<p className='text-muted-foreground text-lg'>
							We deliver cutting-edge technology services designed to help your business thrive in the digital age. From custom software to AI integration.
						</p>
					</div>
					<div className='flex items-center gap-4'>
						<div className='flex gap-2 mr-4'>
							<button
								onClick={scrollPrev}
								className='size-12 rounded-full border border-border/40 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer'
							>
								<FaChevronLeft className='size-5' />
							</button>
							<button
								onClick={scrollNext}
								className='size-12 rounded-full border border-border/40 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer'
							>
								<FaChevronRight className='size-5' />
							</button>
						</div>
						<button className='px-8 py-4 bg-primary text-white rounded-2xl flex items-center gap-2 hover:bg-primary/90 transition-all font-semibold whitespace-nowrap cursor-pointer'>
							View All Services
							<MdOutlineArrowOutward className='size-5' />
						</button>
					</div>
				</div>

				<div className='embla overflow-hidden' ref={emblaRef}>
					<div className='flex gap-6'>
						{services.map((service, index) => (
							<div key={index} className='flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.33%-16px)] min-w-0'>
								<ServiceCard {...service} />
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ServiceSection
