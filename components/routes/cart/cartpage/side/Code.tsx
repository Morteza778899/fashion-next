import { Button, Stack, TextField, Typography } from "@mui/material";

const Code = () => {
  return (
    <Stack
      direction="column"
      gap={2}
      sx={{
        "& input": {
          py: 2,
        },
      }}
    >
      <Typography variant="body2">
        کد تخفیف دارید؟ پس چند عدد و حروف ترکیبی تصادفی از پس انداز عالی فاصله
        دارید!
      </Typography>
      <TextField id="demo-simple-select-filled" variant="filled" />
      <Button variant="contained" sx={{ width: "fit-content" }}>
        اعمال کد
      </Button>
    </Stack>
  );
};
export default Code;
