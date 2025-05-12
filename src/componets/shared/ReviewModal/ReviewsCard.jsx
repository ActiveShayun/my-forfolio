// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import ReactStars from "react-rating-stars-component";
import SectionTitle from '../SectionTitle/SectionTitle';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

const ReviewsCard = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        allReviews()
    }, [])

    console.log(reviews);

    const allReviews = async () => {
        const { data } = await axios.get('http://localhost:5000/reviews')
        setReviews(data)
        console.log(reviews);
    }


    return (
        <div className='mt-14 mb-20'>
            <SectionTitle subheading={'Clients Feedback'} heading={'Testimonial'} />
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
                breakpoints={{
                    // When window width is >= 0px
                    0: {
                        slidesPerView: 1,
                    },
                    // When window width is >= 640px
                    640: {
                        slidesPerView: 2,
                    },
                    // When window width is >= 1024px
                    1024: {
                        slidesPerView: 3,
                    },
                }}
            >
                {
                    reviews?.map(review => <SwiperSlide>
                        <div className="bg-[#E4EAED] h-[310px]
                        shadow-lg rounded-lg p-6 text-center
                         hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
                            <div className='flex items-center justify-between'>
                                <p><FaQuoteLeft className='text-[#BF9023]' /></p>
                                <p> {
                                    review.dateline && !isNaN(new Date(review.dateline))
                                        ? format(new Date(review.dateline), 'MM/dd/yyyy')
                                        : 'Invalid date'}
                                </p>
                            </div>
                            <img
                                className='w-[100px] h-[100px] rounded-full mx-auto'
                                src={review?.photo} alt="review" />
                            <h2 className='text-xl font-semibold mt-2'>
                                {review?.name}</h2>
                            <p>{review?.review}</p>
                            <div className='flex justify-center'>
                                <ReactStars count={review.rating} size={30} activeColor="#FFD700" />
                            </div>
                            <p className='flex justify-end'>
                                <FaQuoteRight className='text-[#BF9023]' /></p>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default ReviewsCard;