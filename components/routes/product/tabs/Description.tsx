import { Grid, Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const Description = () => {
  return (
    <Stack direction="column" gap={4}>
      <Typography variant="h6">
        این یک عنوان توضیحی برای این محصول است
      </Typography>
      <Typography variant="body1">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسو م
        متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
        گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستو ن و سطرآنچنان که
        لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
        بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال
        و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
        بیشتری را برای طراحان رایا نه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو
        در زبان فارسی ایجاد کرد
      </Typography>
      <Typography variant="body1">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
        درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
      </Typography>

      <Grid
        container
        sx={{
          "& .css-m69qwo-MuiStack-root": {
            justifyContent: "center",
            my: 0.7,
          },
          "& svg": {
            mx: 1,
          },
        }}
      >
        <Grid item xs={3}>
          <Stack>
            <Typography variant="body1">%100 پلی‌استر</Typography>
            <CheckIcon fontSize="small" />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack>
            <Typography variant="body1">آستر با جنس ویسکوز</Typography>
            <CheckIcon fontSize="small" />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack>
            <Typography variant="body1">غیر قابل خشکشویی</Typography>
            <CheckIcon fontSize="small" />
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <Stack>
            <Typography variant="body1">شست و شوی بدون کلر</Typography>
            <CheckIcon fontSize="small" />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
export default Description;
