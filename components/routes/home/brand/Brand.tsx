import { Box, Link, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import image1 from "../../../../public/image/brand-fashion-01.webp";
import image2 from "../../../../public/image/brand-fashion-02.webp";
import image3 from "../../../../public/image/brand-fashion-03.webp";
import image4 from "../../../../public/image/brand-fashion-04.webp";
import image5 from "../../../../public/image/brand-fashion-05.webp";
import image6 from "../../../../public/image/brand-fashion-06.webp";
const images = [image1, image2, image3, image4, image5, image6];

const Brand = () => {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        "& img": {
          maxWidth: 200,
          px: 2,
          transition: ".3s all",
          ":hover": {
            filter: "grayscale(0%) !important",
            opacity: "1 !important",
          },
        },
        "& .hover-container": {
          ":hover": {
            "& img": {
              filter: "grayscale(100%)",
              opacity: 0.5,
            },
          },
        },
      }}
    >
      <Stack sx={{ width: 1 }} className="hover-container">
        {images.map((image, index) => (
          <Link href="#" key={index}>
              <Image src={image}/>
          </Link>
        ))}
      </Stack>
    </Box>
  );
};
export default Brand;
