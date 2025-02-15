/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 little_astronaut.glb --trasnform
Author: Rude Randal (https://sketchfab.com/Rude_Randal)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/little-astronaut-5bb793a440164595ac4cb605822b2d88
Title: Little Astronaut
*/
"use client"
import React, {useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

export function LittleAstronaut(props) {
    const { nodes, materials } = useGLTF('./models/little_astronaut.glb')

    const astronautRef = useRef();

    useFrame(({state, clock}) => {
        astronautRef.current.position.y = -1.2 + Math.sin(clock.elapsedTime ) * 0.15;
        astronautRef.current.rotation.y = Math.sin(clock.elapsedTime ) * 0.12;
    });

    return (
        <group {...props}
               ref={astronautRef}
               opacity={1}
               position={[0, -1.2, 0]}
               rotation={[0.8, 0, 0]}
               scale={[1,1,1]}
               dispose={null}
        >
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.531}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh geometry={nodes.Object_4.geometry} material={materials.Character_Texture} position={[0, 1.636, -0.136]} />
                    <mesh geometry={nodes.Object_6.geometry} material={materials.Character_Texture} position={[0, 3.106, 0.123]} scale={[1.468, 1.531, 1.494]} />
                    <mesh geometry={nodes.Object_8.geometry} material={materials.Character_Texture} position={[0, 1.835, -1.056]} scale={[0.776, 0.394, 0.394]} />
                    <mesh geometry={nodes.Object_10.geometry} material={materials.Character_Texture} position={[0, 1.91, -1.041]} />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('./models/little_astronaut.glb')
