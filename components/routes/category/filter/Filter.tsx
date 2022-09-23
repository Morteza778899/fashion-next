import { Box, Divider, Stack } from "@mui/material";
import AccordionLayout from "./AccordionLayout";
import Brand from "./Brand";
import Categories from "./Categories";
import Colors from "./Colors";
import FilterTop from "./FilterTop";
import Price from "./Price";
import Size from "./Size";

const Filter = () => {
  return (
    <Box sx={{ width: 290, position: "relative" }}>
      <Box sx={{ position: "sticky", top: 80, mb: 20 }}>
        <FilterTop />
        <Stack
          direction="column"
          divider={<Divider orientation="horizontal" flexItem />}
          sx={{
            my: 3,
            "& span": {
              fontSize: "0.8rem !important",
            },
            "& .MuiCheckbox-root ": {
              px: 0,
              pl: 1,
              py: 0.5,
            },
            "& .MuiFormControlLabel-root": {
              m: 0,
            },
            "& .MuiAccordionDetails-root": {
              p: 0,
            },
          }}
        >
          <AccordionLayout title="دسته بندی" firstOpen={true}>
            <Categories />
          </AccordionLayout>
          <AccordionLayout title="رنگ ها" firstOpen={false}>
            <Colors />
          </AccordionLayout>
          <AccordionLayout title="سایز" firstOpen={false}>
            <Size />
          </AccordionLayout>
          <AccordionLayout title="برند" firstOpen={false}>
            <Brand />
          </AccordionLayout>
          <AccordionLayout title="قیمت" firstOpen={false}>
            <Price />
          </AccordionLayout>
        </Stack>
      </Box>
    </Box>
  );
};
export default Filter;
