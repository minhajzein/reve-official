import { Button } from '../ui/button'
import Image from 'next/image'

function ExploreSection() {
	return (
		<div className='md:py-[60px] relative p-[16px] md:px-[80px] gap-[30px] flex flex-col md:flex-row items-center md:gap-[150px]'>
			<Image
				src='/images/left-abstract.png'
				alt='Reve Infotech'
				width={400}
				height={400}
				className='md:h-full h-auto w-full md:w-auto hidden md:block absolute top-0 left-0 object-contain cursor-pointer opacity-90 group-hover:opacity-100 transition-opacity'
			/>

			<div className='flex z-40 flex-col gap-[8px]'>
				<h1 className='md:text-[38px] text-[32px] font-semibold'>
					Start Your Digital Transformation Today
				</h1>
				<p className='text-gray-400 text-[16px]'>
					Ready to take your business to the next level? Our team of experts is here to help you navigate the digital landscape with cutting-edge IT solutions and innovative strategies.
				</p>
			</div>
			<Button variant='default' className='z-40 px-8 py-6 rounded-2xl font-bold'>
				Explore our services
			</Button>
			<Image
				src='/images/right-abstract.png'
				alt='Reve Infotech'
				width={400}
				height={400}
				className='md:h-full h-auto w-full md:w-auto absolute bottom-0 right-0 object-contain cursor-pointer opacity-90 group-hover:opacity-100 transition-opacity'
			/>
		</div>
	)
}

export default ExploreSection
