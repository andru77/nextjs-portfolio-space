"use client"
import React, {Suspense} from 'react';
import {Canvas} from "@react-three/fiber";
import {clsx} from "clsx";
import {Environment} from "@react-three/drei";

const ModelRenderer = ({
    children,
    className
                       }) => {
    return (
        <Canvas
            className={clsx("w-full h-full -z-10 opacity-100", className)}
        >
            <Suspense fallBack={<h3>He is coming...</h3>}>
                 {
                        children
                 }
             </Suspense>
            <Environment preset="sunset" />
        </Canvas>
    );
};

export default ModelRenderer;
