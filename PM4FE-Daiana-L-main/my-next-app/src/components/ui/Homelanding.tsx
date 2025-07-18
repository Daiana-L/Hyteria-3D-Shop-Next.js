import { Check } from "lucide-react";
import { Badge } from "../ui/badge";
import Escena3D from "../models/Escena3D";

export const Feature1 = () => (
    <div className="mt-4">
        <div>
            <div className="xs:p-4  grid border rounded-lg lg:container lg:py-6 xs:py-5 lg:gap-10 items-center  lg:grid-cols-2  xs:grid-cols-1">
                <div className="flex lg:gap-10 xs:gap-3 flex-col lg:ml-16 xs:ml-3">
                    <div className="flex flex-col">
                        <div>
                            <Badge
                                className="mb-2 bg-sky-500 text-white"
                                variant="outline"
                            >
                                Hysteria_3D
                            </Badge>
                        </div>
                        <div className="flex gap-2 flex-col ">
                            <h2 className="text-3xl lg:text-5xl xs:text-1xl tracking-tighter max-w-xl text-left font-regular text-indigo-600">
                                ¡Algo nuevo está llegando!
                            </h2>
                            <p className="lg:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                                Un pequeño emprendimiento, con grandes ideas
                                impresas en 3D.
                            </p>
                        </div>
                    </div>
                    <div className="grid lg:pl-6 grid-cols-1 items-start lg:grid-cols-1 lg:gap-6 xs:gap-3 ">
                        <div className="flex flex-row gap-6 items-start">
                            <Check className="w-4 h-4 mt-2 text-primary text-sky-500" />
                            <div className="flex flex-col gap-1">
                                <p>Fácil de usar</p>
                                <p className="text-muted-foreground text-sm">
                                    Compra online rápida, simple y sin vueltas.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-6 items-start">
                            <Check className="w-4 h-4 mt-2 text-primary text-sky-500" />
                            <div className="flex flex-col gap-1">
                                <p>Rápido y confiable</p>
                                <p className="text-muted-foreground text-sm">
                                    Entregas personalizadas, siempre a tiempo.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-6 items-start">
                            <Check className="w-4 h-4 mt-2 text-primary text-sky-500" />
                            <div className="flex flex-col gap-1">
                                <p>Creativo y moderno</p>
                                <p className="text-muted-foreground text-sm">
                                    Diseños únicos impresos con amor.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <Escena3D />
                </div>
            </div>
        </div>
    </div>
);
