import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { MdOutlineArrowOutward, MdStars } from 'react-icons/md'

function TitleSection() {
	return (
		<div className='flex flex-col gap-8 md:gap-10 relative'>
			{/* Background Glow */}
			<div className='absolute -top-20 -left-20 size-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none' />

			{/* Top Badge */}
			<div className='flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 w-fit animate-fade-in-down'>
				<MdStars className='text-primary size-5' />
				<span className='text-primary text-sm font-semibold tracking-wide uppercase'>Leading Tech Innovation</span>
			</div>

			<h1 className='text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight'>
				We Create Powerful <br />
				<span className='bg-gradient-to-r from-primary via-blue-400 to-cyan-400 bg-clip-text text-transparent'>
					Digital Solutions
				</span> <br />
				for Your Global Business.
			</h1>

			<p className='text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl'>
				Reve Infotech offers custom web applications, mobile experiences, and AI-driven solutions to fuel your success. Partner with us to transform your digital presence.
			</p>

			<div className='flex flex-wrap items-center gap-4'>
				<Link href='/services'>
					<Button className='rounded-2xl px-8 h-12 bg-primary text-white hover:bg-primary/90 text-base shadow-lg shadow-primary/20 hover:scale-105 transition-all group'>
						Explore services
						<MdOutlineArrowOutward className='size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
					</Button>
				</Link>
				<Link href='/about-us'>
					<Button variant='outline' className='rounded-2xl px-8 h-12 border-border/40 hover:bg-white/5 text-base hover:scale-105 transition-all'>
						Our story
					</Button>
				</Link>
			</div>

			<div className='grid grid-cols-2 md:grid-cols-3 w-full gap-4 mt-2'>
				<div className='flex flex-col py-3 px-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl hover:border-primary/50 hover:bg-white/15 transition-all duration-500 group relative overflow-hidden'>
					<div className='absolute -right-4 -top-4 size-16 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/30 transition-all' />
					<h1 className='text-3xl font-bold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-blue-400 transition-all'>100+</h1>
					<p className='text-xs font-semibold text-white/50 uppercase tracking-widest mt-0.5'>Happy customers</p>
				</div>
				<div className='flex flex-col py-3 px-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl hover:border-primary/50 hover:bg-white/15 transition-all duration-500 group relative overflow-hidden'>
					<div className='absolute -right-4 -top-4 size-16 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/30 transition-all' />
					<h1 className='text-3xl font-bold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-blue-400 transition-all'>20+</h1>
					<p className='text-xs font-semibold text-white/50 uppercase tracking-widest mt-0.5'>Projects completed</p>
				</div>
				<div className='flex flex-col py-3 px-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl hover:border-primary/50 hover:bg-white/15 transition-all duration-500 group col-span-full md:col-span-1 relative overflow-hidden'>
					<div className='absolute -right-4 -top-4 size-16 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/30 transition-all' />
					<h1 className='text-3xl font-bold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent group-hover:from-primary group-hover:to-blue-400 transition-all'>4+</h1>
					<p className='text-xs font-semibold text-white/50 uppercase tracking-widest mt-0.5'>Years of experience</p>
				</div>
			</div>
		</div>
	)
}

export default TitleSection
