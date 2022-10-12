import { Box, Divider, Grid, Stack, useMediaQuery } from "@mui/material";
import AccordionLayout from "./AccordionLayout";
import Brand from "./Brand";
import Categories from "./Categories";
import Colors from "./Colors";
import FilterTop from "./FilterTop";
import Price from "./Price";
import Size from "./Size";

const FilterContent = () => {
  const lgWidth = useMediaQuery('(min-width:1200px)')
  return (
    <Box sx={{ position: "sticky", top: { xs: 0, md: 80 }, mb: { xs: 5, lg: 20 }, mx: { xs: 2, sm: 4, md: 6, lg: 0 } }}>
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
        <AccordionLayout title="دسته بندی" firstOpen={lgWidth ? true : false}>
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
  )
}
export default FilterContent