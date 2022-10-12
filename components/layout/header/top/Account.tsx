import {
  Box,
  Button,
  ClickAwayListener,
  Drawer,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ErrorIcon from "@mui/icons-material/Error";
import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";
import Link from "next/link";

interface Iprops {
  open: boolean;
  openHandler: (X: boolean) => void;
}

const Account: FC<Iprops> = ({ open, openHandler }) => {
  return (
    <Drawer anchor="left" open={open}>
      <ClickAwayListener onClickAway={() => openHandler(false)}>
        <Box
          sx={{
            width: 480,
            height: 1,
            p: 5,
            px: 8,
            "& p": {
              fontSize: "1.1rem",
            },
          }}
        >
          <Stack
            direction="column"
            alignItems="flex-end"
            position="relative"
            sx={{
              "& .css-1d9cypr-MuiStack-root": {
                m: 1,
                cursor: "pointer",
                ":hover": {
                  color: "primary.main",
                },
                "& .MuiSvgIcon-root": {
                  mx: 1,
                },
              },
            }}
          >
            <IconButton
              onClick={() => openHandler(false)}
              sx={{ position: "absolute", left: 0, color: "black" }}
            >
              <CloseIcon />
            </IconButton>
            <Link href="/register">
              <Stack
                direction="row"
                alignItems="center"
                onClick={() => openHandler(false)}
              >
                <Typography variant="body1">ورود</Typography>
                <LoginIcon fontSize="small" />
              </Stack>
            </Link>
            <Link href="/login">
              <Stack
                direction="row"
                alignItems="center"
                onClick={() => openHandler(false)}
              >
                <Typography variant="body1">ثبت‌نام</Typography>
                <PermIdentityIcon fontSize="small" />
              </Stack>
            </Link>
            <Link href="#">
              <Stack
                direction="row"
                alignItems="center"
                onClick={() => openHandler(false)}
              >
                <Typography variant="body1">پرداخت</Typography>
                <CreditCardIcon fontSize="small" />
              </Stack>
            </Link>
            <Box
              sx={{
                my: 6,
                width: 1,
              }}
            >
              <form>
                <Stack
                  direction="column"
                  alignItems="flex-end"
                  gap={1}
                  sx={{
                    "& p": { fontSize: ".75rem" },
                    "& input": { p: 2, px: 1 },
                  }}
                >
                  <Typography variant="h6" fontWeight={900} mb={2}>
                    ورود سریع
                  </Typography>
                  <TextField
                    id="filled-basic"
                    size="small"
                    error
                    helperText="پر کردن این فیلد الزامی میباشد"
                    placeholder="ایمیل خود را وارد کنید"
                    variant="filled"
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="start">
                          <ErrorIcon sx={{ mb: 2, ml: 1 }} color="error" />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <TextField
                    id="filled-basic"
                    size="small"
                    placeholder="رمز خود را وارد کنید"
                    variant="filled"
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    sx={{ mt: 2, px: 6 }}
                    size="large"
                  >
                    ورود
                  </Button>
                </Stack>
              </form>
            </Box>
          </Stack>
        </Box>
      </ClickAwayListener>
    </Drawer>
  );
};
export default Account;
