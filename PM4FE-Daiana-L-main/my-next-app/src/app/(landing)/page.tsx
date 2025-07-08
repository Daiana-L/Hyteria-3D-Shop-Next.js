import { MoveRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import hysteriaImgs from "../../../public/assets/img/landing1.jpg";
import Link from "next/link";
import { routes } from "../../routes/index";
export default function Page() {
    return (
        <div>
            
            <div className="py-10 lg:py-20 ">
            <div className="">
                <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
                    <div
                        className="flex gap-4 xs:gap-2 flex-col"
                        data-aos="fade-left"
                        data-aos-delay="600"
                    >
                        <div className="lg:text-2xl xs:text-base">
                            <Badge variant="outline">Bienvenidos!</Badge>
                        </div>
                        <div className="flex gap-4 xs:gap-1 flex-col">
                            <h1 className="text-5xl xs:text-4xl md:text-7xl max-w-lg tracking-tighter text-left font-regular text-gray-900">
                                Hysteria_3D esta en marcha!
                            </h1>
                            <p className="lg:text-xl xs:text-base leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
                                En Hysteria_3D somos un pequeño emprendimiento
                                que te ofrece compras online fáciles y rápidas.
                                Olvidate de complicaciones: acá podés elegir y
                                encargar tus impresiones 3D de forma simple,
                                desde donde estés!
                            </p>
                        </div>
                        <div className="flex flex-row gap-4 xs:mt-4">
                            <Link href={routes.home} passHref>
                                <Button
                                    size="lg"
                                    className="gap-4 lg:bg-indigo-600/95 xs:bg-violet-600/95 text-white hover:bg-sky-500 hover:text-white rounded-xl p-2 px-4"
                                    variant="outline"
                                >
                                    <Home className="w-4 h-4" /> Home
                                </Button>
                            </Link>

                            <Link href={routes.login} passHref>
                                <Button
                                    size="lg"
                                    className="gap-4 lg:bg-indigo-600/95 xs:bg-violet-600/95 text-white hover:bg-sky-500 hover:text-white rounded-xl p-2"
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
                            width={2000}
                        />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
