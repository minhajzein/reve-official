'use client'

import { Canvas } from '@react-three/fiber'
import Model from './Model'
import { Suspense } from 'react'
import { Html, OrbitControls, Stage } from '@react-three/drei'

function Loader() {
	return <Html center><div className="text-white">Loading...</div></Html>
}

function Scene({ activeAnimation }: { activeAnimation: string }) {
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
					<Model activeAnimation={activeAnimation} />
				</Stage>
			</Suspense>
			<OrbitControls makeDefault enableZoom={false} />
		</Canvas>
	)
}

export default Scene
