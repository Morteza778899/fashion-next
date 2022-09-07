import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import AsideMenu from "../../components/routes/account/AsideMenu";
import PersonalInfo from "../../components/routes/account/PersonalInfo";

const AccountDetailsPage = () => {
  return (
    <AsideMenu>
      <Grid item sx={{ px: 1 }} xs={9}>
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
  );
};
export default AccountDetailsPage;
