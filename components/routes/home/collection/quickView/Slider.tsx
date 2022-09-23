import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, IconButton } from "@mui/material";
import { DownIcon } from "../../../../icon/myIcons";
import { FC, useState } from "react";
import Image, { StaticImageData } from "next/image";

interface Iprops {
  allImage: StaticImageData[];
  slidesPerView: number;
}

const Slider: FC<Iprops> = ({ allImage, slidesPerView }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  //   const [index, setIndex] = useState();
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={slidesPerView}
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={{
          nextEl: "#swiper-forward",
          prevEl: "#swiper-back",
        }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {allImage.map((imgae,index) => (
          <SwiperSlide key={index}>
            {slidesPerView === 1 && (
              <>
                <IconButton
                  sx={{
                    right: 10,
                    transform: "rotate(-90deg)",
                  }}
                  id="swiper-forward"
                >
                  <DownIcon fontSize="large" />
                </IconButton>
                <IconButton
                  sx={{
                    transform: "rotate(90deg)",
                    left: 10,
                  }}
                  id="swiper-back"
                >
                  <DownIcon fontSize="large" />
                </IconButton>
              </>
            )}
            <Box sx={{ width: 1 }}>
              <Image src={imgae} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={3}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        {allImage.map((imgae,index) => (
          // style for active thumb slide there is globals.css
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: 1,
                my: 2,
                cursor: "pointer",
                ":hover": {
                  opacity: 0.8,
                },
                transition: ".2s all",
              }}
            >
              <Image src={imgae} />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Slider;
