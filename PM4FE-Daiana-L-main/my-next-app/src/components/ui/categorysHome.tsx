import Image from "next/image";
import Link from "next/link";

export default function CategoriesHome() {
    const categories = [
        {
            name: "Llaveros",
            image: "/assets/img/logo-llaveros.png",
            href: "/category/2",
        },
        {
            name: "Figuras",
            image: "/assets/img/figuras-categoria.png",
            href: "/category/6",
        },
        {
            name: "Macetas",
            image: "/assets/img/logo-macetas.png",
            href: "/category/3",
        },
    ];

    return (
        <section className="w-full py-6">
            <div className="container  lg:px-4">
                <h2 className="lg:text-2xl  xs:text-lg font-bold text-black lg:mt-10 xs:mt-3 xs:p-3">
                    Categorías destacadas
                </h2>
                <div className="grid lg:grid-cols-3 xs:grid-cols-3 lg:gap-6 xs:gap-28 xs:ml-10 lg:mt-10 xs:mt-8 xs:mb-2">
                    {categories.map((cat, index) => (
                        <Link
                            href={cat.href}
                            key={index}
                            className="flex flex-col items-center"
                        >
                            <div className="lg:w-28 lg:h-28 xs:w-16 xs:h-16 relative rounded-lg overflow-hidden">
                                <Image
                                    src={cat.image}
                                    alt={cat.name}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <p className="lg:mt-4 lg:text-lg font-medium text-black">
                                {cat.name}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
