"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Fantasmita from "./fantasmita";

export default function Escena3D() {
    return (
        <div className="flex items-center justify-center w-[55vh]  bg-indigo-600/95 rounded-xl backdrop-blur-md ">
            <div className="w-[400px] h-[440px]">
                <Canvas camera={{ position: [0, 2, 5], fov: 105}}>
                    <ambientLight intensity={25.2} />
                    <Environment preset="sunset" />
                    <Fantasmita scale={6.9} position={[0, 2, 0]} />
                    <OrbitControls enableZoom={false} enablePan={false} />
                </Canvas>
            </div>
        </div>
    );
}; 
