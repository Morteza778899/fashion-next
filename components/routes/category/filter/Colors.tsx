import { Checkbox, FormControlLabel, Stack } from "@mui/material";

const Colors = () => {
  return (
    <Stack justifyContent="start" gap={6} mr={3}>
      <Stack direction="column">
        <FormControlLabel
          label="قرمز"
          control={<Checkbox size="small" sx={{ color: "red !important" }} />}
        />
        <FormControlLabel
          label="سبز"
          control={<Checkbox size="small" sx={{ color: "green !important" }} />}
        />
        <FormControlLabel
          label="بنفش"
          control={
            <Checkbox size="small" sx={{ color: "violet !important" }} />
          }
        />
        <FormControlLabel
          label="آبی"
          control={<Checkbox size="small" sx={{ color: "blue !important" }} />}
        />
      </Stack>
      <Stack direction="column">
        <FormControlLabel
          label="سیاه"
          control={<Checkbox size="small" sx={{ color: "black !important" }} />}
        />
        <FormControlLabel
          label="نارنجی"
          control={
            <Checkbox size="small" sx={{ color: "orange !important" }} />
          }
        />
        <FormControlLabel
          label="زرد"
          control={
            <Checkbox size="small" sx={{ color: "yellow !important" }} />
          }
        />
        <FormControlLabel
          label="سفید"
          control={
            <Checkbox
              size="small"
              sx={{
                color: "white",
                "& svg": {
                  fill: "gray",
                },
              }}
            />
          }
        />
      </Stack>
    </Stack>
  );
};
export default Colors;
