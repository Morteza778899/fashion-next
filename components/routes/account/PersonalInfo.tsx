import { Box, Grid, Stack, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const PersonalInfo = () => {
  return (
    <Grid item xs={12} md={6} sx={{ px: { xs: 1, sm: 3 }, py: 1 }}>
      <Box
        sx={{
          bgcolor: "whitesmoke",
          p: 3,
          "& .MuiTypography-body2": {
            mx: { xs: 0, sm: 1 },
          },
          "& > div": {
            alignItems: "center",
            flexDirection: "row-reverse",
          },
        }}
      >
        <Typography variant="h6" sx={{ pb: 2 }}>
          اطلاعات شخصی
        </Typography>
        <Stack>
          <Typography variant="body1">نام:</Typography>
          <Typography variant="body2">مرتضی</Typography>
        </Stack>
        <Stack>
          <Typography variant="body1">نام خانوادگی:</Typography>
          <Typography variant="body2">داداش‌پور</Typography>
        </Stack>
        <Stack sx={{ overflow: 'hidden' }}>
          <Typography variant="body1">ایمیل:</Typography>
          <Typography variant="body2">mmorteza.778899@gmail.com</Typography>
        </Stack>
        <Stack>
          <Typography variant="body1">تلفن:</Typography>
          <Typography variant="body2">09114880469</Typography>
        </Stack>
        <Stack
          sx={{
            mt: 2,
            width: "fit-content",
            cursor: "pointer",
            ":hover": {
              color: "primary.main",
            },
          }}
        >
          <EditIcon fontSize="small" />
          <Typography variant="body2">ویرایش</Typography>
        </Stack>
      </Box>
    </Grid>
  );
};
export default PersonalInfo;
