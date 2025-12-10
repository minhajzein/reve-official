import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const CircularButton: React.FC = () => {
	return (
		<div className='flex items-center justify-center bg-black'>
			<div className='relative w-40 h-40 flex items-center justify-center rounded-full border border-gray-700'>
				{/* Center icon */}
				<ArrowUpRight className='w-6 h-6 text-white' />

				{/* Circular text */}
				<p className='absolute inset-0 flex items-center justify-center text-white text-[12px] tracking-wide animate-spin-slow'>
					<span className='[writing-mode:vertical-rl] rotate-180'>
						Discover Your Dream Property ✨
					</span>
				</p>
			</div>
		</div>
	)
}

export default CircularButton
