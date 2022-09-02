import { Box, IconButton, Link, Stack, Typography } from "@mui/material";
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
}

const ImageContainer: FC<Iprops> = ({ item }) => {
  const [hover, setHover] = useState(false);
  const [image, setImage] = useState(item.images[0]);
  const [open, setOpen] = useState(false);
  const openHandler = (x: boolean) => {
    setOpen(x);
  };
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Link href="#">
        <Box
          sx={{
            width: 270,
            height: 345,
            transition: ".6s all",
            ":hover": {
              transform: "scale(1.08)",
            },
          }}
        >
          <Image src={image} />
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
        <IconButton
          color="default"
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={() => openHandler(true)}
        >
          {hover ? (
            <Typography variant="subtitle2" sx={{ px: 1 }}>
              تماشای سریع
            </Typography>
          ) : null}
          <VisibilityIcon />
        </IconButton>
      </Stack>
      <Stack
        className="hoverImages"
        direction="column"
        gap={0.5}
        sx={{
          position: "absolute",
          bottom: 5,
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
            <Image src={image} />
          </Box>
        ))}
      </Stack>
      <QuickView open={open} openHandler={openHandler} />
    </Box>
  );
};
export default ImageContainer;
