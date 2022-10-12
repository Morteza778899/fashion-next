import { Box, Button, Grid, Rating, Stack, Typography, useMediaQuery } from "@mui/material";
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
  const mdWidth = useMediaQuery('(min-width:900px)')
  return (
    <Grid item xs={12} sm={6} md={4} >
      <Box
        className="animate__animated animate__fadeIn"
        sx={{
          m: 1,
          my: 2,
          ":hover": {
            "& .move": {
              transform: `${mdWidth ? 'translateY(-45px)' : 'unset'}`,
            },
            "& .hoverIcon": {
              transform: 'translateX(-50px)',
            },
            "& .hoverImages": {
              transform: 'translateX(50px)',
            },
          },
          "& .hoverIcon": {
            transform: `${!mdWidth ? 'translateX(-50px)' : 'unset'}`,
          },
          "& .hoverImages": {
            transform: `${!mdWidth ? 'translateX(50px)' : 'unset'}`,
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
              height: { xs: 80, md: 40 },
              overflow: "hidden",
            }}
          >
            <Stack
              direction="column"
              alignItems="center"
              className="move"
              sx={{
                "& p": { height: { xs: 22, md: 37 }, direction: "ltr", mb: 1 },
                "& .MuiButton-root": {
                  height: 37,
                },
                transition: ".2s all",
              }}
            >
              <Typography variant="body1">
                {item.price}
                <TomanIcon sx={{ mb: -1.2, ml: 0.8 }} />
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
