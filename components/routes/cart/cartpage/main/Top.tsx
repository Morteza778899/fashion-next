import { Grid, Typography, useMediaQuery } from "@mui/material";

const Top = () => {
  const smWidth = useMediaQuery('(min-width:600px)')
  return (
    <Grid
      container
      sx={{
        textAlign: "center",
        borderTop: "1px solid #f4f4f4",
        borderBottom: "1px solid #f4f4f4",
        py: 1.5
      }}
      direction='row-reverse'
    >
      <Grid item xs={4} sm={2.5}>
        <Typography >عکس</Typography>
      </Grid>
      {smWidth ? (
        <>
          <Grid item sm={3}>
            <Typography textAlign='right' sx={{ px: 4 }}>نام</Typography>
          </Grid>
          <Grid item sm={2.75}>
            <Typography >قیمت</Typography>
          </Grid>
          <Grid item sm={2.75}>
            <Typography >تعداد</Typography>
          </Grid>
        </>
      ) : (
        <Grid item xs={6}>
          <Typography >مشخصات</Typography>
        </Grid>
      )}
      <Grid item xs={2} sm={1}>
        <Typography >حذف</Typography>
      </Grid>
    </Grid>
  );
};
export default Top;
