import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonialStyle.css';
import { Pagination } from 'swiper/modules';

/* user images */
import user1 from "../../../assets/user/user1.jpeg"
import user2 from "../../../assets/user/user2.jpeg"
import user3 from "../../../assets/user/user3.jpeg"
import user4 from "../../../assets/user/user4.jpeg"
import user5 from "../../../assets/user/user5.jpeg"
const Testimonial = () => {
    return (
        <div className="md:my-10 my-5">
            <SectionTitle color="text-slate-800" title="Our Testimonial" />
            <div className="my-8">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="space-y-2 mx-3">
                            <div className="w-20 h-20 rounded-full mx-auto">
                                <img src={user1}
                                    alt=""
                                    className="rounded-full object-cover border-2 border-slate-500" />
                            </div>
                            <div className="rating">
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            </div>
                            <h2 className="md:text-2xl font-semibold text-slate-900">Wenderfull</h2>
                            <p>"I bought these for my Nana’s birthday she said they were amazingly beautiful!"
                            </p>
                            <h4 className="text-xl font-semibold text-slate-950">-Pet Commings</h4>
                        </div>
                    </SwiperSlide>
                   
                    <SwiperSlide>
                        <div className="space-y-2 mx-3">
                            <div className="w-20 h-20 rounded-full mx-auto">
                                <img src={user2}
                                    alt=""
                                    className="rounded-full object-cover border-2 border-slate-500" />
                            </div>
                            <div className="rating">
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            </div>
                            <h2 className="md:text-2xl font-semibold text-slate-900">Best Flower</h2>
                            <p>"I bought these for my Nana’s birthday she said they were amazingly beautiful!"
                            </p>
                            <h4 className="text-xl font-semibold text-slate-950">-Lena Guwe</h4>
                        </div>
                    </SwiperSlide>
                   
                    <SwiperSlide>
                        <div className="space-y-2 mx-3">
                            <div className="w-20 h-20 rounded-full mx-auto">
                                <img src={user3}
                                    alt=""
                                    className="rounded-full object-cover border-2 border-slate-500" />
                            </div>
                            <div className="rating">
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            </div>
                            <h2 className="md:text-2xl font-semibold text-slate-900">Beautifull!</h2>
                            <p>"I bought these for my Nana’s birthday she said they were amazingly beautiful!"
                            </p>
                            <h4 className="text-xl font-semibold text-slate-950">-Stivan Smit</h4>
                        </div>
                    </SwiperSlide>
                   
                    <SwiperSlide>
                        <div className="space-y-2 mx-3">
                            <div className="w-20 h-20 rounded-full mx-auto">
                                <img src={user4}
                                    alt=""
                                    className="rounded-full object-cover border-2 border-slate-500" />
                            </div>
                            <div className="rating">
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            </div>
                            <h2 className="md:text-2xl font-semibold text-slate-900">Very Happly!</h2>
                            <p>"I bought these for my Nana’s birthday she said they were amazingly beautiful!"
                            </p>
                            <h4 className="text-xl font-semibold text-slate-950">-Selina Gumas</h4>
                        </div>
                    </SwiperSlide>
                   
                    <SwiperSlide>
                        <div className="space-y-2 mx-3">
                            <div className="w-20 h-20 rounded-full mx-auto">
                                <img src={user5}
                                    alt=""
                                    className="rounded-full object-cover border-2 border-slate-500" />
                            </div>
                            <div className="rating">
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            </div>
                            <h2 className="md:text-2xl font-semibold text-slate-900">Wenderfull</h2>
                            <p>"I bought these for my Nana’s birthday she said they were amazingly beautiful!"
                            </p>
                            <h4 className="text-xl font-semibold text-slate-950">-Sen Watson</h4>
                        </div>
                    </SwiperSlide>
                   
                    <SwiperSlide>
                        <div className="space-y-2 mx-3">
                            <div className="w-20 h-20 rounded-full mx-auto">
                                <img src={user1}
                                    alt=""
                                    className="rounded-full object-cover border-2 border-slate-500" />
                            </div>
                            <div className="rating">
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
                            </div>
                            <h2 className="md:text-2xl font-semibold text-slate-900">Wenderfull</h2>
                            <p>"I bought these for my Nana’s birthday she said they were amazingly beautiful!"
                            </p>
                            <h4 className="text-xl font-semibold text-slate-950">-Sam Current</h4>
                        </div>
                    </SwiperSlide>
                   
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;