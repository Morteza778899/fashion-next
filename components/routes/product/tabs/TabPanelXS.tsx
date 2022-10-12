import { Stack } from "@mui/material";
import AccordionLayout from "../../category/filter/AccordionLayout";
import Description from "./Description";
import Reviews from "./Reviews";
import Size from "./Size";
import Tags from "./Tags";

export default function TabPanelXS() {
  return (
    <Stack gap={2} direction={'column'} sx={{
      mx: { xs: 2, sm: 4 },
      mb:6,
      "& .MuiAccordionSummary-root": {
        backgroundColor: '#f9f9f9'
      }
    }}>
      <AccordionLayout title='توضیحات' firstOpen={false}>
        <Description />
      </AccordionLayout>
      <AccordionLayout title='راهنمای اندازه‌گیری' firstOpen={false}>
        <Size />
      </AccordionLayout>
      <AccordionLayout title='تگ‌های مربوطه' firstOpen={false}>
        <Tags />
      </AccordionLayout>
      <AccordionLayout title='دیدگاه‌ها' firstOpen={false}>
        <Reviews />
      </AccordionLayout>
    </Stack>
  )
}
