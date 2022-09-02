import { Box, Button, Stack, Typography } from "@mui/material";
import React, { FC } from "react";
interface Iprops {
  currentSlide: number;
}
const SliderText: FC<Iprops> = ({ currentSlide }) => {
  return (
    <Stack
      justifyContent={{ xl: "space-around", lg: "space-between" }}
      sx={{
        position: "absolute",
        zIndex: 10,
        top: 0,
        width: 1,
        "& .text-container": {
          width: "fit-content",
          flexDirection: "column",
          alignItems: "center",
          mt: 8,
          mx: { xl: -10, lg: 10 },
        },
        "& h2": {
          textAlign: "center",
          animationDelay: ".3s",
        },
        "& h5": {
          m: 4,
          textAlign: "center",
          animationDelay: ".6s",
        },
      }}
    >
      {currentSlide === 0 ? (
        <>
          <Box></Box>
          <Stack className="text-container">
            <Typography
              variant="h2"
              fontWeight={900}
              className="animate__animated animate__fadeInUp"
            >
              بهترین قیمت های سال
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#474747" }}
              className="animate__animated animate__fadeInUp"
            >
              سایت فروشگاهی مرتضی
            </Typography>
            <Button
              variant="contained"
              size="large"
              className="animate__animated animate__fadeIn animate__delay-1s"
            >
              خرید کن
            </Button>
          </Stack>
        </>
      ) : null}
      {currentSlide === 1 ? (
        <>
          <Stack className="text-container">
            <Typography
              variant="h2"
              fontWeight={900}
              className="animate__animated animate__fadeInUp"
            >
              با خیال راحت خرید کن
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "#474747" }}
              className="animate__animated animate__fadeInUp"
            >
              سایت فروشگاهی مرتضی
            </Typography>
            <Button
              variant="contained"
              size="large"
              className="animate__animated animate__fadeIn animate__delay-1s"
            >
              خرید کن
            </Button>
          </Stack>
          <Box></Box>
        </>
      ) : null}
    </Stack>
  );
};
export default SliderText;
