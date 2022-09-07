import { Box, Grid, Typography } from "@mui/material";
import AsideMenu from "../../components/routes/account/AsideMenu";
import PersonalInfo from "../../components/routes/account/PersonalInfo";
import Collection from "../../components/routes/home/collection/Collection";

const AccountDetailsPage = () => {
  return (
    <AsideMenu>
      <Grid item sx={{ px: 1 }} xs={9}>
        <Box>
          <Typography variant="h5" sx={{ p: 2 }}>
            لیست علاقه‌مندی‌های من
          </Typography>
          <Grid container direction="row-reverse">
            <Collection type="third" />
          </Grid>
        </Box>
      </Grid>
    </AsideMenu>
  );
};
export default AccountDetailsPage;
