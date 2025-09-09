import Hero from './components/hero/Hero'
import ServiceSection from './components/service-section/ServiceSection'

export default function Home() {
	return (
		<div className='w-full'>
			<Hero />
			<ServiceSection />
		</div>
	)
}
