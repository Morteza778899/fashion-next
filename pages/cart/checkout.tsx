import { Box, Grid, Stack, Typography } from "@mui/material";
import Address from "../../components/routes/cart/checkout/Address";
import Transfer from "../../components/routes/cart/checkout/Transfer";
import Comment from "../../components/routes/cart/checkout/Comment";
import CartSummary from "../../components/routes/cart/checkout/CartSummary";
import Order from "../../components/routes/cart/checkout/Order";
import BasicBreadcrumbs from "../../components/layout/BasicBreadcrumbs";
import Head from "next/head";

const CheckoutPage = () => {
  return (
    <>
      <Head>
        <title>صفحه پرداخت</title>
      </Head>
      <BasicBreadcrumbs routerName="/سبدخرید/پرداخت" />
      <Box sx={{ maxWidth: 1200, mx: "auto", my: 10 }}>
        <Typography variant="h4" sx={{ textAlign: "center", my: 4 }}>
          صفحه خرید
        </Typography>
        <Grid container direction="row-reverse" sx={{ px: { xs: 1, sm: 2, md: 3, lg: 4 } }}>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <Address />
          </Grid>
          <Grid item xs={12} md={6} sx={{ p: 2 }}>
            <Stack direction="column" gap={2}>
              <Transfer />
              <Comment />
            </Stack>
          </Grid>
        </Grid>
        <Grid container my={5} direction='row-reverse' sx={{ px: { xs: 1, sm: 2, md: 3, lg: 4 } }}>
          <Grid item xs={12} md={8}>
            <CartSummary />
          </Grid>
          <Grid item xs={12} md={4}>
            <Order />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default CheckoutPage;
