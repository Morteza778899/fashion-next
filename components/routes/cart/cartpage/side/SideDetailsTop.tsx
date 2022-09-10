import { Button, Stack, Typography } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";
import { TomanIcon } from "../../../../icon/myIcons";
import { FC } from "react";
interface Iprops {
  empty: boolean;
}
const SideDetailsTop: FC<Iprops> = ({ empty }) => {
  return (
    <>
      <Stack
        direction="column"
        sx={{
          bgcolor: "secondary.main",
          textAlign: "center",
          py: 3,
          color: "white",
          width: 1,
        }}
      >
        <Typography variant="h4" fontWeight={900}>
          50% تخفیـــفــــــــ
        </Typography>
        <Typography variant="h5" fontStyle="italic">
          فقط امروز!
        </Typography>
      </Stack>
      <Button
        size="large"
        variant="contained"
        color="info"
        sx={{ width: "fit-content" }}
      >
        <LoopIcon fontSize="small" sx={{ ml: 1 }} />
        <Typography>بروزرسانی سبد</Typography>
      </Button>
      <Stack justifyContent="space-between" width={1}>
        <Typography variant="h5">جمع</Typography>
        <Stack gap={1} pt={0.8}>
          <Typography variant="h5">{empty ? "0" : "475.000"}</Typography>
          <TomanIcon fontSize="large" sx={{ mt: 0.5 }} />
        </Stack>
      </Stack>
      <Button variant="contained" size="large" disabled={empty} fullWidth>
        پرداخت
      </Button>
    </>
  );
};
export default SideDetailsTop;
