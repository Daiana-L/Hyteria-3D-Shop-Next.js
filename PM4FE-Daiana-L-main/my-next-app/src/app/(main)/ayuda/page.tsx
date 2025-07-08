
import Image from "next/image";
export default function Ayuda() {
    return (
        <section className="lg:mt-36 xs:mt-28 lg:px-4" data-aos="fade-down">
            <div className="relative bg-white p-6 rounded-3xl shadow-lg text-center">
                <div className="absolute lg:-top-28 xs:-top-20 left-1/2 transform -translate-x-1/2">
                    <div className="lg:w-32 lg:h-32 xs:w-24 xs:h-24 rounded-full overflow-hidden border-4 border-white shadow-md bg-indigo-100">
                        <Image
                            src="/assets/img/pet3.png"
                            alt="Avatar de usuario"
                            width={228}
                            height={128}
                            className="object-contain"
                        />
                    </div>
                </div>

                <h1 className="lg:text-3xl xs:text-2xl font-bold text-indigo-600 lg:mb-4">
                    Ayuda y Soporte
                </h1>

                <p className="text-gray-700 lg:text-lg mb-4">
                    ¿Tenés dudas sobre tu pedido, un problema técnico o querés
                    hacer una consulta personalizada?
                </p>
                <p className="text-gray-700 lg:text-lg lg:mb-8 xs:mb-4">
                    Estamos para ayudarte con cualquier tema relacionado a
                    productos, envíos o personalizaciones.
                </p>

                <div className="bg-indigo-100 p-6 rounded-xl inline-block shadow-md">
                    <p className="text-gray-800 text-md mb-1 font-medium">
                        Correo de soporte
                    </p>
                    <p className="text-indigo-600 text-lg font-semibold select-all">
                        soporte@hysteria3d.com
                    </p>
                </div>
            </div>
        </section>
    );
}
