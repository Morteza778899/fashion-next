import { Box, IconButton, Link, Stack, Typography, useMediaQuery } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React, { FC, useState } from "react";
import QuickView from "./quickView/QuickView";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

interface Iprops {
  item: {
    title: string;
    price: string;
    images: StaticImageData[];
    rating: number;
  };
  status: string;
}

const ImageContainer: FC<Iprops> = ({ item, status }) => {
  const mdWidth = useMediaQuery('(min-width:900px)')
  const [hover, setHover] = useState(false);
  const [image, setImage] = useState(item.images[0]);
  const [open, setOpen] = useState(false);
  const openHandler = (x: boolean) => {
    setOpen(x);
  };
  return (
    <Box
      className='image-container'
      sx={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Link href="#">
        <Box
          sx={{
            width: 1,
            "& img": {
              transition: ".6s all",
            },
            "& img:hover": {
              transform: "scale(1.08)",
            },
          }}
        >
          <Image src={image} alt='' placeholder="blur"/>
        </Box>
      </Link>
      <Stack
        direction="column"
        className="hoverIcon"
        alignItems="flex-end"
        gap={1}
        sx={{
          position: "absolute",
          top: 5,
          right: -42,
          zIndex: 10,
          transition: ".2s all",
          "& .MuiIconButton-root": {
            boxShadow: "0 4px 4px rgb(0 0 0 / 5%)",
            p: 0.5,
            bgcolor: "white !important",
            ":hover": {
              borderRadius: "20px",
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
        <IconButton color="default" sx={{ width: "fit-content" }}>
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        {mdWidth && (
          <IconButton
            color="default"
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => openHandler(true)}
          >
            {hover ? (
              <Typography variant="subtitle2" sx={{ px: 1 }}>
                ???????????? ????????
              </Typography>
            ) : null}
            <VisibilityIcon />
          </IconButton>
        )}
      </Stack>
      <Stack
        className="hoverImages"
        gap={1}
        justifyContent="center"
        sx={{
          position: `${status == "vertical" ? "absolute" : "unset"}`,
          flexDirection: `${status == "horizontal" ? "row" : "column"}`,
          m: status == "horizontal" ? 1 : 0,
          bottom: 15,
          left: -42,
          zIndex: 10,
          transition: ".2s all",
        }}
      >
        {item.images.map((image, index) => (
          <Box
            key={index}
            sx={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              cursor: "pointer",
              overflow: "hidden",
              ":hover": {
                border: "1px solid black",
              },
            }}
            onMouseOver={() => setImage(image)}
          >
            <Image src={image} alt='' />
          </Box>
        ))}
      </Stack>
      <QuickView open={open} openHandler={openHandler} />
    </Box>
  );
};
export default ImageContainer;
