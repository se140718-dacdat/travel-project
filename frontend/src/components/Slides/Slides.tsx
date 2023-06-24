import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slides.css"

import { Autoplay, Pagination, Navigation } from "swiper";

const images = [
    "./assets/nhatrang-background.jpg",
    "./assets/Rectangle2.png",
    "./assets/Rectangle3.png",
    "./assets/Rectangle4.png",
    "./assets/Rectangle5.png",
    "./assets/Rectangle6.png",
    "./assets/Rectangle7.png",
    "./assets/Rectangle8.png",
    "./assets/Rectangle9.png",
]

const Slides = () => {
    return (
        <div id="Slider">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {images?.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item} alt="slides" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slides