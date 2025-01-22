"use client";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

export function SpaceExploration(props) {
    const { nodes, materials } = useGLTF('./models/space-exploration.glb')
    const planetRef = useRef();

    useFrame(() => {
        planetRef.current.rotation.y += 0.0025;
    });

    return (
        <group {...props}
               ref={planetRef}
               dispose={null}
               scale={[0.14, 0.14, 0.14]}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group position={[-0.003, 0.024, -6.331]} rotation={[0.238, -0.545, 0.562]} scale={7}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.planet001_1.geometry}
                        material={materials.scene}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.planet001_2.geometry}
                        material={materials.scene}
                    />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('./models/space-exploration.glb')