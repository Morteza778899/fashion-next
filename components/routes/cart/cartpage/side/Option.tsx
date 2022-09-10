import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";

const Option = () => {
  return (
    <Stack direction="column" gap={3}>
      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-filled-label">استان</InputLabel>
        <Select labelId="demo-simple-select-filled-label">
          <MenuItem value={10}>تهران</MenuItem>
          <MenuItem value={20}>مازندران</MenuItem>
          <MenuItem value={30}>گیلان</MenuItem>
          <MenuItem value={40}>گرگان</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-filled-label">شهر</InputLabel>
        <Select labelId="demo-simple-select-filled-label">
          <MenuItem value={10}>تهران</MenuItem>
          <MenuItem value={20}>کرج</MenuItem>
          <MenuItem value={30}>بابل</MenuItem>
          <MenuItem value={40}>مشهد</MenuItem>
          <MenuItem value={50}>تبریز</MenuItem>
          <MenuItem value={60}>ساری</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="demo-simple-select-filled"
        variant="filled"
        label="کد پستی"
      ></TextField>
    </Stack>
  );
};
export default Option;
