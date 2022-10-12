import { Box, Grid, Stack, Typography } from "@mui/material";
import Head from "next/head";
import EmptyAnime from "../../components/animation/components/EmptyAnime";
import BasicBreadcrumbs from "../../components/layout/BasicBreadcrumbs";
import Top from "../../components/routes/cart/cartpage/main/Top";
import SideDetails from "../../components/routes/cart/cartpage/side/SideDetails";
import { man, woman } from "../../public/info/collectionData";
const array = [woman[0], man[0], woman[1]];

const CartEmptyPage = () => {
  return (
    <>
      <Head>
        <title>سبد خرید خالی</title>
      </Head>
      <BasicBreadcrumbs routerName="/سبدخرید/سبد خالی" />
      <Box sx={{ maxWidth: 1200, mx: "auto", my: 6, px: { xs: 1, sm: 2, md: 3, lg: 4 } }}>
        <Typography variant="h4" textAlign="center" sx={{ my: 5 }}>
          سبد خرید
        </Typography>
        <Grid container>
          <Grid item xs={12} md={8.5} lg={9} sx={{ px: 3 }}>
            <Top />
            <Stack direction="column" alignItems='center' sx={{ my: 5 }}>
              <EmptyAnime />
              <Typography variant='h6'>سبد خرید شما خالی است!</Typography>
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
export default CartEmptyPage;
