import { Box, Stack, Typography } from "@mui/material";
import StraightenIcon from "@mui/icons-material/Straighten";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import img from '../../../../public/image/safecheckout.webp'
import Image from "next/image";

const Modals = () => {
  return (
      <>
    <Stack
    justifyContent='space-between'
      sx={{
          mx:2,
        "& p": {
          cursor: "pointer",
          ":hover": {
            color: "primary.main",
            textDecoration: "underline",
          },
        },
      }}
    >
      <Stack gap={1}>
        <StraightenIcon fontSize='small'/>
        <Typography variant='body2'>راهنمای سایزبندی</Typography>
      </Stack>
      <Stack gap={1}>
        <LocalShippingOutlinedIcon fontSize='small'/>
        <Typography variant='body2'>تحویل و بازگشت</Typography>
      </Stack>
      <Stack gap={1}>
        <MailOutlineIcon fontSize='small'/>
        <Typography variant='body2'>در مورد این محصول بپرسید</Typography>
      </Stack>
    </Stack>
    <Box m={2}>
        <Image src={img}/>
    </Box>
    </>
  );
};
export default Modals;
