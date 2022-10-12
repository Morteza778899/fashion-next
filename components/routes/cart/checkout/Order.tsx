import { Button, Stack, TextField, Typography } from "@mui/material";
import { TomanIcon } from "../../../icon/myIcons";
import { man, woman } from "../../../../public/info/collectionData";
const array = [woman[0], man[0]];

const Order = () => {
  return (
    <Stack direction="column" gap={3} sx={{ mx: 2 }}>
      <Stack
        direction="column"
        gap={2}
        sx={{
          border: "1px solid #eeeeee",
          p: 3,
          px: { xs: 2, sm: 3 }
        }}
      >
        <Typography variant="h6">کد تخفیف</Typography>
        <Typography variant="body2">
          کد تخفیف دارید؟ پس چند عدد و حروف ترکیبی تصادفی از پس انداز عالی فاصله
          دارید!
        </Typography>
        <Stack
          gap={0.5}
          sx={{
            "& input": {
              py: 1.5,
            },
          }}
          justifyContent='flex-end'
        >
          <Button variant="contained" size="small" sx={{whiteSpace:'nowrap'}}>اعمال کد</Button>
          <TextField
            size="small"
            variant="filled"
            placeholder="کد خود را وارد کنید"
          />
        </Stack>
      </Stack>
      <Stack justifyContent="space-between" px={2}>
        <Stack gap={1}>
          <Typography variant="h6">{`000'390`}</Typography>
          <TomanIcon fontSize="large" sx={{ mt: 0.5 }} />
        </Stack>
        <Typography variant="h6">مجموع</Typography>
      </Stack>
      <Button variant='contained' size='large'>پرداخت</Button>
    </Stack>
  );
};
export default Order;
