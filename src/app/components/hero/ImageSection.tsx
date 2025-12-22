'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { Hand, ArrowDown, Armchair } from 'lucide-react'
import { usePathname } from 'next/navigation'
const Scene = dynamic(() => import('./brain/Scene'), { ssr: false })

type Animation = 'Look_Wave' | 'Free_Fall' | 'Sitting'

function ImageSection() {
	const [activeAnimation, setActiveAnimation] = useState<Animation>('Look_Wave')
	const pathname = usePathname()
	const [sceneKey, setSceneKey] = useState(0)

	// Force Scene remount when pathname changes
	useEffect(() => {
		if (pathname === '/') {
			setSceneKey(prev => prev + 1)
		}
	}, [pathname])

	const animations = [
		{ name: 'Look_Wave' as Animation, icon: Hand, label: 'Wave' },
		{ name: 'Free_Fall' as Animation, icon: ArrowDown, label: 'Fall' },
		{ name: 'Sitting' as Animation, icon: Armchair, label: 'Sit' }
	]

	return (
		<div className='w-full h-[50vh] md:h-full relative'>
			<Scene key={sceneKey} activeAnimation={activeAnimation} />
			<div className='absolute right-2 md:right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 md:gap-3 z-10'>
				{animations.map(anim => {
					const Icon = anim.icon
					return (
						<button
							key={anim.name}
							onClick={() => setActiveAnimation(anim.name)}
							className={`p-2 md:p-3 rounded-lg backdrop-blur-sm transition-all duration-300 cursor-pointer ${activeAnimation === anim.name
								? 'bg-blue-500/80 text-white scale-110'
								: 'bg-white/20 text-white/70 hover:bg-white/30 hover:text-white'
								}`}
							title={anim.label}
						>
							<Icon className='w-4 h-4 md:w-5 md:h-5' />
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default ImageSection
