import { Button } from '../ui/button'
import Image from 'next/image'

function ExploreSection() {
	return (
		<div className='md:py-[60px] relative p-[16px] md:px-[80px] gap-[30px] flex flex-col md:flex-row items-center md:gap-[150px]'>
			<Image
				src='/images/left-abstract.png'
				alt='Reve Infotech'
				width={0}
				height={0}
				sizes='100vw'
				className='md:h-full h-auto w-full md:w-auto hidden md:block absolute top-0 left-0 object-contain cursor-pointer'
			/>

			<div className='flex z-40 flex-col gap-[8px]'>
				<h1 className='md:text-[38px] text-[32px] font-semibold'>
					Start Your Real Estate Journey Today
				</h1>
				<p className='text-gray-400 text-[16px]'>
					{`Your dream property is just a click away. Whether you're looking for a
					new home, a strategic investment, or expert real estate advice,
					Estatein is here to assist you every step of the way. Take the first
					step towards your real estate goals and explore our available
					properties or get in touch with our team for personalized assistance.`}
				</p>
			</div>
			<Button variant='default' className='z-40'>
				Explore our services
			</Button>
			<Image
				src='/images/right-abstract.png'
				alt='Reve Infotech'
				width={0}
				height={0}
				sizes='100vw'
				className='md:h-full h-auto w-full md:w-auto absolute bottom-0 right-0 object-contain cursor-pointer'
			/>
		</div>
	)
}

export default ExploreSection
