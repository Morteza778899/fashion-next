import {
  Box,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { FC, useState } from "react";

interface Iprops {
  children?: React.ReactNode;
}

const AsideMenu: FC<Iprops> = ({ children }) => {
  const router = useRouter();
  const arrayPath = router.asPath.split("/");
  const [page, setPage] = useState(arrayPath[arrayPath.length - 1]);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newPage: string | null
  ) => {
    if (newPage !== null) {
      setPage(newPage);
      router.push(`/account/${newPage}`);
    }
  };

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", my: 6 }}>
      <Grid container direction="row-reverse" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Grid
          item
          sx={{
            pl: {xs:0,md:3},
            pb: {xs:4,md:0},
            "& .MuiToggleButton-root": {
              justifyContent: "flex-start",
            },
            "& .Mui-selected": {
              color: "white !important",
              bgcolor: "#17c6aa !important",
              ":hover": {
                bgcolor: "#17c6aa !important",
              },
            },
          }}
          xs={12}
          md={3}
        >
          <ToggleButtonGroup
            orientation="vertical"
            value={page}
            exclusive
            onChange={handleChange}
            color="primary"
            sx={{ width: 1 }}
          >
            <ToggleButton value="details" aria-label="list">
              <Typography>اطلاعات اکانت</Typography>
            </ToggleButton>
            <ToggleButton value="address" aria-label="module">
              <Typography>آدرس‌های من</Typography>
            </ToggleButton>
            <ToggleButton value="wishlist" aria-label="module">
              <Typography>علاقه‌مندی‌های من</Typography>
            </ToggleButton>
            <ToggleButton value="history" aria-label="quilt">
              <Typography>تاریخچه سفارشات</Typography>
            </ToggleButton>
            <ToggleButton value="review" aria-label="quilt" disabled>
              <Typography>نظرات من</Typography>
            </ToggleButton>
            <ToggleButton value="compare" aria-label="quilt" disabled>
              <Typography>مقایسه محصولات</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        {children}
      </Grid>
    </Box>
  );
};
export default AsideMenu;
