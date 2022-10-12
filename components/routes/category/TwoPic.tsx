import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import imgTop from "../../../public/image/banner-category-01.webp";
import imgBottom from "../../../public/image/banner-category-02.webp";

const TowPic = () => {
  return (
    <Box
      sx={{
        mt: 5,
        mb: { xs: 2, sm: 4, md: 6, lg: 8 },
        "& .title-pic": {
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          m: "auto",
          p: 1,
          width: "fit-content",
          height: "fit-content",
          bgcolor: "#ffffffe6",
          "& .MuiTypography-root": {
            textAlign: "center",
            color: "black",
            "&.MuiTypography-subtitle1": {
              color: "#585858",
            },
          },
        },
        "& img": {
          transition: ".5s all",
          "&:hover": {
            transform: "scale(1.1)",
          },
        },
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ p: 2, position: "relative", cursor: "pointer" }}
        >
          <Box sx={{ overflow: "hidden", width: 1, height: 1 }}>
            <Box sx={{ width: 1, height: 1 }}>
              <Image src={imgTop} alt='' />
            </Box>
            <Box className="title-pic">
              <Typography variant="h6" fontWeight={900}>
                عینک
              </Typography>
              <Typography variant="subtitle1" fontSize=".9rem">
                بهترین ظاهر رو بساز
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{ p: 2, position: "relative", cursor: "pointer" }}
        >
          <Box sx={{ overflow: "hidden", width: 1, height: 1 }}>
            <Box sx={{ width: 1, height: 1 }}>
              <Image src={imgBottom} alt='' />
            </Box>
            <Box className="title-pic">
              <Typography variant="h6" fontWeight={900}>
                شلوار
              </Typography>
              <Typography variant="subtitle1" fontSize=".9rem">
                همراه با جدیدترین‌ها باش
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default TowPic;
