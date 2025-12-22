import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

interface ExploreSectionProps {
	title?: ReactNode
	description?: string
	buttonText?: string
	buttonHref?: string
	showIcon?: boolean
	className?: string
}

function ExploreSection({
	title = (
		<>
			Start Your Digital <span className='text-primary'>Transformation</span> Today
		</>
	),
	description = 'Ready to take your business to the next level? Our team of experts is here to help you navigate the digital landscape with cutting-edge IT solutions and innovative strategies.',
	buttonText = 'Explore our services',
	buttonHref = '/services',
	showIcon = false,
	className = ''
}: ExploreSectionProps) {
	return (
		<div className={`relative overflow-hidden rounded-[32px] border border-border/40 p-8 md:p-16 bg-card group ${className}`}>
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
						{title}
					</h2>
					<p className='text-muted-foreground'>
						{description}
					</p>
				</div>
				<Button asChild className='px-8 h-12 md:h-14 bg-primary text-white rounded-2xl font-bold hover:bg-primary/90 transition-all whitespace-nowrap cursor-pointer text-base flex items-center gap-2'>
					<Link href={buttonHref}>
						{buttonText}
						{showIcon && <MdOutlineArrowOutward className='size-5' />}
					</Link>
				</Button>
			</div>
			<Image
				src='/images/right-abstract.png'
				alt='Reve Infotech'
				width={300}
				height={300}
				className='absolute bottom-0 right-0 h-full w-auto object-contain opacity-20 group-hover:opacity-40 transition-opacity'
			/>
		</div>
	)
}

export default ExploreSection
