import { Box, List, ListItemButton, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useState } from "react";
import AccountMenu from "./AccountMenu";
import CategoryMenu from "./CategoryMenu";
import CartMenu from "./CartMenu";
import Link from "next/link";

const PagesMenu = () => {
  const [accountMenuStatus, setAccountMenuStatus] = useState(false);
  const [categoryMenuStatus, setCategoryMenuStatus] = useState(false);
  const [cartMenuStatus, setCartMenuStatus] = useState(false);
  return (
    <Box
      className="pages-menu"
      sx={{
        top: 70,
        right: 0,
        position: "absolute",
        bgcolor: "white",
        width: 250,
        color: "black",
        boxShadow: "0px 0px 10px #e9e9e9",
        zIndex: 2000,
        "& ul": {
          m: 1,
          mx: 3,
        },
        "& .MuiListItemButton-root": {
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          alignItems: "end",
          overflow: "hidden",
          py: 0.5,
          px: 0,
          "& .MuiTypography-root": {
            transition: ".3s transform",
            px: 0.5,
          },
          "& p:not(.menu)": {
            "::before": {
              display: "block",
              position: "absolute",
              right: "-12px",
              content: '""',
              backgroundImage: `url('/image/chevron-right.svg')`,
              transform: "rotate(180deg)",
              backgroundSize: "16px 16px",
              height: "16px",
              width: "16px",
              mt: "6px",
            },
          },
          ":hover": {
            "& .MuiTypography-root": {
              transform: "translateX(-15px)",
            },
          },
        },
      }}
    >
      <List>
        <Box
          sx={{ position: "relative" }}
          onMouseOver={() => setAccountMenuStatus(true)}
          onMouseLeave={() => setAccountMenuStatus(false)}
        >
          <ListItemButton>
            <Typography className="menu">اکانت</Typography>
            <ChevronLeftIcon />
          </ListItemButton>
          {accountMenuStatus && <AccountMenu />}
        </Box>
        <Box
          sx={{ position: "relative" }}
          onMouseOver={() => setCategoryMenuStatus(true)}
          onMouseLeave={() => setCategoryMenuStatus(false)}
        >
          <ListItemButton>
            <Typography className="menu">صفحه دسته بندی</Typography>
            <ChevronLeftIcon />
          </ListItemButton>
          {categoryMenuStatus && <CategoryMenu />}
        </Box>
        <Box
          sx={{ position: "relative" }}
          onMouseOver={() => setCartMenuStatus(true)}
          onMouseLeave={() => setCartMenuStatus(false)}
        >
          <ListItemButton>
            <Typography className="menu">سبد خرید و پرداخت</Typography>
            <ChevronLeftIcon />
          </ListItemButton>
          {cartMenuStatus && <CartMenu />}
        </Box>
        <ListItemButton>
          <Typography>سوالات متداول</Typography>
        </ListItemButton>
        <Link href="/about-us">
          <ListItemButton>
            <Typography>درباره‌ی ما</Typography>
          </ListItemButton>
        </Link>
        <Link href="/contact-us">
          <ListItemButton>
            <Typography>ارتباط با ما</Typography>
          </ListItemButton>
        </Link>
        <ListItemButton>
          <Typography>گالری</Typography>
        </ListItemButton>
        <Link href="/404">
          <ListItemButton>
            <Typography>صفحه 404</Typography>
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );
};
export default PagesMenu;
