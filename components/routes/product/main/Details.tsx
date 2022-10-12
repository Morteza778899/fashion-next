import { Box, Grid, Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { TomanIcon } from "../../../icon/myIcons";

const Details = () => {
  return (
    <>
      <Stack
        alignItems="flex-end"
        direction="row-reverse"
        gap={2}
        sx={{ m: 2 }}
      >
        <Typography variant="h4" sx={{ height: "fit-content" }}>
          <TomanIcon fontSize="large" sx={{mr:-1,ml:1, mb: -1.5 }} />
          154000
        </Typography>
        <Box>
          <Typography variant="body1" sx={{ textDecoration: "line-through" }}>
            184000
          </Typography>
          <Box
            sx={{
              bgcolor: "#fb317d",
              color: "white",
              borderRadius: 1,
              p: 0.3,
              mt: -0.5,
            }}
          >
            <Typography>تخفیف %16</Typography>
          </Box>
        </Box>
      </Stack>
      <Typography variant='h6' sx={{ mx: 2 }}>توضیح کوتاه</Typography>
      <Typography variant="body1" sx={{ m: 1,mx:2 }}>
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و ابزارهای
        کاربردی می باشد
      </Typography>
      <Grid
        container
        sx={{
          "& .css-m69qwo-MuiStack-root": {
            justifyContent: "flex-end",
            my: 0.7,
          },
          "& svg": {
            mx: 1,
          },
        }}
      >
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography variant="body1">%100 پلی‌استر</Typography>
            <CheckIcon fontSize="small" />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography variant="body1">آستر با جنس ویسکوز</Typography>
            <CheckIcon fontSize="small" />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography variant="body1">غیر قابل خشکشویی</Typography>
            <CheckIcon fontSize="small" />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography variant="body1">شست و شوی بدون کلر</Typography>
            <CheckIcon fontSize="small" />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
export default Details;
