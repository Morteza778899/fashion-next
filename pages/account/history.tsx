import { Box, Grid, Typography } from "@mui/material";
import BasicBreadcrumbs from "../../components/layout/BasicBreadcrumbs";
import AsideMenu from "../../components/routes/account/AsideMenu";
import HistoryTable from "../../components/routes/account/HistoryTable";

const AccountHistoryPage = () => {
  return (
    <>
    <BasicBreadcrumbs routerName="/اکانت/تاریخچه سفارشات"/>
    <AsideMenu>
      <Grid item sx={{ px: 1 }} xs={9}>
        <Box>
          <Typography variant="h5" sx={{ p: 2 }}>
            تاریخچه سفارش ها
          </Typography>
          <Grid container direction="row-reverse">
            <HistoryTable />
          </Grid>
        </Box>
      </Grid>
    </AsideMenu>
    </>
  );
};
export default AccountHistoryPage;
