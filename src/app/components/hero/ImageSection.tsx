'use client'

import dynamic from 'next/dynamic'
const Scene = dynamic(() => import('./brain/Scene'), { ssr: false })

function ImageSection() {
	return (
		<div className='pointer-events-none w-full h-full'>
			<Scene />
		</div>
	)
}

export default ImageSection
