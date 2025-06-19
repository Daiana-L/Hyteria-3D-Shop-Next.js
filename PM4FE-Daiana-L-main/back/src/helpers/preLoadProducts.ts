import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  // Decoración (categoryId: 1)
  {
    name: "Organizador de escritorio",
    price: 4500,
    description: "Organizador moderno impreso en 3D ideal para mantener tu espacio de trabajo limpio y ordenado con estilo.",
    image: "https://i.postimg.cc/RF8NWRyw/2024-01-10-c1ea106da8166.webp",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Decoración de búhos",
    price: 7200,
    description: "Set decorativo de simpáticos búhos impresos en 3D, perfectos para aportar calidez a cualquier ambiente.",
    image: "https://i.postimg.cc/RqxhR0MF/2024-04-17-7c87e81a9f692.webp",
    categoryId: 1,
    stock: 8,
  },
  {
    name: "Decoración para baños",
    price: 2200,
    description: "Adorno minimalista en 3D diseñado especialmente para embellecer espacios de baño con un toque contemporáneo.",
    image: "https://i.postimg.cc/PfP3pQPJ/2025-06-03-4d34cd82fb18a.webp",
    categoryId: 1,
    stock: 15,
  },
  {
    name: "Árbol bonsái",
    price: 5400,
    description: "Reproducción en 3D de un bonsái decorativo, ideal para mesas, estanterías y espacios zen.",
    image: "https://i.postimg.cc/Qdr0zLSK/7cfac020-1235-11f0-b186-57f480f6d0a5.webp",
    categoryId: 1,
    stock: 6,
  },
  {
    name: "Adorno Colgante Farol",
    price: 3100,
    description: "Farol decorativo impreso en 3D para colgar en ventanas, balcones o paredes. Liviano y elegante.",
    image: "https://i.postimg.cc/Vsp7j0CR/Farol.webp",
    categoryId: 1,
    stock: 12,
  },
  {
    name: "Decoración de gatitos",
    price: 3800,
    description: "Tierna escultura de dos gatitos abrazándose, perfecta para regalar o decorar espacios acogedores.",
    image: "https://i.postimg.cc/bNnmLY0j/gatitos-abrazo.webp",
    categoryId: 1,
    stock: 9,
  },

  // Llaveros (categoryId: 2)
  {
    name: "Llavero Cinnamoroll",
    price: 1000,
    description: "Llavero tierno del personaje Cinnamoroll, ideal para personalizar mochilas o llaves con estilo kawaii.",
    image: "https://i.postimg.cc/85fc2YPx/2024-05-21-a9ed23dddd4fd8.webp",
    categoryId: 2,
    stock: 30,
  },
  {
    name: "Llavero Pokéball",
    price: 1200,
    description: "Pokéball impresa en 3D, perfecta para fans de Pokémon que quieren llevar su pasión a todas partes.",
    image: "https://i.postimg.cc/kXmGHfrh/2024-11-01-3df3ccc04ebfc.webp",
    categoryId: 2,
    stock: 25,
  },
  {
    name: "Llavero Pokémon",
    price: 1100,
    description: "Llavero impreso en 3D inspirado en personajes del mundo Pokémon. ¡Ideal para entrenadores!",
    image: "https://i.postimg.cc/cL1HxCLR/2025-01-09-c5d3409e3e813.webp",
    categoryId: 2,
    stock: 20,
  },
  {
    name: "Llavero Pikachu",
    price: 1300,
    description: "Llavero de Pikachu con detalles encantadores, ideal para acompañarte en tus aventuras diarias.",
    image: "https://i.postimg.cc/0NbyS4mr/2025-02-27-79cdfee5532c3.webp",
    categoryId: 2,
    stock: 18,
  },
  {
    name: "Llavero Kuromi",
    price: 900,
    description: "Adorable llavero de Kuromi con diseño kawaii, ideal para fans de Sanrio.",
    image: "https://i.postimg.cc/NfkFvmBG/2025-03-12-2f301fe6a9fb3.webp",
    categoryId: 2,
    stock: 22,
  },
  {
    name: "Llavero Hollow Knight",
    price: 1100,
    description: "Llavero del caballero de Hollow Knight, perfecto para coleccionistas y gamers.",
    image: "https://i.postimg.cc/tgwCNztk/hollow-knight.webp",
    categoryId: 2,
    stock: 28,
  },

  // Macetas (categoryId: 3)
  {
    name: "Maceta estilo griego",
    price: 1200,
    description: "Maceta inspirada en la cerámica griega clásica, perfecta para suculentas o pequeños arreglos florales.",
    image: "https://i.postimg.cc/0NDDmr7z/2024-03-03-1307899d677ac8.webp",
    categoryId: 3,
    stock: 15,
  },
  {
    name: "Maceta Stitch",
    price: 1500,
    description: "Maceta decorativa del personaje Stitch, ideal para plantas pequeñas o decoración geek.",
    image: "https://i.postimg.cc/ZRm3LZLV/2024-06-11-73700999ec133.webp",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Maceta artística",
    price: 1800,
    description: "Maceta con diseño artístico moderno, ideal para aportar color y originalidad a cualquier rincón.",
    image: "https://i.postimg.cc/vTqVMnwN/2024-07-19-82bee588021d8.webp",
    categoryId: 3,
    stock: 12,
  },
  {
    name: "Maceta Gato tierno",
    price: 1600,
    description: "Maceta en forma de gato, ideal para fans de los felinos y decoraciones tiernas.",
    image: "https://i.postimg.cc/gjkZfDQh/2024-10-31-7c91c7908627a8.webp",
    categoryId: 3,
    stock: 14,
  },
  {
    name: "Maceta estilo moderno",
    price: 1400,
    description: "Maceta con líneas limpias y diseño contemporáneo. Ideal para hogares con estilo minimalista.",
    image: "https://i.postimg.cc/W37ZWKWj/2025-06-07-46280866d52cb.webp",
    categoryId: 3,
    stock: 11,
  },
  {
    name: "Jarrón espiral",
    price: 1700,
    description: "Jarrón decorativo en forma de espiral, elegante y moderno, perfecto para flores secas o decoración.",
    image: "https://i.postimg.cc/7Pm7SFJn/Jarron-espiral.webp",
    categoryId: 3,
    stock: 9,
  },

  // Accesorios (categoryId: 4)
  {
    name: "Soporte para auriculares",
    price: 2800,
    description: "Soporte robusto y estilizado para auriculares, ideal para escritorios gamers o de oficina.",
    image: "https://i.postimg.cc/SQL0VpW3/2024-06-28-4a5a38e448ff18.webp",
    categoryId: 4,
    stock: 25,
  },
  {
    name: "Organizador de accesorios",
    price: 1600,
    description: "Organizador impreso en 3D para guardar joyas, aros y otros accesorios pequeños.",
    image: "https://i.postimg.cc/tJjKyrHB/2024-11-23-3fd48c2f364198.webp",
    categoryId: 4,
    stock: 18,
  },
  {
    name: "Aros de naranjas",
    price: 1500,
    description: "Aros divertidos y frescos con forma de naranja, ideales para looks veraniegos.",
    image: "https://i.postimg.cc/xT9w4F5C/2025-02-02-cf8d65cffd2ec8.webp",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "Aros margaritas",
    price: 1300,
    description: "Aros delicados con forma de margarita, ideales para primavera o un estilo floral y juvenil.",
    image: "https://i.postimg.cc/5ySZtw4b/2025-04-07-b18db9fb1db35.webp",
    categoryId: 4,
    stock: 13,
  },
  {
    name: "Aros margaritas con corazón",
    price: 1900,
    description: "Aros románticos con diseño de margaritas y pequeños corazones. Livianos y encantadores.",
    image: "https://i.postimg.cc/hPMkWbZ0/2025-06-02-1a75375108aff.webp",
    categoryId: 4,
    stock: 16,
  },
  {
    name: "Aros flor de cerezos",
    price: 1100,
    description: "Aros con forma de flor de cerezo, livianos y delicados, perfectos para un look femenino y natural.",
    image: "https://i.postimg.cc/0yQL8ML1/aritos-cerezos.webp",
    categoryId: 4,
    stock: 19,
  },

  // Arte y diseño (categoryId: 5)
  {
    name: "Escultura Mujer Abstracta",
    price: 5000,
    description: "Figura artística en 3D que representa la silueta femenina con líneas modernas y fluidas.",
    image: "https://i.postimg.cc/k56bxstM/2024-02-04-3d2db371a14b5.webp",
    categoryId: 5,
    stock: 5,
  },
  {
    name: "Marcador de libros estrellas",
    price: 2800,
    description: "Marcador de libros con diseño de estrellas, ideal para amantes de la lectura y el universo.",
    image: "https://i.postimg.cc/qq06HdDg/2024-06-10-3f6e3e006ab42.webp",
    categoryId: 5,
    stock: 7,
  },
  {
    name: "Marcador de libros espadas",
    price: 2200,
    description: "Marcador de libros en forma de espada, ideal para lectores fans de la fantasía y aventuras.",
    image: "https://i.postimg.cc/jqQJQLCf/2024-06-19-f321ad13037d8.webp",
    categoryId: 5,
    stock: 4,
  },
  {
    name: "Marcador de libros gatitos",
    price: 2500,
    description: "Marcador de libros con simpáticos gatitos, perfecto para agregar ternura a tu lectura diaria.",
    image: "https://i.postimg.cc/yNMSnRFm/2024-08-24-e1fd54c602474.webp",
    categoryId: 5,
    stock: 6,
  },
  {
    name: "Cuadro Ichigo",
    price: 2200,
    description: "Cuadro decorativo en 3D del personaje Ichigo de Bleach, ideal para fanáticos del anime.",
    image: "https://i.postimg.cc/5y3YxkDg/2025-01-29-fed714cbe1c8d.webp",
    categoryId: 5,
    stock: 5,
  },
  {
    name: "Marcador estilo japonés",
    price: 7000,
    description: "Marcador de libros con diseño tradicional japonés, elegante y exclusivo para coleccionistas.",
    image: "https://i.postimg.cc/KvG39xgH/marcador.webp",
    categoryId: 5,
    stock: 3,
  },

  // Figuras y coleccionables (categoryId: 6)
  {
    name: "Figura abeja Minecraft",
    price: 3500,
    description: "Mini figura de abeja del universo Minecraft, perfecta para coleccionistas o decoración geek.",
    image: "https://i.postimg.cc/7YkpGPWb/2024-04-21-cb25db8cfec04.webp",
    categoryId: 6,
    stock: 10,
  },
  {
    name: "Figura gallina Minecraft",
    price: 3200,
    description: "Figura coleccionable de gallina de Minecraft, ideal para fans del juego.",
    image: "https://i.postimg.cc/4yTF9wwj/2024-08-26-05486547b74ba.webp",
    categoryId: 6,
    stock: 8,
  },
  {
    name: "Figura Frieren chibi",
    price: 2900,
    description: "Estatuilla chibi de Frieren, del anime Sousou no Frieren. Detalles cuidados y estilo adorable.",
    image: "https://i.postimg.cc/3JFzgMs1/2025-03-28-7a531a5b677ce.webp",
    categoryId: 6,
    stock: 11,
  },
  {
    name: "Figura Pokémon",
    price: 3100,
    description: "Figura de personaje Pokémon, ideal para completar tu colección otaku o gamer.",
    image: "https://i.postimg.cc/pL076fXn/2025-06-06-7d2aa7097f9b68.webp",
    categoryId: 6,
    stock: 9,
  },
  {
    name: "Figura Hollow",
    price: 3400,
    description: "Figura en 3D inspirada en los Hollows de Bleach, con diseño detallado y gran presencia.",
    image: "https://i.postimg.cc/Z5Y2H7ZS/2025-06-06-81f9d9516bc8.webp",
    categoryId: 6,
    stock: 7,
  },
  {
    name: "Figura Gundam",
    price: 12000,
    description: "Imponente figura de Gundam, con diseño mecánico en alta resolución, ideal para fans del mecha.",
    image: "https://i.postimg.cc/sDsNf6Mh/gundam.webp",
    categoryId: 6,
    stock: 20,
  },
];


export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
