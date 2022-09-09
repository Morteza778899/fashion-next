import { Box, Button, Grid, Rating, Stack, Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import React, { FC } from "react";
import { TomanIcon } from "../../../icon/myIcons";
import ImageContainer from "../../home/collection/ImageContainer";

interface Iprops {
  item: {
    title: string;
    price: string;
    images: StaticImageData[];
    rating: number;
  };
}

const WindowView: FC<Iprops> = ({ item }) => {
  return (
    <Grid item xs={6}>
      <Box
        className="animate__animated animate__fadeIn"
        sx={{
          m: 1,
          my: 2,
          "& .image-container": {
            ":hover": {
              "& .hoverIcon": {
                transform: "translateX(-50px)",
              },
              "& .hoverImages": {
                transform: "translateX(50px)",
              },
            },
          },
        }}
      >
        <Grid container direction="row-reverse">
          <Grid item xs={5}>
            <ImageContainer item={item} status="vertical" />
          </Grid>
          <Grid item xs>
            <Stack
              direction="column"
              alignItems="flex-end"
              justifyContent="center"
              gap={0.5}
              sx={{ height: 1, px: 3 }}
            >
              <Rating
                name="half-rating"
                readOnly
                defaultValue={item.rating}
                precision={0.5}
                sx={{
                  "& label": {
                    display: "unset",
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{ color: "gray", fontSize: "0.8rem" }}
              >
                فروشنده کالا
              </Typography>
              <Typography variant="h6">{item.title}</Typography>
              <Stack sx={{ my: 1.5 }}>
                <Typography variant="body1" sx={{ direction: "ltr" }}>
                  {item.price}
                </Typography>
                <TomanIcon sx={{ mt: 0.5, ml: 0.8 }} />
              </Stack>
              <Button variant="contained">افزودن به سبد</Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};
export default WindowView;
