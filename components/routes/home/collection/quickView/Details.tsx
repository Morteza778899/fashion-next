import { Box, Grid, Stack, Typography } from "@mui/material";
import { TomanIcon } from "../../../../icon/myIcons";
import CheckIcon from "@mui/icons-material/Check";

const Details = () => {
  return (
    <>
      <Typography variant="h5" fontWeight={900} sx={{ m: 2, mt: 4 }}>
        شلوار چرمی ساده
      </Typography>
      <Stack
        alignItems="flex-end"
        direction="row-reverse"
        gap={2}
        sx={{ m: 2 }}
      >
        <Typography variant="h4" sx={{ height: "fit-content" }}>
          <TomanIcon fontSize="large" sx={{ mx: 1, mb: -1.5 }} />
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
      <Typography variant="body1" sx={{ m: 2 }}>
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
        <Grid item xs={6}>
          <Stack>
            <Typography variant="body1">%100 پلی‌استر</Typography>
            <CheckIcon fontSize="small" />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack>
            <Typography variant="body1">آستر با جنس ویسکوز</Typography>
            <CheckIcon fontSize="small" />
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack>
            <Typography variant="body1">غیر قابل خشکشویی</Typography>
            <CheckIcon fontSize="small" />
          </Stack>
        </Grid>
        <Grid item xs={6}>
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
