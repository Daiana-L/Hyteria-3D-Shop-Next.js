"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Fantasmita from "./Fantasmita";

export default function Escena3D() {
    return (
        <div className="flex items-center justify-center lg:w-[42vh] xs:w-[35vh] xs:h-[40vh] lg:bg-indigo-600/95 md:hidden-bg-indigo-600/95 xs:hidden-bg-indigo-600/95 lg:rounded-xl xs:rounded-lg backdrop-blur-md xs:ml-4 ">
            <div className="lg:w-[400px] lg:h-[440px]">
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
