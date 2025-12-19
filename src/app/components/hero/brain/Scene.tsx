'use client'

import { Canvas } from '@react-three/fiber'
import Model from './Model'
import { Suspense } from 'react'
import { Html, OrbitControls, Stage, useProgress } from '@react-three/drei'

function Loader() {
	const { progress, active } = useProgress()
	return <Html center>{progress.toFixed(1)} % loaded</Html>
}

function Scene() {
	return (
		<Canvas
			gl={{ antialias: true }}
			camera={{ position: [0, 0, 2.8], fov: 70 }}
			dpr={[1, 1.5]}
			className='w-full h-full cursor-grab touch-pan-y'
			style={{ touchAction: 'pan-y' }}
		>
			<Suspense fallback={<Loader />}>
				<Stage environment='city' intensity={0.6} adjustCamera={false}>
					<Model />
				</Stage>
			</Suspense>
			<OrbitControls makeDefault enableZoom={false} />
		</Canvas>
	)
}

export default Scene
