import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { FC } from "react";
interface Iprops {
  currentSlide: number;
}
const SliderText: FC<Iprops> = ({ currentSlide }) => {
  const smWidth = useMediaQuery('(min-width:600px)');
  return (
    <Box
      sx={{
        zIndex: 10,
        width: 1,
        "& .text-container": {
          width: "fit-content",
          flexDirection: "column",
          alignItems: "center",
          my: { xs: 12, md: 16, lg: 18, xl: 20 },
          mx: { sm: 6, md: 10, lg: 20, xl: 30 },
        },
        "& h3": {
          textAlign: "center",
          animationDelay: ".3s",
          textShadow:'0px 0px 5px white'
        },
        "& h6": {
          m: { xs: 2, sm: 4 },
          textAlign: "center",
          animationDelay: ".6s",
          textShadow:'0px 0px 5px white'
        },
      }}
    >
      {currentSlide === 0 ? (
        <Stack justifyContent={`${smWidth ? 'flex-end' : 'center'}`}>
          <Stack className="text-container">
            <Typography
              variant="h3"
              fontWeight={900}
              className="animate__animated animate__fadeInUp"
            >
              بهترین قیمت های سال
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#474747" }}
              className="animate__animated animate__fadeInUp"
            >
              سایت فروشگاهی مرتضی
            </Typography>
            <Button
              variant="contained"
              size={`${smWidth ? 'large' : 'medium'}`}
              className="animate__animated animate__fadeIn animate__delay-1s"
            >
              خرید کن
            </Button>
          </Stack>
        </Stack>
      ) : null}
      {currentSlide === 1 ? (
        <Stack justifyContent={`${smWidth ? 'flex-start' : 'center'}`}>
          <Stack className="text-container">
            <Typography
              variant="h3"
              fontWeight={900}
              className="animate__animated animate__fadeInUp"
            >
              با خیال راحت خرید کن
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#474747" }}
              className="animate__animated animate__fadeInUp"
            >
              سایت فروشگاهی مرتضی
            </Typography>
            <Button
              variant="contained"
              size={`${smWidth ? 'large' : 'medium'}`}
              className="animate__animated animate__fadeIn animate__delay-1s"
            >
              خرید کن
            </Button>
          </Stack>
        </Stack>
      ) : null}
    </Box>
  );
};
export default SliderText;
