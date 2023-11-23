import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css'

/* slider images */
import slider1 from "../.../../../../assets/banner/slider1.webp"
import slider2 from "../.../../../../assets/banner/slider2.webp"
import slider3 from "../.../../../../assets/banner/slider33.webp"
import slider4 from "../.../../../../assets/banner/slider4.webp"
import slider5 from "../.../../../../assets/banner/slider55.webp"
import slider6 from "../.../../../../assets/banner/slider66.webp"

const Slider = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='w-full md:h-[320px] h-44'>
                        <img src={slider1} alt="" className='object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full  md:h-[320px] h-44'>
                        <img src={slider2} alt="" className='object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full  md:h-[320px] h-44'>
                        <img src={slider3} alt="" className='object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full  md:h-[320px] h-44'>
                        <img src={slider4} alt="" className='object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full  md:h-[320px] h-44'>
                        <img src={slider5} alt="" className='object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full  md:h-[320px] h-44'>
                        <img src={slider6} alt="" className='object-cover' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;