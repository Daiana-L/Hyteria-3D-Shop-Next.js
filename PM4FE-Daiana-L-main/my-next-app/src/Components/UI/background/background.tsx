/*"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async () => {}, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fullScreen: { enable: false },
                fpsLimit: 60,
                particles: {
                    number: { value: 30, density: { enable: true, area: 800 } },
                    shape: {
                        type: "image",
                        image: [
                            {
                                src: "/assets/img/estrella.png",
                                width: 9,
                                height: 8,
                            },
                        ],
                    },
                    size: {
                        value: 20,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 5,
                            size_min: 10,
                            sync: false,
                        },
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        direction: "none",
                        random: true,
                        straight: false,
                        outModes: { default: "bounce" },
                    },
                    opacity: { value: 0.8, random: true },
                },
                detectRetina: true,
            }}
            style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 0,
                top: 0,
                left: 0,
            }}
        />
    );
}
*/