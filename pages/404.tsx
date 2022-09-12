import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Anime404 from "../components/animation/components/Anime404";
import BasicBreadcrumbs from "../components/layout/BasicBreadcrumbs";

const Custom404Page = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.replace("/");
  };
  return (
    <>
    <BasicBreadcrumbs routerName="/صفحه‌ 404"/>
    <Stack direction="column" sx={{ alignItems: "center", my: 8 }}>
      <Anime404 />
      <Typography variant="h5">صفحه مورد نظر پیدا نشد</Typography>
      <Button variant="contained" sx={{ my: 3 }} onClick={clickHandler}>
        برگشت به صفحه اصلی
      </Button>
    </Stack>
    </>
  );
};
export default Custom404Page;
