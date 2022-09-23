import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { TomanIcon } from "../../../icon/myIcons";
import { man, woman } from "../../../../public/info/collectionData";
const array = [woman[0], man[0]];

const CartSummary = () => {
  return (
    <Box>
      <Grid
        container
        sx={{
          textAlign: "center",
          borderTop: "1px solid #f4f4f4",
          borderBottom: "1px solid #f4f4f4",
          py: 1.5,
        }}
        direction="row-reverse"
      >
        <Grid item xs={1}>
          <Typography>عکس</Typography>
        </Grid>
        <Grid item xs={7}>
          <Typography textAlign="right" sx={{ px: 4 }}>
            نام
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>تعداد</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography>قیمت</Typography>
        </Grid>
      </Grid>

      {array.map((item, index) => (
        <Grid
          key={index}
          container
          sx={{
            textAlign: "center",
            borderBottom: "1px solid #f4f4f4",
            py: 3,
          }}
          direction="row-reverse"
          alignItems="center"
        >
          <Grid item xs={1}>
            <Box>
              <Image src={item.images[0]} />
            </Box>
          </Grid>
          <Grid item xs={7}>
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
            <Typography
              sx={{
                p: 1,
                bgcolor: "whitesmoke",
                width: "fit-content",
                mx: "auto",
              }}
            >
              1
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Stack justifyContent="center">
              <TomanIcon fontSize="large" sx={{ mt: 0.5, mr: -1 }} />
              <Typography variant="h6" sx={{ direction: "ltr" }}>
                {item.price}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};
export default CartSummary;
