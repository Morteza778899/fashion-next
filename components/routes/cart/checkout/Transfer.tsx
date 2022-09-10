import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";

const Transfer = () => {
  return (
    <Stack
      direction="column"
      gap={2}
      sx={{
        border: "1px solid #eeeeee",
        p: 3,
      }}
    >
      <Typography variant="h5" >
        روش‌های تحویل
      </Typography>
      <RadioGroup defaultValue="1" name="radio-buttons-group" dir="rtl">
        <FormControlLabel
          value="1"
          control={<Radio />}
          label="تحویل استاندارد 2.99 دلار (3-5 روز)"
        />
        <FormControlLabel
          value="2"
          control={<Radio />}
          label="تحویل سریع 10.99 دلار (1-2 روز)"
        />
        <FormControlLabel
          value="3"
          control={<Radio />}
          label="همان روز 20.00 دلار (تحویل عصر)"
        />
      </RadioGroup>
    </Stack>
  );
};
export default Transfer;
