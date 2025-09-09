import TitleSection from './TitleSection'
import ImageSection from './ImageSection'

function Hero() {
	return (
		<div className='px-[16px] md:px-[80px] md:grid md:h-[600px] flex flex-col-reverse md:gap-[60px] md:grid-cols-2'>
			<TitleSection />
			<ImageSection />
		</div>
	)
}

export default Hero
