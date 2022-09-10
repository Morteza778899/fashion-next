import { Button, Divider, Stack, TextField, Typography } from "@mui/material";
import { FC } from "react";
import AccordionLayout from "../../../category/filter/AccordionLayout";
import Code from "./Code";
import Option from "./Option";
import SideDetailsTop from "./SideDetailsTop";
interface Iprops {
  empty: boolean;
}
const SideDetails: FC<Iprops> = ({ empty }) => {
  return (
    <Stack direction="column" alignItems="center" gap={3}>
      <SideDetailsTop empty={empty} />
      <Stack
        direction="column"
        divider={<Divider orientation="horizontal" flexItem />}
        sx={{
          width: 1,
          my: 3,
        }}
      >
        <AccordionLayout title="گزینه های حمل و نقل" firstOpen={true}>
          <Option />
        </AccordionLayout>
        <AccordionLayout title="کد تخفیف" firstOpen={true}>
          <Code />
        </AccordionLayout>
        <AccordionLayout title="یادداشت برای فروشنده" firstOpen={true}>
          <Stack direction="column" gap={2}>
            <TextField
              label="متن مورد نظر خود را اینجا تایپ کنید"
              variant="filled"
              fullWidth
              rows={6}
              multiline
            />
          </Stack>
        </AccordionLayout>
      </Stack>
    </Stack>
  );
};
export default SideDetails;
