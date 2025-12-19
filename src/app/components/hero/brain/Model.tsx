import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { Group, LoopRepeat, Mesh, MeshStandardMaterial } from 'three'

useGLTF.preload('/friendly_sci-fi_robot_with_animations.glb')

function Model() {
	const group = useRef<Group>(null)
	const { nodes, materials, animations, scene } = useGLTF(
		'/friendly_sci-fi_robot_with_animations.glb'
	)
	const { actions } = useAnimations(animations, scene)

	useEffect(() => {

		const action = actions['Look_Wave']

		if (action) {
			action.reset().fadeIn(0.5).setLoop(LoopRepeat, Infinity).play()
		}
		scene.traverse(obj => {
			if (obj instanceof Mesh && obj.material instanceof MeshStandardMaterial) {
				obj.material.emissiveIntensity = 4
			}
		})
	}, [actions, scene])

	return (
		<group ref={group}>
			<primitive object={scene} />
		</group>
	)
}

export default Model
