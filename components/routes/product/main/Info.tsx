import { Grid, LinearProgress, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Info = () => {
  const [stock, setStock] = useState(27);
  useEffect(() => {
    setInterval(() => {
      setStock((preState) => {
        if (preState > 0) {
          return preState - 1;
        } else {
          return 0;
        }
      });
    }, 10000);
  }, []);

  return (
    <Stack
      direction="column"
      sx={{
        "& .num": {
          color: "primary.main",
        },
        m: 2,
      }}
      gap={1}
    >
      <Typography fontWeight={900} variant="body2" mt={2}>
        عجله کنید! فقط <span className="num">{stock}</span> تا در انبار مونده
      </Typography>
      <LinearProgress variant="determinate" value={stock} />
      <Grid container sx={{ bgcolor: "#f7f7f8", p: 2, px: 4,mt:2 }}>
        <Grid item xs>
          <Stack direction="column" gap={1}>
            <Stack alignItems="center" gap={1} justifyContent="flex-end">
              <Typography>دارد</Typography>
              <Typography variant="body2">رنگ بندی:</Typography>
            </Stack>
            <Stack alignItems="center" gap={1} justifyContent="flex-end">
              <Typography>Banita</Typography>
              <Typography variant="body2">فروشنده:</Typography>
            </Stack>
            <Stack alignItems="center" gap={1} justifyContent="flex-end">
              <Typography>314363563</Typography>
              <Typography variant="body2">بارکد:</Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs>
          <Stack direction="column" gap={1}>
            <Stack alignItems="center" gap={1} justifyContent="flex-end">
              <Typography>موجود در انبار</Typography>
              <Typography variant="body2">دسترسی:</Typography>
            </Stack>
            <Stack alignItems="center" gap={1} justifyContent="flex-end">
              <Typography>با احتساب مالیات</Typography>
              <Typography variant="body2">اطلاعات مالیاتی:</Typography>
            </Stack>
            <Stack alignItems="center" gap={1} justifyContent="flex-end">
              <Typography>زنانه</Typography>
              <Typography variant="body2">مجموعه:</Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
export default Info;
