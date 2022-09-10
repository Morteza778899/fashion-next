import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
  } from "@mui/material";

const Address = ()=>{
    return (
        <Stack
        direction="column"
        gap={3}
        width={1}
        sx={{
          border: "1px solid #eeeeee",
          p: 3,
        }}
      >
        <Typography variant="h5" mb={2}>
          آدرس مقصد
        </Typography>
        <Stack gap={1}>
          <TextField variant="filled" label="نام خانوادگی" fullWidth />
          <TextField variant="filled" label="نام" fullWidth />
        </Stack>
        <FormControl variant="filled">
          <InputLabel id="demo-simple-select-filled-label">
            استان
          </InputLabel>
          <Select labelId="demo-simple-select-filled-label">
            <MenuItem value={10}>تهران</MenuItem>
            <MenuItem value={20}>مازندران</MenuItem>
            <MenuItem value={30}>گیلان</MenuItem>
            <MenuItem value={40}>گرگان</MenuItem>
          </Select>
        </FormControl>
        <Stack gap={1}>
          <TextField variant="filled" label="کد پستی" fullWidth />
          <FormControl variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-filled-label">
              شهر
            </InputLabel>
            <Select labelId="demo-simple-select-filled-label">
              <MenuItem value={10}>تهران</MenuItem>
              <MenuItem value={20}>کرج</MenuItem>
              <MenuItem value={30}>بابل</MenuItem>
              <MenuItem value={40}>مشهد</MenuItem>
              <MenuItem value={50}>تبریز</MenuItem>
              <MenuItem value={60}>ساری</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <TextField variant="filled" label="آدرس" fullWidth />
        <FormGroup dir='rtl'>
          <FormControlLabel
            control={<Checkbox />}
            label="ذخیره آدرس در حساب کاربری من"
          />
        </FormGroup>
      </Stack>
    )
}
export default Address