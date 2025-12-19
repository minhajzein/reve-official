'use client'

import dynamic from 'next/dynamic'
const Scene = dynamic(() => import('./brain/Scene'), { ssr: false })

function ImageSection() {
	return (
		<div className='w-full h-[50vh] md:h-full'>
			<Scene />
		</div>
	)
}

export default ImageSection
