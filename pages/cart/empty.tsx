import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import EmptyAnime from "../../components/animation/components/EmptyAnime";
import BasicBreadcrumbs from "../../components/layout/BasicBreadcrumbs";
import Main from "../../components/routes/cart/cartpage/main/Main";
import Top from "../../components/routes/cart/cartpage/main/Top";
import SideDetails from "../../components/routes/cart/cartpage/side/SideDetails";
import { man, woman } from "../../public/info/collectionData";
const array = [woman[0], man[0], woman[1]];

const CartEmptyPage = () => {
  return (
    <>
    <BasicBreadcrumbs routerName="/سبدخرید/سبد خالی"/>
    <Box sx={{ maxWidth: 1200, mx: "auto", my: 6 }}>
      <Typography variant="h4" textAlign="center" sx={{ my: 5 }}>
        سبد خرید
      </Typography>
      <Grid container direction="row-reverse">
        <Grid item xs={3}>
          <SideDetails empty={true}/>
        </Grid>
        <Grid item xs={9} sx={{ px: 3 }}>
          <Top />
          <Stack direction="column" alignItems='center' sx={{ my: 5 }}>
            <EmptyAnime />
            <Typography variant='h6'>سبد خرید شما خالی است!</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};
export default CartEmptyPage;
