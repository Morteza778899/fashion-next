import { Box, Grid, Typography } from "@mui/material";
import Head from "next/head";
import BasicBreadcrumbs from "../../components/layout/BasicBreadcrumbs";
import AsideMenu from "../../components/routes/account/AsideMenu";
import PersonalInfo from "../../components/routes/account/PersonalInfo";
import Collection from "../../components/routes/home/collection/Collection";

const AccountDetailsPage = () => {
  return (
    <>
      <Head>
        <title>اکانت | لیست علاقه‌مندی‌ها</title>
      </Head>
      <BasicBreadcrumbs routerName="/اکانت/لیست علاقه‌مندی‌ها" />
      <AsideMenu>
        <Grid item sx={{ px: 1 }} xs={12} md={9}>
          <Box>
            <Typography variant="h5" sx={{ p: { xs: 0, md: 2 } }}>
              لیست علاقه‌مندی‌های من
            </Typography>
            <Grid container direction="row-reverse">
              <Collection type="third" />
            </Grid>
          </Box>
        </Grid>
      </AsideMenu>
    </>
  );
};
export default AccountDetailsPage;
