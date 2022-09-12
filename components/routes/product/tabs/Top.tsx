import { Box, Stack, Typography } from "@mui/material";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import DepartureBoardOutlinedIcon from "@mui/icons-material/DepartureBoardOutlined";
const Top = () => {
  return (
      <Box sx={{ bgcolor: "#f7f7f8" ,mb:8}}>
        <Stack
          justifyContent="space-between"
          sx={{ maxWidth: 1200, mx: "auto",py:1 }}
        >
          <Stack alignItems="center">
            <SupportAgentOutlinedIcon fontSize="large" color="action" />
            <Typography>پشتیبانی 24/7</Typography>
          </Stack>
          <Stack alignItems="center">
            <Typography>
               از کد تبلیغاتی OFF برای دریافت 15٪ تخفیف استفاده
              کنید!
            </Typography>
          </Stack>
          <Stack alignItems="center">
            <DepartureBoardOutlinedIcon fontSize="large" color="action" />
            <Typography>حمل و نقل سریع</Typography>
          </Stack>
        </Stack>
      </Box>
  );
};
export default Top;