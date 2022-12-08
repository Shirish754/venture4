import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

function Percentage(props) {
    const percentage = 65;
    return (

        <div className="d-flex m-4 p-4 bg-white">
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={4}
                navigation
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="d-flex border">
                        <div className="p-3" style={{ height: "150px", width: "150px" }}>
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <p><b>(६९९/७५३)</b></p>
                            <p style={{ color: "#AFB1B2" }}>स्थानीय</p>
                            <p><b>LISA</b></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="d-flex border">
                        <div className="p-3" style={{ height: "150px", width: "150px" }}>
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <p><b>(६९९/७५३)</b></p>
                            <p style={{ color: "#AFB1B2" }}>स्थानीय</p>
                            <p>FRA</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="d-flex border">
                        <div className="p-3" style={{ height: "150px", width: "150px" }}>
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <p><b>(६९९/७५३)</b></p>
                            <p style={{ color: "#AFB1B2" }}>स्थानीय</p>
                            <p><b>GESI</b></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>            <div className="d-flex border">
                    <div className="p-3" style={{ height: "150px", width: "150px" }}>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <p><b>(६९९/७५३)</b></p>
                        <p style={{ color: "#AFB1B2" }}>स्थानीय</p>
                        <p><b>REVIB</b></p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="d-flex border">
                        <div className="p-3" style={{ height: "150px", width: "150px" }}>
                            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <p><b>(६९९/७५३)</b></p>
                            <p style={{ color: "#AFB1B2" }}>स्थानीय</p>
                            <p><b>LEVI</b></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>            <div className="d-flex border">
                    <div className="p-3" style={{ height: "150px", width: "150px" }}>
                        <CircularProgressbar value={percentage} text={`${percentage}%`} />;
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <p><b>(६९९/७५३)</b></p>
                        <p style={{ color: "#AFB1B2" }}>स्थानीय</p>
                        <p><b>GESHI</b></p>
                    </div>
                </div>
                </SwiperSlide>

            </Swiper>



        </div>
    );
}
export default Percentage;
