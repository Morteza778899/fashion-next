import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import bgimage from "../../../public/image/about-bg-flip.jpg";

const Explain = () => {
  const smWidth = useMediaQuery('(min-width:600px)')
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgimage.src})`,
        width: 1,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "center",
        backgroundPositionY: "center",
        backgroundSize: "cover",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        <Stack direction="column" alignItems="end" mx={{ xs: 2, sm: 4, md: 6, lg: 8 }}>
          <Box sx={{ maxWidth: 600 }} my={{ xs: 2, sm: 10 }}>
            <Typography variant="h2" fontWeight={900} my={7}>
              درباره ما
            </Typography>
            <Typography variant="body1" my={7}>
              فروشگاه ما که در سال 2022 تأسیس شد، یک فروشگاه برای دنیای پوشاک و
              مدلینگ است. ما ابزارهای لازم را برای پیشبرد صنعت خود و پیشرفت
              تا حد امکان به فروشگاه ها محصولاتمان را ارائه می دهیم.
            </Typography>
            {smWidth && (
              <>
                <Typography variant="body1" my={7}>
                  این فروشگاه که در پایتخت کشور در تهران واقع شده است، عمدتاً در کل
                  کشور کار می کند، اما فروش بین المللی روزانه مورد استقبال و ارسال
                  قرار می گیرد. ما یک پیشخوان تجاری برای دریافت نمایندگی داریم و شما
                  را تشویق می کنیم که وارد شوید و ما را ببینید!
                </Typography>
                <Box my={7}>
                  <Typography variant="body2" fontStyle="italic" fontWeight={900}>
                    پشتیبانی ما از ساعت 10:00 تا 18:00 (دوشنبه تا جمعه) در دسترس
                    است.
                  </Typography>
                  <Typography variant="body2" fontStyle="italic" fontWeight={900}>
                    ما معمولاً ظرف 24 ساعت با شما تماس می گیریم.
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default Explain;
