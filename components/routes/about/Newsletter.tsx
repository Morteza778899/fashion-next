import { Box, Button, Stack, TextField, Typography } from "@mui/material";
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
        <Stack
          sx={{
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
            "& input":{
              px:2
            },
            "& label": {
              color: "white",
            },
          }}
          justifyContent="space-around"
          alignItems="center"
        >
          <Button
            size="large"
            variant="contained"
            color="secondary"
            sx={{ height: "fit-content" }}
          >
            عضــویـتــــــ
          </Button>
          <TextField
            id="standard-basic"
            variant="standard"
            color="secondary"
            sx={{ mx: 10,maxWidth:400 }}
            placeholder='ایمیل خود را وارد کنید'
            fullWidth
          />
          <Box sx={{ my: 8 }}>
            <Typography variant="h2" fontWeight={900}>
              خــبرنـامــه
            </Typography>
            <Typography variant="body1">
              در خبرنامه ی هفتگی ما عضو شوید.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default Newsletter;
