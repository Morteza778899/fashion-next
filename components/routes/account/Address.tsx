import { Box, Grid, Stack, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { FC } from "react";

interface Iprops {
  title: string;
}

const Address: FC<Iprops> = ({ title }) => {
  return (
    <Grid item xs={6} sx={{ px: 3, py: 1 }}>
      <Box
        sx={{
          bgcolor: "whitesmoke",
          "& .MuiTypography-body2": {
            mx: 1,
          },
          "& > div": {
            alignItems: "center",
            flexDirection: "row-reverse",
          },
          p: 3,
        }}
      >
        <Typography variant="h6" sx={{ pb: 2 }}>{title}</Typography>
        <Typography variant="body2">ایران - تهران - بلوار فلانی</Typography>
        <Typography variant="body2">میدان فلان - ساختمان فلان</Typography>
        <Typography variant="body2">نرسیده به فلا جا و پلاک 200</Typography>
        <Stack justifyContent="space-between">
          <Stack
            sx={{
              mt: 2,
              width: "fit-content",
              cursor: "pointer",
              ":hover": {
                color: "primary.main",
              },
            }}
          >
            <Typography variant="body2">حذف</Typography>
            <DeleteIcon fontSize="small" />
          </Stack>
          <Stack
            sx={{
              mt: 2,
              width: "fit-content",
              cursor: "pointer",
              ":hover": {
                color: "primary.main",
              },
            }}
          >
            <Typography variant="body2">ویرایش</Typography>
            <EditIcon fontSize="small" />
          </Stack>
        </Stack>
      </Box>
    </Grid>
  );
};
export default Address;
