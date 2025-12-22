'use client'

import { Canvas } from '@react-three/fiber'
import Model from './Model'
import { Suspense } from 'react'
import { Environment, Html, OrbitControls } from '@react-three/drei'

function Loader() {
	return <Html center><div className="text-white">Loading...</div></Html>
}

function Scene({ activeAnimation }: { activeAnimation: string }) {
	return (
		<Canvas
			gl={{ antialias: true }}
			camera={{ position: [0, 1.8, 6.0], fov: 70 }}
			dpr={[1, 1.5]}
			className='w-full h-full cursor-grab touch-pan-y'
			style={{ touchAction: 'pan-y' }}
		>
			<Suspense fallback={<Loader />}>
				<ambientLight intensity={0.5} />
				<directionalLight position={[10, 10, 5]} intensity={1} />
				<Environment preset='city' />
				<Model activeAnimation={activeAnimation} />
			</Suspense>
			<OrbitControls
				makeDefault
				enableZoom={false}
				enablePan={false}
				minPolarAngle={Math.PI / 2.5}
				maxPolarAngle={Math.PI / 1.8}
				target={[0, 1.8, 0]}
			/>
		</Canvas>
	)
}

export default Scene
