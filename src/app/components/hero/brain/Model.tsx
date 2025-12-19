import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { Group, LoopRepeat, Mesh, MeshStandardMaterial } from 'three'

useGLTF.preload('/friendly_sci-fi_robot_with_animations.glb')

function Model({ activeAnimation }: { activeAnimation: string }) {
	const group = useRef<Group>(null)
	const { nodes, materials, animations, scene } = useGLTF(
		'/friendly_sci-fi_robot_with_animations.glb'
	)
	const { actions } = useAnimations(animations, scene)

	useEffect(() => {
		// Stop all animations first
		Object.values(actions).forEach(action => {
			if (action) action.fadeOut(0.5)
		})

		// Play the selected animation
		const action = actions[activeAnimation]
		if (action) {
			action.reset().fadeIn(0.5).setLoop(LoopRepeat, Infinity).play()
		}

		scene.traverse(obj => {
			if (obj instanceof Mesh && obj.material instanceof MeshStandardMaterial) {
				obj.material.emissiveIntensity = 4
			}
		})
	}, [activeAnimation, actions, scene])

	return (
		<group ref={group}>
			<primitive object={scene} />
		</group>
	)
}

export default Model
