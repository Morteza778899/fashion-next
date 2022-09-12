import { Rating, Stack, Typography } from "@mui/material";
import { StaticImageData } from "next/image";
import { FC } from "react";

interface Iprops {
  item: {
    title: string;
    price: string;
    images: StaticImageData[];
    rating: number;
  };
}

const Title: FC<Iprops> = ({ item }) => {
  return (
    <>
      <Stack
        direction="row-reverse"
        gap={1}
        alignItems="center"
        sx={{
          mx:2,
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
          defaultValue={item.rating}
          precision={0.5}
          sx={{
            "& label": {
              display: "unset",
            },
          }}
        />
        <Typography variant="body2">( 17دیدگاه )</Typography>
      </Stack>
      <Typography variant="h4" mx={2}>{item.title}</Typography>
    </>
  );
};
export default Title;
