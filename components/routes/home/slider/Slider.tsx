import React from "react";
import { useState } from "react";
import image2 from "../../../../public/image/two.webp";
import image1 from "../../../../public/image/one.jpg";
// Core modules imports are same as usual
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react";
// Styles must use direct files imports
// Swiper style imported in custom app (_app.tsx)
import { Box, IconButton } from "@mui/material";
import { DownIcon } from "../../../icon/myIcons";
import SliderText from "./SliderText";
import Image from "next/image";
const images = [image1, image2];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Box
      sx={{
        "& .swiper-pagination": {
          width: "fit-content !important",
          mx: "auto",
          left: 0,
          right: 0,
          bottom: "30px !important",
          bgcolor: "#cecece8b",
          borderRadius: 5,
          pb: 0.6,
          px: 1,
          "& .swiper-pagination-bullet": {
            width: 8,
            height: 8,
            borderRadius: "50%",
            bgcolor: "black",
            opacity: 1,
            transition: ".2s all",
          },
          "& .swiper-pagination-bullet-active": {
            width: 15,
            height: 15,
            backgroundColor: "unset",
            border: "2px solid #10927c",
            mb: '-3.2px !important',
          },
        },
      }}
    >
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        style={{ width: "100%", minHeight: '250px' }}
        modules={[Pagination, Autoplay, EffectFade, Navigation]}
        navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
        pagination={{ clickable: true }}
        loop
        effect="fade"
        autoplay={{
          delay: 5000,
        }}
        onSlideChange={(Swiper) => setCurrentSlide(Swiper.realIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition:`${index===0?'left':'85%'} top`
            }}>
            <IconButton
              sx={{
                position: "absolute",
                transform: "rotate(-90deg)",
                zIndex: 20,
                right: 10,
                top: "45%",
                color: "black",
                bgcolor: "#ffffff45",
                ":hover": {
                  bgcolor: "primary.main",
                  color: "white",
                },
                transition: ".3s all",
              }}
              id="swiper-forward"
            >
              <DownIcon fontSize="large" />
            </IconButton>
            <Box
              sx={{
                width: 1,
                height: 1,
                position: "absolute",
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 60%, rgba(255,255,255,1) 100%)",
                overflow: "hidden",
              }}
            ></Box>
            <IconButton
              sx={{
                position: "absolute",
                transform: "rotate(90deg)",
                zIndex: 20,
                left: 10,
                top: "45%",
                color: "black",
                bgcolor: "#ffffff45",
                ":hover": {
                  bgcolor: "primary.main",
                  color: "white",
                },
                transition: ".3s all",
              }}
              id="swiper-back"
            >
              <DownIcon fontSize="large" />
            </IconButton>
            <SliderText currentSlide={currentSlide} />ّ
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default Slider;
