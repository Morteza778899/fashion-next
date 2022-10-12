import { Box, Divider, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import AddLocationAltTwoToneIcon from '@mui/icons-material/AddLocationAltTwoTone';
import PhoneInTalkTwoToneIcon from '@mui/icons-material/PhoneInTalkTwoTone';
import QueryBuilderTwoToneIcon from '@mui/icons-material/QueryBuilderTwoTone';
import ContactSupportTwoToneIcon from "@mui/icons-material/ContactSupportTwoTone";

const Information = () => {
  const lgWidth=useMediaQuery('(min-width:1200px)')
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", mt: 10 }}>
      <Typography variant="h4" textAlign="center">
        اطلاعات ما
      </Typography>
      <Grid
        container
        sx={{
          "& svg": {
            width: 60,
            height: 60,
            fill: '#637381b3',
          },
          "& > div": {
            p: { xs: 1, sm: 2 },
            textAlign: "center",
            "& p": {
              p: 1,
            },
            "& h6": {
              opacity: .8
            },
          },
        }}
        justifyContent="space-around"
      // divider={<Divider orientation="vertical" sx={{my:4}} flexItem />}
      >
        <Grid item lg sm={6} xs={12}>
          <Stack alignItems={'center'} justifyContent='center'>
            <AddLocationAltTwoToneIcon />
            <Box sx={{ m: 2 }}>
              <Typography variant="body1">آدرس</Typography>
              <Typography variant="subtitle2">
                تهران، خیابان امام حسین
              </Typography>
              <Typography variant="subtitle2">
                ساختمان خیام، واحد 203
              </Typography>
            </Box>
          </Stack>
        </Grid>
        {lgWidth&&<Divider orientation="vertical" sx={{my:4}} flexItem />}
        <Grid item lg sm={6} xs={12}>
          <Stack alignItems={'center'} justifyContent='center'>
            <PhoneInTalkTwoToneIcon />
            <Box sx={{ m: 2 }}>
              <Typography variant="body1">تلفن</Typography>
              <Typography variant="subtitle2" sx={{ direction: 'ltr' }}>
                +3 800 555 35 35
              </Typography>
              <Typography variant="subtitle2" sx={{ direction: 'ltr' }}>
                +3 800 555 35 35
              </Typography>
            </Box>
          </Stack>
        </Grid>
        {lgWidth&&<Divider orientation="vertical" sx={{my:4}} flexItem />}
        <Grid item lg sm={6} xs={12}>
          <Stack alignItems={'center'} justifyContent='center'>
            <QueryBuilderTwoToneIcon />
            <Box sx={{ m: 2 }}>
              <Typography variant="body1">ساعت ها</Typography>
              <Typography variant="subtitle2">
                ساعت کاری: 7 روز در هفته
              </Typography>
              <Typography variant="subtitle2">
                09:00 صبح تا 5:00 بعد از ظهر
              </Typography>
            </Box>
          </Stack>
        </Grid>
        {lgWidth&&<Divider orientation="vertical" sx={{my:4}} flexItem />}
        <Grid item lg sm={6} xs={12}>
          <Stack alignItems={'center'} justifyContent='center'>
            <ContactSupportTwoToneIcon />
            <Box sx={{ m: 2 }}>
              <Typography variant="body1">راه ارتباطی</Typography>
              <Typography variant="subtitle2" sx={{ direction: 'ltr' }}>
                @morteza_778899
              </Typography>
              <Typography variant="subtitle2">
                پاسخگویی 24 ساعته
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid >
    </Box>
  );
};
export default Information;
