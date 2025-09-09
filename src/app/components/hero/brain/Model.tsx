import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import { Group, LoopRepeat, Mesh, MeshStandardMaterial } from 'three'

useGLTF.preload('/brain_hologram.glb')

function Model() {
	const group = useRef<Group>(null)
	const { nodes, materials, animations, scene } = useGLTF('/brain_hologram.glb')
	const { actions } = useAnimations(animations, scene)

	useEffect(() => {
		Object.values(actions).forEach(action => {
			action?.reset().setLoop(LoopRepeat, Infinity).play()
		})
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
