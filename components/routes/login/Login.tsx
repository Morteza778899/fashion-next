import {
  Box,
  Button,
  Checkbox,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";

const Login = () => {
  return (
    <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center", my: 8 }}>
      <Typography variant="h5" fontWeight={900} m={5}>
        ورود به حساب کاربری
      </Typography>
      <Typography variant="body1" m={5}>
        برای دسترسی به لیست علاقه مندی ها، دفترچه آدرس و تنظیمات برگزیده تماس و
        برای استفاده از تسویه حساب سریع ما، باید وارد حساب خود شوید
      </Typography>
      <form>
        <Stack direction="column" gap={3} sx={{ mx: 4 }}>
          <TextField label="ایمیل" type="email" variant="filled" fullWidth />
          <TextField
            label="رمز عبور"
            type="password"
            variant="filled"
            fullWidth
          />
          <Stack direction="row-reverse">
            <Checkbox />
            <Typography
              variant="body2"
              sx={{ mt: 1.2, "& a": { color: "primary.main" } }}
            >
              با ثبت مشخصات خود، با <Link href="/">شرایط و ضوابط ما</Link>{" "}
              موافقت می کنید
            </Typography>
          </Stack>
          <Button variant="contained" size="medium" sx={{ mx: "auto" }}>
            ورود به حساب
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
export default Login;
