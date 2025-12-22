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
		</div>
	)
}

export default TitleSection
