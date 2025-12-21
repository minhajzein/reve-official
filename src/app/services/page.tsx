'use client'

import React from 'react'
import ServiceCard from '../components/service-section/ServiceCard'
import { FaComputer, FaMobile, FaBrain, FaCloud, FaShieldHalved, FaChartLine } from 'react-icons/fa6'
import { MdOutlineArrowOutward } from 'react-icons/md'

const allServices = [
	{
		title: 'Web Solutions',
		description: 'Custom, high-performance web applications built with modern frameworks like Next.js and React. We focus on scalability, SEO, and flawless user experiences.',
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
		description: 'Native and cross-platform mobile experiences that engage users. We specialize in Flutter and React Native for high-performance iOS and Android apps.',
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
		description: 'Leverage the power of AI to automate processes and gain insights. Our solutions include LLM integration, predictive analytics, and computer vision.',
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
		description: 'Scalable cloud infrastructure and DevOps practices. We ensure your services are highly available, secure, and cost-optimized on AWS or Azure.',
		image: '/images/cloud.png',
		icon: FaCloud,
		tags: ['AWS', 'DevOps', 'Cloud'],
		stats: [
			{ label: 'UPTIME', value: '100%' },
			{ label: 'SECURITY', value: 'AES-256' }
		]
	},
	{
		title: 'Cyber Security',
		description: 'Protect your digital assets with our comprehensive security audits, penetration testing, and data encryption services.',
		image: '/images/vision.png',
		icon: FaShieldHalved,
		tags: ['Security', 'Audit', 'EDR'],
		stats: [
			{ label: 'PROTECTION', value: '24/7' },
			{ label: 'COMPLIANCE', value: 'GDPR' }
		]
	},
	{
		title: 'Digital Marketing',
		description: 'Scale your online presence with data-driven marketing strategies, SEO optimization, and targeted social media campaigns.',
		image: '/images/why-choose-us.png',
		icon: FaChartLine,
		tags: ['SEO', 'Ads', 'Growth'],
		stats: [
			{ label: 'ROI', value: '300%+' },
			{ label: 'GROWTH', value: 'Linear' }
		]
	}
]

function ServicesPage() {
	return (
		<main className='w-full bg-background pt-32 pb-24'>
			<div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px]'>
				<div className='text-center mb-20 max-w-3xl mx-auto'>
					<h1 className='text-5xl md:text-7xl font-bold mb-6'>
						Our <span className='text-primary'>Expert</span> Services
					</h1>
					<p className='text-muted-foreground text-xl leading-relaxed'>
						We provide a wide range of specialized IT services designed to transform your business and drive technological innovation.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{allServices.map((service, index) => (
						<ServiceCard key={index} {...service} />
					))}
				</div>

				<div className='mt-24 p-12 rounded-[40px] bg-primary/5 border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left'>
					<div>
						<h2 className='text-3xl font-bold mb-2'>Need a Custom Solution?</h2>
						<p className='text-muted-foreground'>Let's discuss your unique requirements and build something extraordinary together.</p>
					</div>
					<button className='px-10 py-5 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all flex items-center gap-2 cursor-pointer'>
						Get a Free Consultation
						<MdOutlineArrowOutward className='size-5' />
					</button>
				</div>
			</div>
		</main>
	)
}

export default ServicesPage
