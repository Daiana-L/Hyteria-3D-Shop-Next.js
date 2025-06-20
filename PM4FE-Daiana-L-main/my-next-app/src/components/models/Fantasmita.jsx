'use client';

import { useRef } from "react";
import { useGLTF, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Fantasmita(props) {
    const { scene } = useGLTF("/img/fantasmita3.glb");
    const ref = useRef();

    useFrame((state) => {
        const t = state.clock.elapsedTime;
        if (ref.current) {
            ref.current.position.y = Math.sin(t * 4) * 0.1;
            ref.current.rotation.y += 0.012;
        }
    });

    return (
        <group ref={ref} {...props}>
            <Center>
                <primitive object={scene} />
            </Center>
        </group>
    );
}


useGLTF.preload("/img/fantasmita3.glb");
