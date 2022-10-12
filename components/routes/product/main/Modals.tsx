import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import StraightenIcon from "@mui/icons-material/Straighten";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import img1 from '../../../../public/image/safecheckout.webp'
import img2 from '../../../../public/image/safecheckout-m.webp'
import Image from "next/image";

const Modals = () => {
  const smWidth = useMediaQuery('(min-width:600px)')
  return (
    <>
      <Stack
        justifyContent='space-between'
        gap={2}
        sx={{
          flexDirection: { xs: 'column', sm: 'row' },
          mx: 2,
          "& p": {
            cursor: "pointer",
            ":hover": {
              color: "primary.main",
              textDecoration: "underline",
            },
          },
        }}
      >
        <Stack gap={1} direction='row-reverse'>
          <StraightenIcon color="primary" fontSize='small' />
          <Typography variant='body2'>راهنمای سایزبندی</Typography>
        </Stack>
        <Stack gap={1} direction='row-reverse'>
          <LocalShippingOutlinedIcon color="primary" fontSize='small' />
          <Typography variant='body2'>تحویل و بازگشت</Typography>
        </Stack>
        <Stack gap={1} direction='row-reverse'>
          <MailOutlineIcon color="primary" fontSize='small' />
          <Typography variant='body2'>در مورد این محصول بپرسید</Typography>
        </Stack>
      </Stack>
      <Box m={2}>
        <Image src={smWidth ? img1 : img2} alt='' />
      </Box>
    </>
  );
};
export default Modals;
