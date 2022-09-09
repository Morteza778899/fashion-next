import { Checkbox, FormControlLabel, Stack } from "@mui/material";

const Brand = () => {
  return (
      <Stack direction="column" sx={{mr:3}}>
        <FormControlLabel label="نایک" control={<Checkbox size="small" />} />
        <FormControlLabel label="آدیداس" control={<Checkbox size="small" />} />
        <FormControlLabel label="ریبوک" control={<Checkbox size="small" />} />
        <FormControlLabel label="پوما" control={<Checkbox size="small" />} />
      </Stack>

  );
};
export default Brand;
