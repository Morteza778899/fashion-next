import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import GoogleMapReact from "google-map-react";
import { FC } from "react";

const FormToUs = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", textAlign: "center", my: 10 }}>
      <Typography variant="h5" fontWeight={900} m={5}>
        با ما در تماس باشید
      </Typography>
      <Typography variant="body1" m={5}>
        یک سوال، نظر یا نگرانی عالی دارید؟ به سادگی فرم زیر را پر کرده و روی
        ارسال کلیک کنید. ما ظرف 48 ساعت کاری به تمام سوالات پاسخ خواهیم داد.
        سوالات متداول ما را بررسی کنید.
      </Typography>
      <form>
        <Stack gap={3}>
          <Stack
            direction="column"
            gap={3}
            sx={{
              width: 1,
              "& .MuiFilledInput-root": {
                ":before": {
                  borderBottom: "1px solid #80808040",
                },
                ":hover": {
                  ":before": {
                    borderBottom: "1px solid #80808040 !important",
                  },
                },
              },
            }}
          >
            <Stack width={1} gap={3}>
              <TextField label="نام خانوداگی" variant="filled" fullWidth />
              <TextField label="نام" variant="filled" fullWidth />
            </Stack>
            <Stack width={1} gap={3}>
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
          <div style={{ width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            ></GoogleMapReact>
          </div>
        </Stack>
      </form>
    </Box>
  );
};
export default FormToUs;
