import {
  Button,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { StaticImageData } from "next/image";
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
  const mdWidth = useMediaQuery('(min-width:900px)')
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
        <Grid item sx={{ width: { xs: 150, sm: 200 } }}>
          <ImageContainer item={item} status="horizontal" />
        </Grid>
        <Grid item xs>
          <Grid container direction={'row-reverse'} spacing={1} alignItems="center" py={{ xs: 4, sm: 0 }}>
            <Grid xs={12} md item
              sx={{
                pr: { xs: 2, md: 4 },
              }}
            >
              <Stack
                direction="column"
                alignItems="flex-end"
                gap={{xs:1,sm:.5}}
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
                  ?????????????? ???? ???????? ????????
                </Typography>
                <Typography variant="h6">{item.title}</Typography>
                <Typography
                  variant="body1"
                  sx={{
                    my: 2,
                    // limit line
                    display: { xs: 'none', sm: "-webkit-box" },
                    lineClamp: "4",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    lineHeight: "1.5em",
                    maxHeight: "6em",
                    WebkitLineClamp: "4",
                    "-webkit-box-orient": "vertical",
                  }}
                >
                  ???????? ???????????? ?????? ???????????? ???? ?????????? ?????????? ?????????????? ???? ???????? ?????? ?? ????
                  ?????????????? ???? ???????????? ???????????? ?????? ?????????????? ?? ???????? ???????? ?????????????? ?? ????????
                  ???? ???????? ?? ?????????????????? ???? ???????? ?????? ?? ???????? ?????????? ???????? ???????????????? ????????
                  ???????? ?? ?????????????????? ?????????? ???? ?????? ?????????? ???????????????? ?????????????? ???? ????????
                </Typography>
                <Button variant="contained" size="small" sx={{ width: "fit-content" }}>
                  ???????????? ???? ?????? ????????
                </Button>
              </Stack>
            </Grid>
            <Grid xs={12} md={'auto'} item >
              <Stack sx={{
                flexDirection: { xs: 'row-reverse', md: 'column' },
                justifyContent: 'space-between',
                px: { xs: 0, md: 2 },
                py: 1,
              }}>
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
                      height: 'fit-content',
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
                  {mdWidth && (
                    <>
                      <IconButton color="default" onClick={() => openHandler(true)}>
                        <VisibilityIcon />
                      </IconButton>
                      <QuickView open={open} openHandler={openHandler} />
                    </>
                  )}
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default HorizontalView;
