import { useAnimations, useGLTF } from '@react-three/drei'
import { useEffect, useMemo, useRef } from 'react'
import { Group, LoopRepeat, Mesh, MeshStandardMaterial } from 'three'
import { SkeletonUtils } from 'three-stdlib'

useGLTF.preload('/friendly_sci-fi_robot_with_animations.glb')

function Model({ activeAnimation }: { activeAnimation: string }) {
	const group = useRef<Group>(null)
	const { animations, scene } = useGLTF(
		'/friendly_sci-fi_robot_with_animations.glb'
	)

	// Clone the scene to avoid state accumulation on the cached object
	const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene])
	const { actions } = useAnimations(animations, clonedScene)

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

		// Apply material modifications to the cloned scene
		clonedScene.traverse(obj => {
			if (obj instanceof Mesh && obj.material instanceof MeshStandardMaterial) {
				obj.material.emissiveIntensity = 4
			}
		})
	}, [activeAnimation, actions, clonedScene])

	return (
		<group ref={group} scale={2.7} position={[0, -1.5, 0]}>
			<primitive object={clonedScene} />
		</group>
	)
}

export default Model
