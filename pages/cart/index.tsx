import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import Head from "next/head";
import BasicBreadcrumbs from "../../components/layout/BasicBreadcrumbs";
import Main from "../../components/routes/cart/cartpage/main/Main";
import Top from "../../components/routes/cart/cartpage/main/Top";
import SideDetails from "../../components/routes/cart/cartpage/side/SideDetails";
import { man, woman } from "../../public/info/collectionData";
const array = [woman[0], man[0], woman[1]];

const CartPage = () => {
  return (
    <>
      <Head>
        <title>سبد خرید</title>
      </Head>
      <BasicBreadcrumbs routerName="/سبدخرید" />
      <Box sx={{ maxWidth: 1200, mx: "auto", my: 6, px: { xs: 1, sm: 2, md: 3, lg: 4 } }}>
        <Typography variant="h4" textAlign="center" sx={{ my: 5 }}>
          سبد خرید
        </Typography>
        <Grid container>
          <Grid item xs={12} md={8.5} lg={9} sx={{ px: 3 }}>
            <Top />
            {array.map((item, index) => (
              <Main item={item} key={index} />
            ))}
            <Stack justifyContent="center" py={4}>
              <Button variant="contained" color="info">
                خالی کردن سبد خرید
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={12} md={3.5} lg={3}>
            <SideDetails empty={false} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default CartPage;
