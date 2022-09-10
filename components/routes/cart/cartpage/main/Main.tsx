import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { FC, useState } from "react";
import { TomanIcon } from "../../../../icon/myIcons";
import Counter from "./Counter";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

interface Iprops {
  item: {
    title: string;
    price: string;
    images: StaticImageData[];
    rating: number;
  };
}

const Main: FC<Iprops> = ({ item }) => {
  const [count, setCount] = useState(1);

  return (
    <Grid
      container
      sx={{
        textAlign: "center",
        borderBottom: "1px solid #f4f4f4",
        py: 2,
      }}
      direction="row-reverse"
      alignItems="center"
    >
      <Grid item xs={2}>
        <Box sx={{p:1}}>
          <Image src={item.images[0]} />
        </Box>
      </Grid>
      <Grid item xs={4}>
        <Stack direction="column" px={4} sx={{ textAlign: "right" }}>
          <Stack justifyContent="flex-end">
            <TomanIcon fontSize="large" sx={{ mt: 0.5, mr: -1 }} />
            <Typography variant="h6" sx={{ direction: "ltr" }}>
              {item.price}
            </Typography>
          </Stack>
          <Typography>{item.title}</Typography>
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <Counter count={count} setCount={setCount} />
      </Grid>
      <Grid item xs={2}>
        <Stack justifyContent="center">
          <TomanIcon fontSize="large" sx={{ mt: 0.5, mr: -1 }} />
          <Typography variant="h6" sx={{ direction: "ltr" }}>
            {Number(item.price.split("'")[0]) * count}'000
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={2}>
        <IconButton>
          <DeleteForeverIcon color="secondary" />
        </IconButton>
      </Grid>
    </Grid>
  );
};
export default Main;
