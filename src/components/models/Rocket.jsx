"use client";
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {useFrame} from "@react-three/fiber";

export function Rocket(props) {
    const { nodes, materials } = useGLTF('./models/rocket_2.glb')
    const rocketRef = useRef();

    useFrame(({clock}) => {
        rocketRef.current.position.y = -1.2 + Math.sin(clock.elapsedTime ) * 0.15;
    });

    return (
        <group {...props}
               ref={rocketRef}
               dispose={null}
               position={[1, -.5, 0]}
               scale={[0.11, 0.15, 0.12]}
        >
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_2.geometry}
                    material={materials.blinn1SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_3.geometry}
                    material={materials.blinn2SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.blinn3SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={materials.blinn5SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={materials.phong1SG}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_7.geometry}
                    material={materials.phong2SG}
                />
            </group>
        </group>
    )
}

useGLTF.preload('./models/rocket_2.glb')