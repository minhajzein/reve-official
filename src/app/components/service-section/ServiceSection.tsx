import Image from 'next/image'
import React from 'react'
import { FaComputer, FaMobile } from 'react-icons/fa6'
import { HiSpeakerphone } from 'react-icons/hi'
import { IoIosColorPalette } from 'react-icons/io'
import { MdOutlineArrowOutward } from 'react-icons/md'

function ServiceSection() {
	return (
		<div className='w-full grid grid-cols-2 md:grid-cols-4 gap-[8px] rounded-[16px] p-[8px] border-8 border-secondary'>
			<div className='flex group hover:scale-95 transition-all relative cursor-pointer flex-col bg-secondary rounded-[8px] justify-center px-[16px] gap-[16px] py-[40px] items-center'>
				<MdOutlineArrowOutward className='absolute top-[16px] right-[16px] size-[32px] text-gray-500' />
				<div className='flex size-[82px] relative'>
					<Image
						src='/images/icon-wrapper.png'
						alt='Web Solutions'
						fill
						className='absolute top-0 left-0 object-contain'
					/>
					<FaComputer className='m-auto text-primary text-[24px] flip-on-hover transform-gpu group-hover:animate-collapsible-down' />
				</div>
				<p className='text-[16px] font-semibold text-center'>
					Perfect Web Solutions
				</p>
			</div>
			<div className='flex group transition-all hover:scale-95 relative cursor-pointer flex-col bg-secondary rounded-[8px] justify-center px-[16px] gap-[16px] py-[40px] items-center'>
				<MdOutlineArrowOutward className='absolute top-[16px] right-[16px] size-[32px] text-gray-500' />
				<div className='flex size-[82px] relative'>
					<Image
						src='/images/icon-wrapper.png'
						alt='Web Solutions'
						fill
						className='absolute top-0 left-0 object-contain'
					/>
					<FaMobile className='m-auto text-primary text-[24px] flip-on-hover transform-gpu group-hover:animate-collapsible-down' />
				</div>
				<p className='text-[16px] font-semibold text-center'>
					Stunning Mobile Apps
				</p>
			</div>
			<div className='flex group transition-all hover:scale-95 relative cursor-pointer flex-col bg-secondary rounded-[8px] justify-center px-[16px] gap-[16px] py-[40px] items-center'>
				<MdOutlineArrowOutward className='absolute top-[16px] right-[16px] size-[32px] text-gray-500' />
				<div className='flex size-[82px] relative'>
					<Image
						src='/images/icon-wrapper.png'
						alt='Web Solutions'
						fill
						className='absolute top-0 left-0 object-contain'
					/>
					<HiSpeakerphone className='m-auto text-primary text-[24px] flip-on-hover transform-gpu group-hover:animate-collapsible-down' />
				</div>
				<p className='text-[16px] font-semibold text-center'>
					Digital Marketing
				</p>
			</div>
			<div className='flex relative transition-all hover:scale-95 group cursor-pointer flex-col bg-secondary rounded-[8px] justify-center px-[16px] gap-[16px] py-[40px] items-center'>
				<MdOutlineArrowOutward className='absolute top-[16px] right-[16px] size-[32px] text-gray-500' />
				<div className='flex size-[82px] relative'>
					<Image
						src='/images/icon-wrapper.png'
						alt='Web Solutions'
						fill
						className='absolute top-0 left-0 object-contain'
					/>
					<IoIosColorPalette className='m-auto text-primary text-[24px] flip-on-hover transform-gpu group-hover:animate-collapsible-down' />
				</div>
				<p className='text-[16px] font-semibold text-center'>
					Graphic Designing
				</p>
			</div>
		</div>
	)
}

export default ServiceSection
