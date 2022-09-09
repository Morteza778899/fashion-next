import { Box, Button, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FilterTop = () => {
  return (
    <>
      <Typography variant="h6">انتخاب براساس نیاز شما</Typography>
      <Stack
        direction="row-reverse"
        gap={1}
        sx={{
          my: 3,
          "& button": {
            whiteSpace: "nowrap",
          },
          "& svg": {
            width: 15,
            height: 15,
            ml: 0.6,
          },
        }}
      >
        <Button variant="contained" size="small">
          <CloseIcon />
          مردانه
        </Button>
        <Button variant="contained" size="small">
          <CloseIcon />
          خاکستری
        </Button>
        <Button variant="contained" size="small">
          <CloseIcon />
          دارای تخفیف
        </Button>
      </Stack>
      <Box>
        <Stack justifyContent="space-between" alignItems="center">
          <Stack gap={1}>
            <Typography variant="body2">3 مورد</Typography>
            <Typography variant="subtitle2">تگ‌های انتخاب شده:</Typography>
          </Stack>
          <Button variant="contained" color="info" size="small">
            پاک کردن همه
          </Button>
        </Stack>
      </Box>
    </>
  );
};
export default FilterTop;
