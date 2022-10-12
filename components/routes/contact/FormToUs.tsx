import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import GoogleMapReact from "google-map-react";

const FormToUs = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", textAlign: "center", my: { xs: 6, md: 8, lg: 10 }, px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
      <Typography variant="h5" fontWeight={900} mb={5}>
        با ما در تماس باشید
      </Typography>
      <Typography variant="body1" m={5}>
        یک سوال، نظر یا نگرانی عالی دارید؟ به سادگی فرم زیر را پر کرده و روی
        ارسال کلیک کنید. ما ظرف 48 ساعت کاری به تمام سوالات پاسخ خواهیم داد.
        سوالات متداول ما را بررسی کنید.
      </Typography>
      <form>
        <Grid container spacing={{ xs: 6, md: 3 }}>
          <Grid item md={6} xs={12}>
            <Stack direction="column" gap={3} sx={{ width: 1 }}>
              <Stack width={1} gap={3} sx={{flexDirection:{xs:'column',sm:'row-reverse'}}}>
                <TextField label="نام" variant="filled" fullWidth />
                <TextField label="نام خانوداگی" variant="filled" fullWidth />
              </Stack>
              <Stack width={1} gap={3} sx={{flexDirection:{xs:'column',sm:'row'}}}>
                <TextField
                  label="ایمیل"
                  type="email"
                  variant="filled"
                  fullWidth
                />
                <TextField label="تلفن" variant="filled" fullWidth />
              </Stack>
              <TextField
                label="متن مورد نظر خود را اینجا تایپ کنید"
                variant="filled"
                fullWidth
                rows={6}
                multiline
              />
              <Button variant="contained" size="medium" sx={{ mx: "auto" }}>
                ارسال پیام
              </Button>
            </Stack>
          </Grid>
          <Grid item md={6} xs={12} sx={{ width: 1, height: {xs:350,sm:450} }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            ></GoogleMapReact>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
export default FormToUs;
