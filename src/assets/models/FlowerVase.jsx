import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import flowerVaseScene from '../3d/magnolia_in_a_vase.glb'

const FlowerVase = () => {
    const flowerVaseRef = useRef()
    const { nodes, materials } = useGLTF(flowerVaseScene)

    return (
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.533}> 
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.flowers_magnolia_003_flowers_magnolia_stem_0.geometry}
                    material={materials.flowers_magnolia_stem}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.flowers_magnolia_003_flowers_magnolia_0.geometry}
                    material={materials.flowers_magnolia}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.flowers_magnolia_003_flowers_magnolia_bowl_0.geometry}
                    material={materials.flowers_magnolia_bowl}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.flowers_magnolia_003_flowers_magnolia_water_0.geometry}
                    material={materials.flowers_magnolia_water}
                />
            </group>
    )
}

export default FlowerVase
