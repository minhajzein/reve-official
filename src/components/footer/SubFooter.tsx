import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'

function SubFooter() {
	return (
		<div className='flex flex-col md:flex-row justify-between md:justify-between items-center md:px-[80px] p-[16px] bg-gray-950'>
			<p className='text-xs'>@2025 Reve Infotech. All Rights Reserved.</p>
			<div className='grid grid-cols-4 gap-4'>
				<a href=''>
					<FaLinkedin className='m-auto' />
				</a>
				<a href=''>
					<FaInstagram className='m-auto' />
				</a>
				<a href=''>
					<FaFacebookSquare className='m-auto' />
				</a>
			</div>
		</div>
	)
}

export default SubFooter
