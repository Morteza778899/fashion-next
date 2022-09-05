import { Box, Stack, Typography } from "@mui/material";
import bg from "../../../public/image/contact-bg-flip.png";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundSize: "cover",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Stack direction="column" alignItems="end">
          <Box sx={{ maxWidth: 600 }} my={10}>
            <Typography variant="h2" fontWeight={900} my={7}>
              ارتباط با ما
            </Typography>
            <Typography variant="body1" my={7}>
              فروشگاه ما که در سال 2022 تأسیس شد، یک فروشگاه برای دنیای پوشاک و
              مدلینگ است. ما ابزارهای لازم را برای پیشبرد صنعت خود و پیشرفت تا
              حد امکان به فروشگاه ها محصولاتمان را ارائه می دهیم.
            </Typography>
            <Typography variant="body1" my={7}>
              یک سوال، نظر یا نگرانی عالی دارید؟ به سادگی فرم زیر را پر کرده و
              روی ارسال کلیک کنید. ما ظرف 48 ساعت کاری به تمام سوالات پاسخ
              خواهیم داد. سوالات متداول ما را بررسی کنید.
            </Typography>
            <Box my={7} sx={{bgcolor:'white',position:'relative',boxShadow:'0px 0px 10px #e9e9e9'}}>
              <FormatQuoteIcon fontSize='large' sx={{position:'absolute',right:0,top:-15}}/>
              <Typography variant="body2" fontStyle="italic" sx={{p:3,pb:1}}>
                شما هرگز نمی توانید در انتخاب کفش خود خیلی دقت کنید. بسیاری از
                زنان فکر می کنند که آنها بی اهمیت هستند، اما گواه واقعی یک زن
                ظریف چیزی است که روی پای او است.
              </Typography>
              <Typography variant="body2" textAlign='left' fontWeight={900} sx={{px:3,py:2}}>
                _کریستوفر دایر
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default Contact;
