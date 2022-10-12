import { Box, Grid, Stack, Typography } from "@mui/material";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaidIcon from '@mui/icons-material/Paid';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';

const FooterTop = () => {
  return (
    <Box
      className="top-footer"
      sx={{
        bgcolor: "#282828",
        width: 1,
        "& svg": {
          color: "white",
          width: 50,
          height: 50,
        },
        "& .MuiTypography-root": { color: "white" },
        "& h6": { my: .5 },
      }}
    >
      <Grid container sx={{ maxWidth: 1200, mx: "auto", py: 1 }}>
        <Grid item xs={12} md={4}>
          <Stack alignItems='center' justifyContent='flex-end' sx={{height:1,p:2}}>
            <Box>
              <Typography variant="h6">تحویل فوق العاده سریع</Typography>
              <Typography variant="body1" textAlign={'justify'}>
                سفارش شما 3-5 روز کاری پس از در دسترس بودن همه کالاهای شما تحویل
                داده می شود
              </Typography>
            </Box>
            <Box sx={{ mx: 2 }}>
              <LocalShippingIcon />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack alignItems='center' justifyContent='flex-end' sx={{height:1,p:2}}>
            <Box>
              <Typography variant="h6">بهترین قیمت</Typography>
              <Typography variant="body1" textAlign={'justify'}>
                ما بلافاصله قیمت محصولات رقبای اصلی آنلاین و محلی را مطابقت خواهیم
                داد
              </Typography>
            </Box>
            <Box sx={{ mx: 2 }}>
              <PaidIcon />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack alignItems='center' justifyContent='flex-end' sx={{height:1,p:2}}>
            <Box>
              <Typography variant="h6">ضمانت</Typography>
              <Typography variant="body1" textAlign={'justify'}>
                اگر مورد مورد نظر شما در دسترس باشد ، ما می توانیم بازپرداخت کنیم{" "}
              </Typography>
            </Box>
            <Box sx={{ mx: 2 }}>
              <DocumentScannerIcon />
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box >
  );
};
export default FooterTop;
