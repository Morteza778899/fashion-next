import { Box, Grid, Stack, Typography } from "@mui/material";
import Address from "../../components/routes/cart/checkout/Address";
import Transfer from "../../components/routes/cart/checkout/Transfer";
import Comment from "../../components/routes/cart/checkout/Comment";
import CartSummary from "../../components/routes/cart/checkout/CartSummary";
import Order from "../../components/routes/cart/checkout/Order";
import BasicBreadcrumbs from "../../components/layout/BasicBreadcrumbs";

const CheckoutPage = () => {
  return (
    <>
    <BasicBreadcrumbs routerName="/سبدخرید/پرداخت"/>
    <Box sx={{ maxWidth: 1200, mx: "auto",my:10 }}>
      <Typography variant="h4" sx={{ textAlign: "center", my: 4 }}>
        صفحه خرید
      </Typography>
      <Grid container direction="row-reverse">
        <Grid item xs={6} sx={{ p: 2 }}>
          <Address />
        </Grid>
        <Grid item xs={6} sx={{ p: 2 }}>
          <Stack direction="column" gap={2}>
            <Transfer />
            <Comment />
          </Stack>
        </Grid>
      </Grid>
      <Grid container my={5}>
        <Grid item xs={4}>
            <Order/>
        </Grid>
        <Grid item xs={8}>
          <CartSummary />
        </Grid>
      </Grid>
    </Box>
    </>
  );
};
export default CheckoutPage;
