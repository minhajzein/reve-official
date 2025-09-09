'use client'

import { Canvas } from '@react-three/fiber'
import Model from './Model'
import { Suspense } from 'react'
import { Bounds, Html, OrbitControls, useProgress } from '@react-three/drei'

function Loader() {
	const { progress, active } = useProgress()
	return <Html center>{progress.toFixed(1)} % loaded</Html>
}

function Scene() {
	return (
		<Canvas
			gl={{ antialias: true }}
			camera={{ position: [0, 0, 5], fov: 50 }}
			dpr={[1, 1.5]}
			className='w-full'
		>
			<ambientLight intensity={0.6} />{' '}
			<directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
			<pointLight position={[-5, -5, -5]} intensity={0.5} />
			<Suspense fallback={<Loader />}>
				<Bounds fit clip observe margin={1.2}>
					<Model />
				</Bounds>
			</Suspense>
			<OrbitControls />
		</Canvas>
	)
}

export default Scene
