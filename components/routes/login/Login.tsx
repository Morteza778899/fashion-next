import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormHelperText,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";
  import Link from "next/link";
  
const Login = ()=>{
    return(
        <Box sx={{ maxWidth: 800, mx: "auto", textAlign: "center",my:8 }}>
        <Typography variant="h5" fontWeight={900} m={5}>
          ساخت حساب کاربری
        </Typography>
        <Typography variant="body1" m={5}>
          برای دسترسی به لیست علاقه مندی ها، دفترچه آدرس و تنظیمات برگزیده تماس و
          برای استفاده از تسویه حساب سریع ما، هم اکنون با ما یک حساب کاربری ایجاد
          کنید.
        </Typography>
        <form>
          <Stack
            direction="column"
            gap={3}
            sx={{
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
            <TextField label="ایمیل" type="email" variant="filled" fullWidth />
            <TextField
              label="رمز عبور"
              type="password"
              variant="filled"
              fullWidth
            />
            <TextField
              label="تکرار رمز عبور"
              type="password"
              variant="filled"
              fullWidth
            />
            <Stack direction='row-reverse'>
            <Checkbox/>
            <Typography variant='body2' sx={{mt:1.2,"& a":{color:'primary.main'}}}>
              با ثبت مشخصات خود، با <Link href='/'>شرایط و ضوابط ما</Link> موافقت می کنید
            </Typography>
            </Stack>
            <Button variant='contained'size='medium'sx={{mx:'auto'}}>ساخت حساب کاربری جدید</Button>
          </Stack>
        </form>
      </Box>
    )
}
export default Login