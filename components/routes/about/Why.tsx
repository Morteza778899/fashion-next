import { Box, Stack, Typography } from "@mui/material";
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
      <Stack
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
        <Stack>
          <LocalMallTwoToneIcon />
          <Typography variant="body1">فروشگاهی برای تمام نیاز‌های شما</Typography>
        </Stack>
        <Stack>
          <AlarmAddTwoToneIcon />
          <Typography variant="body1">
            ارسال در همان روز برای کلیه سفارشات
          </Typography>
        </Stack>
        <Stack>
          <LocalShippingTwoToneIcon />
          <Typography variant="body1">تحویل رایگان در تمام سفارشات</Typography>
        </Stack>
        <Stack>
          <ContactSupportTwoToneIcon />
          <Typography variant="body1">مشاوره حرفه ای و پشتیبانی عالی</Typography>
        </Stack>
        <Stack>
          <LocalOfferTwoToneIcon />
          <Typography variant="body1">جشنواره های متنوع برای تخفیف</Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
export default Why;
