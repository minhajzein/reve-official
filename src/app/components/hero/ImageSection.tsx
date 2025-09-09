'use client'

import dynamic from 'next/dynamic'
const Scene = dynamic(() => import('./brain/Scene'), { ssr: false })

function ImageSection() {
	return (
		<div>
			<Scene />
		</div>
	)
}

export default ImageSection
