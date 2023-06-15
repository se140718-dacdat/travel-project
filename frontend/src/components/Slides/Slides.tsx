import React, { useEffect, useState, Dispatch, SetStateAction, FC } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Slides.css"

import { Autoplay, Pagination, Navigation } from "swiper";
import ListLocation from '../pages/ListLocation';

const images = [
    "./assets/Rectangle1.png",
    "./assets/Rectangle2.png",
    "./assets/Rectangle3.png",
    "./assets/Rectangle4.png",
    "./assets/Rectangle5.png",
    "./assets/Rectangle6.png",
    "./assets/Rectangle7.png",
    "./assets/Rectangle8.png",
    "./assets/Rectangle9.png",
]

interface Props {
    showSlide: boolean;
    setShowSlide: Dispatch<SetStateAction<boolean>>;
}

const Slides:FC<Props> = (props) => {
    const [showSelectList, setShowSelectList] = useState("0");
    const [place, setPlace] = useState<string>("");
    const [place2, setPlace2] = useState<string>("");

    useEffect(() => {
        props.setShowSlide(true);
        window.onclick = () => {
            setShowSelectList("0");
        }
    }, [])

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
            <div className="content-main">
                <h1 className="heading-content">Build Your Own Customized Trip Plan</h1>
                <div className="main-dashboard">
                    <div className="pick-location" onClick={(e) => {
                        e.stopPropagation();
                        (showSelectList === "1")
                            ?
                            setShowSelectList("0")
                            :
                            setShowSelectList("1")
                    }}>
                        {
                            (place !== "")
                                ?
                                (<div className="pick-label">{place}, Vietnam</div>)
                                :
                                (<div className="pick-label">Where do you want to go ?</div>)
                        }
                        <div className="location-icon">
                            <img src="./assets/location.png" alt="" />
                        </div>
                        {showSelectList === "1" && <ListLocation showSelectList={showSelectList} setPlace={setPlace} setPlace2={setPlace} />}
                    </div>
                    <div className="pick-location">
                        <div className="pick-label" onClick={(e) => {
                            e.stopPropagation();
                            (showSelectList === "2")
                                ?
                                setShowSelectList("0")
                                :
                                setShowSelectList("2")
                        }}>
                            {
                                (place2 !== "")
                                    ?
                                    (<div className="pick-label">{place2}, Vietnam</div>)
                                    :
                                    (<div className="pick-label">+ Add another destination</div>)
                            }
                        </div>
                        {showSelectList === "2" && <ListLocation showSelectList={showSelectList} setPlace={setPlace} setPlace2={setPlace2} />}
                    </div>
                    <div className="setting-date">
                        <input type="date" placeholder="Start Date" className="pick-date" />
                        <input type="date" placeholder="End Date" className="pick-date" />
                    </div>
                    <div className="submit">
                        <button className='button-main'>Start planning</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slides