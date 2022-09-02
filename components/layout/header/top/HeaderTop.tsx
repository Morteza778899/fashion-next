import {
    Box,
    ClickAwayListener,
    Drawer,
    IconButton,
    Link,
    Stack,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import {
    FacebookIcon,
    InstagramIcon,
    LinkedinIcon,
    TwitterIcon,
    UserIcon,
    VimeoIcon,
  } from "../../../icon/myIcons";
  import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
  import Account from "./Account";
  
  const HeaderTop = () => {
    const [open, setOpen] = useState(false);
    const openHandler = (x:boolean) => {
      setOpen(x);
    };
    return (
      <Box sx={{ height: 40, bgcolor: " #282828", color: "white" }}>
        <Box sx={{ height: 1, maxWidth: 1200, mx: "auto", px: 4 }}>
          <Stack sx={{ height: 1 }} justifyContent="space-between">
            <Stack alignItems="center">
              <IconButton>
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton>
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton>
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton>
                <VimeoIcon fontSize="small" />
              </IconButton>
              <IconButton>
                <LinkedinIcon fontSize="small" />
              </IconButton>
            </Stack>
            <Stack gap={5} alignItems="center">
              <Stack
                sx={{
                  ":hover": {
                    color: "primary.main",
                    cursor: "pointer",
                  },
                }}
              >
                <KeyboardArrowDownIcon fontSize="small" sx={{ mt: 0.5 }} />
                <Typography>فارسی</Typography>
              </Stack>
              <Stack
                direction="row"
                sx={{
                  ":hover": {
                    cursor: "pointer",
                    "& p": {
                      color: "primary.main",
                    },
                  },
                }}
                onClick={() => setOpen(true)}
              >
                <Typography>حساب کاربری</Typography>
                <UserIcon sx={{ mx: 1 }} />
              </Stack>
              <Account openHandler={openHandler} open={open} />
            </Stack>
          </Stack>
        </Box>
      </Box>
    );
  };
  export default HeaderTop;
  