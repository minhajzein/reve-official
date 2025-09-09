'use client'

import dynamic from 'next/dynamic'
const Scene = dynamic(() => import('./brain/Scene'), { ssr: false })

function ImageSection() {
	return (
		<div className={`flex bg-[url('/images/hero-bg.png')] bg-secondary`}>
			<Scene />
		</div>
	)
}

export default ImageSection
