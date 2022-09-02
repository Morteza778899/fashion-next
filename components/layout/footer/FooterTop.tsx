import { Box, Stack, Typography } from "@mui/material";
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
        "& .icon": {
          color: "white",
          width: "100%",
          height: "100%",
        },
        "& .MuiTypography-root": { color: "white" },
        "& h6": { my: .5 },
      }}
    >
      <Stack gap={6} sx={{ maxWidth: 1200, mx: "auto",py:5 }}>
        <Stack>
          <Box>
            <Typography variant="h6">تحویل فوق العاده سریع</Typography>
            <Typography variant="body1">
              سفارش شما 3-5 روز کاری پس از در دسترس بودن همه کالاهای شما تحویل
              داده می شود
            </Typography>
          </Box>
          <Box sx={{ width: 110,mx:2 }}>
            <LocalShippingIcon className="icon" />
          </Box>
        </Stack>
        <Stack>
          <Box>
            <Typography variant="h6">بهترین قیمت</Typography>
            <Typography variant="body1">
              ما بلافاصله قیمت محصولات رقبای اصلی آنلاین و محلی را مطابقت خواهیم
              داد
            </Typography>
          </Box>
          <Box sx={{ width: 110,mx:2  }}>
            <PaidIcon className="icon" />
          </Box>
        </Stack>
        <Stack>
          <Box>
            <Typography variant="h6">ضمانت</Typography>
            <Typography variant="body1">
              اگر مورد مورد نظر شما در دسترس باشد ، ما می توانیم بازپرداخت کنیم{" "}
            </Typography>
          </Box>
          <Box sx={{ width: 110,mx:2  }}>
            <DocumentScannerIcon className="icon" />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
export default FooterTop;
