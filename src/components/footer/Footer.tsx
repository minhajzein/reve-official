import ExploreSection from './ExploreSection'
import Navigations from './Navigations'
import SubFooter from './SubFooter'

function Footer() {
	return (
		<div className='flex flex-col'>
			<ExploreSection />
			<Navigations /><SubFooter/>
		</div>
	)
}

export default Footer
