// import SectionTitle from "../../../components/SectionTitle";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import './testimonialStyle.css';
// import { Pagination } from 'swiper/modules';

// /* user images */
// import user1 from "../../../assets/user/user1.jpeg"
// import user2 from "../../../assets/user/user2.jpeg"
// import user3 from "../../../assets/user/user3.jpeg"
// import user4 from "../../../assets/user/user4.jpeg"
// import user5 from "../../../assets/user/user5.jpeg"
// const Testimonial = () => {
//     return (
//         <div className="md:my-10 my-5 ">
//             <SectionTitle color="text-slate-800" title="Our Testimonial" />
//             <div className="my-8 ">
//                 <Swiper
//                     slidesPerView={4}
//                     spaceBetween={30}
//                     pagination={{
//                         clickable: true,
//                     }}
//                     modules={[Pagination]}
//                     className="mySwiper "
//                 >
//                     <SwiperSlide className="md:w-auto w-full">
//                         <div className="space-y-2 mx-3">
//                             <div className="w-20 h-20 rounded-full mx-auto">
//                                 <img src={user1}
//                                     loading='lazy'
//                                     alt="user"
//                                     className="rounded-full object-cover border-2 border-slate-500" />
//                             </div>
//                             <div className="rating">
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
//                             </div>
//                             <h2 className="md:text-2xl font-semibold text-slate-900">Wenderfull</h2>
//                             <p>"I bought these for my Nana’s birthday she said they were amazingly beautiful!"
//                             </p>
//                             <h4 className="text-xl font-semibold text-slate-950">-Pet Commings</h4>
//                         </div>
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <div className="space-y-2 mx-3">
//                             <div className="w-20 h-20 rounded-full mx-auto">
//                                 <img src={user2}
//                                     loading='lazy'
//                                     alt="user"
//                                     className="rounded-full object-cover border-2 border-slate-500" />
//                             </div>
//                             <div className="rating">
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
//                             </div>
//                             <h2 className="md:text-2xl font-semibold text-slate-900">Best Flower</h2>
//                             <p>"I bought these for my Nana’s birthday she said they were amazingly beautiful!"
//                             </p>
//                             <h4 className="text-xl font-semibold text-slate-950">-Lena Guwe</h4>
//                         </div>
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <div className="space-y-2 mx-3">
//                             <div className="w-20 h-20 rounded-full mx-auto">
//                                 <img src={user3}
//                                     loading='lazy'
//                                     alt="user"
//                                     className="rounded-full object-cover border-2 border-slate-500" />
//                             </div>
//                             <div className="rating">
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
//                             </div>
//                             <h2 className="md:text-2xl font-semibold text-slate-900">Beautifull!</h2>
//                             <p>"I bought these for my Nana’s birthday she said they were amazingly beautiful!"
//                             </p>
//                             <h4 className="text-xl font-semibold text-slate-950">-Stivan Smit</h4>
//                         </div>
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <div className="space-y-2 mx-3">
//                             <div className="w-20 h-20 rounded-full mx-auto">
//                                 <img src={user4}
//                                     loading='lazy'
//                                     alt="user"
//                                     className="rounded-full object-cover border-2 border-slate-500" />
//                             </div>
//                             <div className="rating">
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
//                             </div>
//                             <h2 className="md:text-2xl font-semibold text-slate-900">Very Happly!</h2>
//                             <p>"I bought these for my Nana’s birthday she said they were amazingly beautiful!"
//                             </p>
//                             <h4 className="text-xl font-semibold text-slate-950">-Selina Gumas</h4>
//                         </div>
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <div className="space-y-2 mx-3">
//                             <div className="w-20 h-20 rounded-full mx-auto">
//                                 <img src={user5}
//                                     loading='lazy'
//                                     alt="user"
//                                     className="rounded-full object-cover border-2 border-slate-500" />
//                             </div>
//                             <div className="rating">
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
//                             </div>
//                             <h2 className="md:text-2xl font-semibold text-slate-900">Wenderfull</h2>
//                             <p>"I bought these for my Nana’s birthday she said they were amazingly beautiful!"
//                             </p>
//                             <h4 className="text-xl font-semibold text-slate-950">-Sen Watson</h4>
//                         </div>
//                     </SwiperSlide>

//                     <SwiperSlide>
//                         <div className="space-y-2 mx-3">
//                             <div className="w-20 h-20 rounded-full mx-auto">
//                                 <img src={user1}
//                                     loading='lazy'
//                                     alt="user"
//                                     className="rounded-full object-cover border-2 border-slate-500" />
//                             </div>
//                             <div className="rating">
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" />
//                                 <input type="" name="rating-4" className="mask mask-star-2 bg-green-500" checked />
//                             </div>
//                             <h2 className="md:text-2xl font-semibold text-slate-900">Wenderfull</h2>
//                             <p>"I bought these for my Nana’s birthday she said they were amazingly beautiful!"
//                             </p>
//                             <h4 className="text-xl font-semibold text-slate-950">-Sam Current</h4>
//                         </div>
//                     </SwiperSlide>

//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default Testimonial;

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './Testimonial.css'
import { FreeMode, Pagination } from 'swiper/modules'
import { useEffect, useState } from 'react'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import SectionTitle from '../../../components/SectionTitle'

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://e-exam-pro-server.vercel.app/testimonials')
                const data = await response.json()
                setTestimonials(data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])
    return (
        <div className='p-5 my-16 -z-1'>
            <div className='pb-12'>
                <SectionTitle color="text-slate-800" title="Our Testimonial " textSize="text-3xl" />
            </div>
            <Swiper
                freeMode={true}
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    540: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50
                    },
                    1270: {
                        slidesPerView: 4,
                        spaceBetween: 50
                    }
                }}
                modules={[FreeMode, Pagination]}
                className='mySwiper'
            >
                {
                    testimonials?.map((testimonial, index) => <SwiperSlide key={index}>

                        <div className="shadow-xl border card w-96 -z-10 h-80 mb-7">
                            <figure className="pt-5 pb-2">
                                <img className='mx-auto -z-10' style={{ height: '100px', width: '100px', objectFit: 'cover', borderRadius: '50%' }} src={testimonial.image} />
                            </figure>
                            <div className='items-center px-10 text-center -z-10'>
                                <p className='mb-2 text-xl'> {testimonial.student_name}</p>
                                <p className='text-sm'> {testimonial.feedback_message}</p>
                                <div className='flex justify-center mb-5 -z-10'>
                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        value={testimonial.rating}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    )}
            </Swiper>
        </div>
    )
}

export default Testimonial
