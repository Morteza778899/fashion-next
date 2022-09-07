import { Box, Grid, Stack, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const PersonalInfo = () => {
  return (
    <Grid item xs={6} sx={{ px: 3, py: 1 }}>
      <Box
        sx={{
          bgcolor: "whitesmoke",
          "& .MuiTypography-body2": {
            mx: 1,
          },
          "& > div": {
            alignItems: "center",
            flexDirection: "row-reverse",
          },
          p: 3,
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
        <Stack>
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
