import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import bg from "../../../public/image/bg-email.png";
const Newsletter = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg.src})`,
        color: "white",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundSize: "cover",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Grid container
          direction={'row-reverse'}
          sx={{
            px: { xs: 2, sm: 4, md: 6, lg: 8 },
            "& .css-w1h58p-MuiInputBase-root-MuiInput-root": {
              color: "white",
              ":before": {
                borderBottom: "1px solid #ffffff",
              },
              ":hover": {
                ":before": {
                  borderBottom: "1px solid #ffffff !important",
                },
              },
            },
            "& input": {
              px: 2
            },
            "& label": {
              color: "white",
            },
          }}
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item lg xs={12}>
            <Box sx={{ mb: { xs: 2, sm: 0, lg: 8 }, mt: { xs: 4, lg: 8 },mx:2 }}>
              <Typography variant="h2" fontWeight={900}>
                خــبرنـامــه
              </Typography>
              <Typography variant="body1">
                در خبرنامه ی هفتگی ما عضو شوید.
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={'auto'} sm={7} xs={12}>
            <TextField
              id="standard-basic"
              variant="standard"
              color="secondary"
              sx={{ px: { xs: 3, sm: 0 }, pl: { sm: 3, lg: 10 }, minWidth: { lg: 500 }, }}
              placeholder='ایمیل خود را وارد کنید'
              fullWidth
            />
          </Grid>
          <Grid item lg={'auto'} sm={5} xs={12}>
            <Button
              size="large"
              variant="contained"
              color="secondary"
              sx={{ height: "fit-content", my: { xs: 2, sm: 5 } }}
              fullWidth
            >
              عضــویـتــــــ
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Newsletter;
