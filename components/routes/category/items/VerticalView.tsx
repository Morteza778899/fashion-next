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

const VerticalView: FC<Iprops> = ({ item }) => {
  return (
    <Grid item xs={4}>
      <Box
        className="animate__animated animate__fadeIn"
        sx={{
          m: 1,
          my: 2,
          ":hover": {
            "& .move": {
              transform: "translateY(-45px)",
            },
            "& .hoverIcon": {
              transform: "translateX(-50px)",
            },
            "& .hoverImages": {
              transform: "translateX(50px)",
            },
          },
        }}
      >
        <Stack direction="column" alignItems="center" gap={1}>
          <ImageContainer item={item} status="vertical" />
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
          <Typography variant="h6">{item.title}</Typography>
          <Box
            sx={{
              height: 40,
              overflow: "hidden",
            }}
          >
            <Stack
              direction="column"
              alignItems="center"
              className="move"
              sx={{
                "& p": { height: 37, direction: "ltr", mb: 1 },
                "& .MuiButton-root": {
                  height: 37,
                },
                transition: ".2s all",
              }}
            >
              <Typography variant="body1">
                {item.price}
                <TomanIcon sx={{ mb: -1, ml: 0.8 }} />
              </Typography>
              <Button variant="contained">افزودن به سبد</Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Grid>
  );
};
export default VerticalView;
