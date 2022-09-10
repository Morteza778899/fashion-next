import { Grid, Typography } from "@mui/material";

const Top = () => {
  return (
    <Grid
      container
      sx={{
        textAlign: "center",
        borderTop: "1px solid #f4f4f4",
        borderBottom: "1px solid #f4f4f4",
        py:1.5
      }}
      direction='row-reverse'
    >
      <Grid item xs={2}>
        <Typography >عکس</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography textAlign='right' sx={{px:4}}>نام</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography >تعداد</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography >قیمت</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography >حذف</Typography>
      </Grid>
    </Grid>
  );
};
export default Top;
