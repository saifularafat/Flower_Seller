import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './slider.css'
import useSliderGet from '../../../api/useSliderGet';


const Slider = () => {
    const [sliders] = useSliderGet();
    const sliderOne = sliders.find(slider => slider.category === "sliderOne")
    const sliderTwo = sliders.find(slider => slider.category === "sliderTwo")
    const sliderThree = sliders.find(slider => slider.category === "sliderThree")
    const sliderFour = sliders.find(slider => slider.category === "sliderFour")
    const sliderFive = sliders.find(slider => slider.category === "sliderFive")
    const sliderSix = sliders.find(slider => slider.category === "sliderSix")

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
                        <img src={sliderOne?.sliderOne} loading='lazy' alt="" className='object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full  md:h-[320px] h-44'>
                        <img src={sliderTwo?.sliderTwo} loading='lazy' alt="" className='object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full  md:h-[320px] h-44'>
                        <img src={sliderThree?.sliderThree} loading='lazy' alt="" className='object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full  md:h-[320px] h-44'>
                        <img src={sliderFour?.sliderFour} loading='lazy' alt="" className='object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full  md:h-[320px] h-44'>
                        <img src={sliderFive?.sliderFive} loading='lazy' alt="" className='object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='w-full  md:h-[320px] h-44'>
                        <img src={sliderSix?.sliderSix} loading='lazy' alt="" className='object-cover' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;