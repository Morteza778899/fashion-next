import { Box, Divider, Stack, Typography } from "@mui/material";
import AddLocationAltTwoToneIcon from '@mui/icons-material/AddLocationAltTwoTone';
import PhoneInTalkTwoToneIcon from '@mui/icons-material/PhoneInTalkTwoTone';
import QueryBuilderTwoToneIcon from '@mui/icons-material/QueryBuilderTwoTone';
import ContactSupportTwoToneIcon from "@mui/icons-material/ContactSupportTwoTone";

const Information = () => {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", my: 10 }}>
      <Typography variant="h4" textAlign="center">
        اطلاعات ما
      </Typography>
      <Stack
        sx={{
          "& svg": {
            width: 60,
            height: 60,
            fill: '#637381b3',
          },
          "& > div": {
            p: 2,
            alignItems: "center",
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
        divider={<Divider orientation="vertical" sx={{my:4}} flexItem />}
      >
        <Stack>
          <AddLocationAltTwoToneIcon />
          <Box sx={{m:2}}>
            <Typography variant="body1">آدرس</Typography>
            <Typography variant="subtitle2">
              تهران، خیابان امام حسین
            </Typography>
            <Typography variant="subtitle2">
              ساختمان خیام، واحد 203
            </Typography>
          </Box>
        </Stack>
        <Stack>
          <PhoneInTalkTwoToneIcon />
          <Box sx={{m:2}}>
            <Typography variant="body1">تلفن</Typography>
            <Typography variant="subtitle2" sx={{direction:'ltr'}}>
            +3 800 555 35 35
            </Typography>
            <Typography variant="subtitle2" sx={{direction:'ltr'}}>
            +3 800 555 35 35
            </Typography>
          </Box>
        </Stack>
        <Stack>
          <QueryBuilderTwoToneIcon />
          <Box sx={{m:2}}>
            <Typography variant="body1">ساعت ها</Typography>
            <Typography variant="subtitle2">
              ساعت کاری: 7 روز در هفته
            </Typography>
            <Typography variant="subtitle2">
              09:00 صبح تا 5:00 بعد از ظهر
            </Typography>
          </Box>
        </Stack>
        <Stack>
          <ContactSupportTwoToneIcon />
          <Box sx={{m:2}}>
            <Typography variant="body1">راه ارتباطی</Typography>
            <Typography variant="subtitle2" sx={{direction:'ltr'}}>
              @morteza_778899
            </Typography>
            <Typography variant="subtitle2">
              پاسخگویی 24 ساعته
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};
export default Information;
