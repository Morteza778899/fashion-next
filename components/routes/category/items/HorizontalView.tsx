import {
  Box,
  Button,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React, { FC, useState } from "react";
import { TomanIcon } from "../../../icon/myIcons";
import ImageContainer from "../../home/collection/ImageContainer";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import QuickView from "../../home/collection/quickView/QuickView";

interface Iprops {
  item: {
    title: string;
    price: string;
    images: StaticImageData[];
    rating: number;
  };
}

const HorizontalView: FC<Iprops> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const openHandler = (x: boolean) => {
    setOpen(x);
  };
  return (
    <Grid item xs={12}>
      <Grid
        container
        direction="row-reverse"
        className="animate__animated animate__fadeIn"
      >
        <Grid item sx={{ width: 200 }}>
          <ImageContainer item={item} status="horizontal" />
        </Grid>
        <Grid item xs>
          <Stack alignItems="center" sx={{ height: 1 }}>
            <Stack direction="column">
              <Stack>
                <Typography variant="h6" sx={{ direction: "ltr" }}>
                  {item.price}
                </Typography>
                <TomanIcon fontSize="large" sx={{ mt: 0.5, ml: 0.8 }} />
              </Stack>
              <Stack
                className="hoverIcon"
                gap={3}
                sx={{
                  "& .MuiIconButton-root": {
                    boxShadow: "0 0px 4px rgb(0 0 0 / 20%)",
                    p: 0.5,
                    bgcolor: "white !important",
                    ":hover": {
                      "& svg": {
                        transform: "rotateY(180deg)",
                      },
                    },
                    "& svg": {
                      transition: ".2s all",
                    },
                  },
                }}
              >
                <IconButton color="default">
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
                <IconButton color="default" onClick={() => openHandler(true)}>
                  <VisibilityIcon />
                </IconButton>
                <QuickView open={open} openHandler={openHandler} />
              </Stack>
            </Stack>
            <Stack
              direction="column"
              alignItems="flex-end"
              gap={0.5}
              sx={{
                px: 4,
              }}
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
                فروشنده یا برند کالا
              </Typography>
              <Typography variant="h6">{item.title}</Typography>
              <Typography
                variant="body1"
                sx={{
                  my: 2,
                  // limit line
                  display: "-webkit-box",
                  lineClamp: "4",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  lineHeight: "1.5em",
                  maxHeight: "6em",
                  WebkitLineClamp: "4",
                  "-webkit-box-orient": "vertical",
                }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
              </Typography>
              <Button variant="contained" sx={{ width: "fit-content" }}>
                افزودن به سبد خرید
              </Button>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default HorizontalView;
