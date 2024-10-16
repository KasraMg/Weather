import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { List, WeeklyCityData } from "@/Types/city.types";
import Card from "@/components/modules/card/Card";
const Slider = (props: WeeklyCityData) => {
  return (
    <div className="flex relative z-30 xs:!mt-20 mt-28">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        rewind={true}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-[80%] h-full !pb-16 xs:!pb-28"
      >
        {props.list.map((data: List) => (
          <SwiperSlide key={data.dt} className="flex justify-center">
            <Card city={props.city.name} weatherData={data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
