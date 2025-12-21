import Hero from './components/hero/Hero'
import ServiceSection from './components/service-section/ServiceSection'
import ProcessRoadmap from './components/process/ProcessRoadmap'
import WhyChooseUs from './components/why-choose-us/WhyChooseUs'
import BlogSection from './components/blog/BlogSection'
import Testimonials from './components/testimonials/Testimonials'

export default function Home() {
	return (
		<div className='w-full'>
			<Hero />
			<ServiceSection />
			<ProcessRoadmap />
			<WhyChooseUs />
			<BlogSection />
			<Testimonials />
		</div>
	)
}
