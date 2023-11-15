
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Card from '@/components/modules/card/Card';
const WeaklyCityDatas = (props: any) => {

    return (
        <div className='flex relative z-30 mt-28'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                rewind={true}
                breakpoints={{
                    320:{
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper w-full h-full !pb-20"
            >
                {props.list.map((data: any) => ( 
                    <SwiperSlide className='flex justify-center'>
                     <Card city={props.city.name} weatherData={...data}/>
                    </SwiperSlide>
                ))}

            </Swiper>



        </div>
    )
}

export default WeaklyCityDatas
