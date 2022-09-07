import { Box, List, ListItemButton, Typography } from "@mui/material";
import Link from "next/link";

const AccountMenu = () => {
  return (
    <Box
      className="pages-menu"
      sx={{
        top: 0,
        right: 200,
        position: "absolute",
        bgcolor: "white",
        width: 250,
        color: "black",
        boxShadow: "0px 0px 10px #e9e9e9",
        "& ul": {
          m: 1,
          mx: 3,
        },
        "& .MuiListItemButton-root": {
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          alignItems: "end",
          py: 0.5,
          overflow: "hidden",
          px: 0,
          "& .MuiTypography-root": {
            transition: ".3s transform",
            px: 0.5,
          },
          "& p": {
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
        <Link href="/login">
          <ListItemButton>
            <Typography>ورود</Typography>
          </ListItemButton>
        </Link>
        <Link href="/register">
          <ListItemButton>
            <Typography>ثبت نام</Typography>
          </ListItemButton>
        </Link>
        <Link href="/account/details">
          <ListItemButton>
            <Typography>اطاعات اکانت</Typography>
          </ListItemButton>
        </Link>
        <Link href="/account/address">
          <ListItemButton>
            <Typography>آدرس</Typography>
          </ListItemButton>
        </Link>
        <Link href="/account/wishlist">
          <ListItemButton>
            <Typography>لیست علاقه‌مندی‌ها</Typography>
          </ListItemButton>
        </Link>
        <Link href="/account/history">
          <ListItemButton>
            <Typography>تاریخچه سفارشات</Typography>
          </ListItemButton>
        </Link>
      </List>
    </Box>
  );
};
export default AccountMenu;
