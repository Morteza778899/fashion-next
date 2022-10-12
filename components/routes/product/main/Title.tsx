import { Rating, Stack, Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import { FC } from "react";

interface Iprops {
  singleProduct: {
    title: string,
    gender: string,
    price: string,
    images: string[],
    rating: number,
  }
}

const Title: FC<Iprops> = ({ singleProduct }) => {
  return (
    <>
      <Stack
        direction="row-reverse"
        gap={1}
        alignItems="center"
        sx={{
          mx: { xs: 2, sm: 4 },
          "& p": {
            color: "gray",
            cursor: "pointer",
            ":hover": {
              color: "black",
              textDecoration: "underline",
            },
          },
        }}
      >
        <Rating
          name="half-rating"
          readOnly
          defaultValue={singleProduct.rating}
          precision={0.5}
          sx={{
            "& label": {
              display: "unset",
            },
          }}
        />
        <Typography variant="body2">( 17دیدگاه )</Typography>
      </Stack>
      <Typography variant="h4" sx={{ mx: { xs: 2, sm: 4 } }}>{singleProduct.title}</Typography>
    </>
  );
};
export default Title;
