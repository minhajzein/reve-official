import { Button } from '@/components/ui/button'

function TitleSection() {
	return (
		<div className='flex flex-col gap-[50px] py-[60px] h-full justify-center'>
			<h1 className='text-[46px] font-semibold'>
				We Create Powerful Mobile Apps.
			</h1>
			<p className='text-[16px] text-gray-500'>
				We offer custom web applications and marketing services to fuel your
				success. Partner with us to transform your digital presence and results.
			</p>
			<div className='flex items-center gap-[16px]'>
				<Button className='rounded-[8px]' variant='outline'>
					Learn More
				</Button>
				<Button className='rounded-[8px] cursor-pointer'>
					Browse our services
				</Button>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-3 text-nowrap w-full gap-[16px]'>
				<div className='flex flex-col px-[20] bg-secondary rounded-[8px] py-[14px]'>
					<h1 className='text-[30px] font-medium'>100+</h1>
					<p className='text-[16px] text-gray-500'>Happy customers</p>
				</div>
				<div className='flex flex-col px-[20] bg-secondary rounded-[8px] py-[14px]'>
					<h1 className='text-[30px] font-medium'>20+</h1>
					<p className='text-[16px] text-gray-500'>Projects completed</p>
				</div>
				<div className='flex flex-col col-span-full md:col-span-1 px-[20] bg-secondary rounded-[8px] py-[14px]'>
					<h1 className='text-[30px] font-medium'>4+</h1>
					<p className='text-[16px] text-gray-500'>Years of experience</p>
				</div>
			</div>
		</div>
	)
}

export default TitleSection
