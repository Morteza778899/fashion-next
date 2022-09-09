import { Box, Button, Slider, Stack } from "@mui/material";
import { useState } from "react";

const Price = () => {
  const [value, setValue] = useState<number[]>([100000, 500000]);
  const minDistance = 100000;
  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <Stack direction="column" sx={{ mx: 3, alignItems: "center" }}>
      <Slider
        aria-label="Price"
        value={value}
        // getAriaValueText={(value)=>{}}
        onChange={handleChange}
        valueLabelDisplay="auto"
        step={1000}
        min={0}
        max={1000000}
        disableSwap
      />
      <Button
        size="small"
        variant="contained"
        color="info"
        sx={{ width: "fit-content", my: 1 }}
      >
        اعمال قیمت
      </Button>
    </Stack>
  );
};
export default Price;
