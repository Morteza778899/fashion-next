import { Box, Grid, Typography } from "@mui/material";
import BasicBreadcrumbs from "../../components/layout/BasicBreadcrumbs";
import Address from "../../components/routes/account/Address";
import AsideMenu from "../../components/routes/account/AsideMenu";

const AccountDetailsPage = () => {
  return (
    <>
    <BasicBreadcrumbs routerName="/اکانت/آدرس‌های من"/>
    <AsideMenu>
      <Grid item sx={{ px: 1 }} xs={9}>
        <Box>
          <Typography variant="h5" sx={{ p: 2 }}>
            آدرس‌های من
          </Typography>
          <Grid container direction="row-reverse">
            <Address title="آدرس1 (پیش فرض)" />
            <Address title="آدرس2" />
          </Grid>
        </Box>
      </Grid>
    </AsideMenu>
    </>
  );
};
export default AccountDetailsPage;
