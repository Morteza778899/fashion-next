import {
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Comment = () => {
  return (
    <Stack
      direction="column"
      gap={2}
      sx={{
        border: "1px solid #eeeeee",
        p: 3,
        px: { xs: 2, sm: 3 }
      }}
    >
      <Typography variant="h5" mb={2}>
        کامنت سفارشی
      </Typography>
      <TextField
        label="متن مورد نظر خود را اینجا تایپ کنید"
        variant="filled"
        fullWidth
        rows={6}
        multiline
      />
    </Stack>
  );
};
export default Comment;
