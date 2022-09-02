import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import image from "../../../../public/image/banner-fashion2-full.webp";

const Banner = () => {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto" }}>
      <Box
        sx={{
          position: "relative",
          cursor: "pointer",
          ":hover": {
            "& img": {
              transform: "scale(1.1)",
            },
          },
          "& img": {
            transition: "1s all",
          },
        }}
      >
        <Image src={image} alt="" />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ position: "absolute", top: 0, width: 1, height: 1 }}
        >
          <Box></Box>
          <Stack direction="column" alignItems="center" gap={2} p={10}>
            <Typography variant="h4" fontWeight={900}>
              آرامش خاطر در خرید را با تجربه کنید
            </Typography>
            <Typography variant="h6">قاب فروشگاهی پیشرفته</Typography>
            <Button variant="contained" size="large">
              خرید کن
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
export default Banner;
