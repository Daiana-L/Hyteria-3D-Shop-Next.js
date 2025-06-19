import { MoveRight, Home } from "lucide-react";
import { Button } from "@/Components/UI/button";
import { Badge } from "@/Components/UI/badge";
import Image from "next/image";
import hysteriaImgs from "../../../public/assets/img/landing1.jpg";
import Link from "next/link";
import { routes } from "../../Routes/index";
export default function Page() {
    return (
        <div className="w-full py-10 lg:py-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
                    <div
                        className="flex gap-4 flex-col"
                        data-aos="fade-left"
                        data-aos-delay="600"
                    >
                        <div>
                            <Badge variant="outline">Bienvenidos!</Badge>
                        </div>
                        <div className="flex gap-4 flex-col">
                            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular text-gray-900">
                                Hysteria_3D esta en marcha!
                            </h1>
                            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                                En Hysteria_3D somos un pequeño emprendimiento
                                que te ofrece compras online fáciles y rápidas.
                                Olvidate de complicaciones: acá podés elegir y
                                encargar tus impresiones 3D de forma simple,
                                desde donde estés!
                            </p>
                        </div>
                        <div className="flex flex-row gap-4">
                            <Link href={routes.home} passHref>
                                <Button
                                    size="lg"
                                    className="gap-4 bg-indigo-500 text-white hover:bg-sky-500 hover:text-white"
                                    variant="outline"
                                >
                                    <Home className="w-4 h-4" /> Home
                                </Button>
                            </Link>

                            <Link href={routes.login} passHref>
                                <Button
                                    size="lg"
                                    className="gap-4 bg-indigo-500 text-white hover:bg-sky-500 hover:text-white"
                                    variant="outline"
                                >
                                    Iniciar sesión{" "}
                                    <MoveRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div
                        className="bg-muted rounded-md aspect-square"
                        data-aos="fade-right"
                        data-aos-delay="400"
                    >
                        <Image
                            src={hysteriaImgs}
                            alt="productos"
                            width={1000}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
