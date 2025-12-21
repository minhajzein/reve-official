'use client'

import ImageSection from './ImageSection'
import TitleSection from './TitleSection'

function Hero() {
	return (
		<section className="w-full bg-[url('/images/bg-1.jpg')] bg-cover bg-center bg-no-repeat relative">
			{/* Dark Overlay for better text readability */}
			<div className='absolute inset-0 bg-background/60 pointer-events-none' />
			<div className='max-w-[1440px] mx-auto px-[20px] md:px-[80px] flex flex-col-reverse md:grid md:grid-cols-2 md:min-h-auto md:gap-[60px] items-center py-14 relative z-10'>
				<TitleSection />
				<ImageSection />
			</div>
		</section>
	)
}

export default Hero
