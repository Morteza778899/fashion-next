import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import Head from "next/head";
import BasicBreadcrumbs from "../../components/layout/BasicBreadcrumbs";
import AsideMenu from "../../components/routes/account/AsideMenu";
import PersonalInfo from "../../components/routes/account/PersonalInfo";

const AccountDetailsPage = () => {
  return (
    <>
      <Head>
        <title>اکانت | حساب کاربری</title>
      </Head>
      <BasicBreadcrumbs routerName="/اکانت/اطلاعات اکانت" />
      <AsideMenu>
        <Grid item sx={{ px: 1 }} xs={12} md={9}>
          <Box>
            <Typography variant="h5" sx={{ p: 2 }}>
              اطلاعات حساب کاربری
            </Typography>
            <Grid container direction="row-reverse">
              <PersonalInfo />
            </Grid>
          </Box>
        </Grid>
      </AsideMenu>
    </>
  );
};
export default AccountDetailsPage;
