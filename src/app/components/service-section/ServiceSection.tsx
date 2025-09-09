import Image from 'next/image'
import React from 'react'
import { FaComputer, FaMobile } from 'react-icons/fa6'
import { HiSpeakerphone } from 'react-icons/hi'
import { IoIosColorPalette } from 'react-icons/io'
import { MdOutlineArrowOutward } from 'react-icons/md'

function ServiceSection() {
	return (
		<div className='w-full grid grid-cols-2 md:grid-cols-4 gap-[16px] rounded-[16px] p-[8px] border-8 border-secondary'>
			<div className='flex group relative cursor-pointer flex-col bg-secondary rounded-[8px] justify-center px-[16px] gap-[16px] py-[40px] items-center'>
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
				<p className='text-[16px] font-semibold'>Perfect Web Solutions</p>
			</div>
			<div className='flex group relative cursor-pointer flex-col bg-secondary rounded-[8px] justify-center px-[16px] gap-[16px] py-[40px] items-center'>
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
				<p className='text-[16px] font-semibold'>Stunning Mobile Apps</p>
			</div>
			<div className='flex group relative cursor-pointer flex-col bg-secondary rounded-[8px] justify-center px-[16px] gap-[16px] py-[40px] items-center'>
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
				<p className='text-[16px] font-semibold'>Digital Marketing</p>
			</div>
			<div className='flex relative group cursor-pointer flex-col bg-secondary rounded-[8px] justify-center px-[16px] gap-[16px] py-[40px] items-center'>
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
				<p className='text-[16px] font-semibold'>Graphic Designing</p>
			</div>
		</div>
	)
}

export default ServiceSection
