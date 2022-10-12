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
      <Grid item xs={4} sm={2.5}>
        <Box sx={{ p: { xs: 0, sm: 1 } }}>
          <Image src={item.images[0]} alt='' />
        </Box>
      </Grid>
      <Grid container spacing={{ xs: 1, sm: 0 }} xs={8} sm={9.5} direction='row-reverse'>
        <Grid item xs={12} sm={4}>
          <Typography textAlign={'right'} p={{xs:1,sm:2}} px={{xs:2}}>{item.title}</Typography>
        </Grid>
        <Grid item xs={12} sm={3.5}>
          <Stack sx={{ justifyContent: { xs: 'flex-end', sm: 'center' }, px: 2 }}>
            <TomanIcon fontSize="large" sx={{ mt: 0.5, mr: -1 }} />
            <Typography variant="h6" sx={{ direction: "ltr" }}>
              {`${Number(item.price.split("'")[0]) * count}'000`}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={11} sm={3.5} >
          <Counter count={count} setCount={setCount} />
        </Grid>
        <Grid item xs={1}>
          <IconButton sx={{ mt: { xs: -11, sm: 0 } }}>
            <DeleteForeverIcon color="secondary" />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Main;
