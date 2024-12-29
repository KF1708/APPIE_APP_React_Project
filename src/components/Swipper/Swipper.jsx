import { useRef } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FaStar } from "react-icons/fa";
const Swipper = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="mt-24">
      <div className="p-20 swipper-sectio">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper "
        >
          <SwiperSlide className="swipper-slide place-content-center ">
            <div className=" text-white">
              <img
                src="/images/testimonial-user.png"
                alt="testimonial-user"
                className="mt-10 m-2"
              />
              <h3 className=" font-semibold text-base">Jason Response</h3>
              <p className="font-light text-sm text-slate-400">April 14,2022</p>
              <h1 className=" font-semibold text-xl mb-10">
                Why I Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Error, qui deserunt,
                <br /> assumenda dolorem, ipsam nemo voluptates.{" "}
              </h1>

              <div className="flex text-amber-400  place-content-center mb-14 gap-2">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" text-white">
              <img
                src="/images/testimonial-user.png"
                alt="testimonial-user"
                className="mt-10 m-2"
              />
              <h3 className=" font-semibold text-base">Jason Response</h3>
              <p className="font-light text-sm text-slate-400">April 14,2022</p>
              <h1 className=" font-semibold text-xl mb-10">
                Why I Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Error, qui deserunt,
                <br /> assumenda dolorem, ipsam nemo voluptates.{" "}
              </h1>
              <div className="flex text-amber-400  place-content-center mb-14 gap-2">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" text-white">
              <img
                src="/images/testimonial-user.png"
                alt="testimonial-user"
                className="mt-10 m-2"
              />
              <h3 className=" font-semibold text-base">Jason Response</h3>
              <p className="font-light text-sm text-slate-400">April 14,2022</p>
              <h1 className=" font-semibold text-xl mb-10">
                Why I Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Error, qui deserunt,
                <br /> assumenda dolorem, ipsam nemo voluptates.{" "}
              </h1>
              <div className="flex text-amber-400  place-content-center mb-14 gap-2">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
              </div>
            </div>
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20">
                {" "}
              </circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Swipper;
