import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import useIsDesktop, { useEffect, useRef, useState } from "react";

const sponsors = ["target.png", "amazon.png", "meta.png", "target.png", "amazon.png", "meta.png", "google.png"];


// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";

export default function SponsorCarousel() {
  const [windowWidth, setWindowWidth] = useState(400);

  let w = 0;
  useEffect(() => {
    setWindowWidth(window.innerWidth)
    console.log(windowWidth / 300 <= 5 ? windowWidth / 300 : 5);
  }, []);

  return (
    <div className="my-10 w-screen">
      <Swiper
        slidesPerView={windowWidth / 300 <= 5 ? windowWidth / 300 : 5}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        speed={2000}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {sponsors.map((sponsor, key) => {
          return (
            <SwiperSlide
              className=" w-44 sponsor-clip flex justify-center items-center py-5 pr-5 pl-20"
              key={key}
            >
              <Image
                src={`/sponsors/${sponsor}`}
                alt={sponsor}
                height={150}
                width={150}
              ></Image>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
