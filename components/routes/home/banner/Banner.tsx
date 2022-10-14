import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import image from "../../../../public/image/banner-fashion2-full.webp";

const Banner = () => {
  const mdWidth = useMediaQuery('(min-width:900px)')
  const smWidth = useMediaQuery('(min-width:600px)')
  const [hover, setHover] = useState(false)
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto" }}>
      <Box
        sx={{
          mx: 4,
          position: 'relative',
          overflow: 'hidden',
          "& span": {
            width: '120% !important',
            height: '100% !important'
          }
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Box sx={{
          position: 'absolute',
          width: 1,
          height: 1,
          zIndex: -1,
          backgroundImage: `url(${image.src})`,
          backgroundSize: 'cover',
          backgroundPosition: '30% center',
          transform: `${hover && 'scale(1.1)'}`,
          transition: "1s all",
        }}></Box>
        <Stack
          direction="row"
          justifyContent={`${smWidth ? 'flex-end' : 'center'}`}
          alignItems="center"
          sx={{ py: { xs: 12, sm: 6, md: 9, lg: 12 } }}
        >
          <Stack direction="column" alignItems="center" gap={2} sx={{ p: { xs: 2, sm: 4, md: 7, lg: 10 } }}>
            <Typography variant={`${mdWidth ? 'h4' : 'h5'}`} fontWeight={900} sx={{ textShadow: '0px 0px 5px white' }}>
              خرید مطمئن را با تجربه کنید
            </Typography>
            <Typography variant="h6" sx={{ textShadow: '0px 0px 5px white' }}>قاب فروشگاهی پیشرفته</Typography>
            <Button variant="contained" size={`${smWidth ? 'medium' : 'small'}`} >
              خرید کن
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
export default Banner;
