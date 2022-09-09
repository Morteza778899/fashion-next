import { Checkbox, FormControlLabel, Stack } from "@mui/material";

const Size = () => {
  return (
    <Stack justifyContent="start" gap={6} mr={3}>
      <Stack direction="column">
        <FormControlLabel label="XXS" control={<Checkbox size="small" />} />
        <FormControlLabel label="XS" control={<Checkbox size="small" />} />
        <FormControlLabel label="S" control={<Checkbox size="small" />} />
        <FormControlLabel label="L" control={<Checkbox size="small" />} />
      </Stack>
      <Stack direction="column">
        <FormControlLabel label="XL" control={<Checkbox size="small" />} />
        <FormControlLabel label="XXL" control={<Checkbox size="small" />} />
        <FormControlLabel label="XXL" control={<Checkbox size="small" />} />
      </Stack>
    </Stack>
  );
};
export default Size;
