import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; 
import Image from "next/image";
import "swiper/css";

export default function Carousel() {
    return (
        <div className="relative  overflow-hidden  shadow-lg">
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 4000, 
                    disableOnInteraction: false, 
                }}
                modules={[Autoplay]} 
            >
                {[ "figura1.jpg","mascara1.jpg", "soporte2.jpg", "flor3.jpg", "casco1.jpg"].map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-[1250px] overflow-hidden shadow-lg ">
                            <Image
                                src={`/assets/img/Imagenes/${img}`}
                                alt={`Image ${index + 1}`}
                                width={1500}
                                height={100}
                                className="object-cover"
                                priority={index === 0}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
