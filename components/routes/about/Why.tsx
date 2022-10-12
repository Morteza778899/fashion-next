import { Box, Grid, Stack, Typography } from "@mui/material";
import LocalMallTwoToneIcon from "@mui/icons-material/LocalMallTwoTone";
import AlarmAddTwoToneIcon from "@mui/icons-material/AlarmAddTwoTone";
import LocalShippingTwoToneIcon from "@mui/icons-material/LocalShippingTwoTone";
import ContactSupportTwoToneIcon from "@mui/icons-material/ContactSupportTwoTone";
import LocalOfferTwoToneIcon from "@mui/icons-material/LocalOfferTwoTone";
const Why = () => {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto",my:10 }}>
      <Typography variant="h4" textAlign="center">
        چرا از ما خرید کنید
      </Typography>
      <Grid container
        sx={{
          "& svg": {
            width: 80,
            height: 80,
            fill: (theme) => theme.palette.secondary.light,
          },
          "& > div": {
            p: 2,
            flexDirection: "column",
            alignItems:'center',
            textAlign:'center',
            "& p":{
                p:1
            }
          },
        }}
        justifyContent="space-around"
      >
        <Grid item md={2.4}>
          <LocalMallTwoToneIcon />
          <Typography variant="body1">فروشگاهی برای تمام نیاز‌های شما</Typography>
        </Grid>
        <Grid item md={2.4}>
          <AlarmAddTwoToneIcon />
          <Typography variant="body1">
            ارسال در همان روز برای کلیه سفارشات
          </Typography>
        </Grid>
        <Grid item md={2.4}>
          <LocalShippingTwoToneIcon />
          <Typography variant="body1">تحویل رایگان در تمام سفارشات</Typography>
        </Grid>
        <Grid item md={2.4}>
          <ContactSupportTwoToneIcon />
          <Typography variant="body1">مشاوره حرفه ای و پشتیبانی عالی</Typography>
        </Grid>
        <Grid item md={2.4}>
          <LocalOfferTwoToneIcon />
          <Typography variant="body1">جشنواره های متنوع برای تخفیف</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Why;
