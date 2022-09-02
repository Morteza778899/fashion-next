import React, { FC } from "react";
import image1 from "../../../../../public/image/three.jpg";
import image2 from "../../../../../public/image/mmenu-bnr-01.webp";
import {
  Box,
  Grid,
  Link,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Image from "next/image";

interface Iprops {
  hoverControler: (x: boolean, y: string) => void;
  hoverStatus: boolean;
  whatHover: string;
}

const HoverMenu: FC<Iprops> = ({ hoverControler, hoverStatus, whatHover }) => {
  return (
    <>
      <Box
        onMouseOver={() => hoverControler(true, whatHover)}
        onMouseLeave={() => hoverControler(false, "")}
        sx={{
          position: "absolute",
          top: 70,
          width: 1,
          bgcolor: "white",
          zIndex: 1,
          display: `${!hoverStatus ? "none" : "unset"}`,
        }}
        className='hoverMenu'
      >
        <Grid
          container
          sx={{
            flexDirection: `${whatHover === "man" && "row-reverse"}`,
            width: 1200,
            mx: "auto",
            px: 4,
            "& ul": {
              mx: 1,
            },
            "& .MuiListItemButton-root": {
              flexDirection: "column",
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
            "& h5": {
              m: 1,
              mx: 3,
            },
          }}
        >
          <Grid item xs={3}>
            <Box
              sx={{
                m: 1,
                overflow: "hidden",
                "& img": {
                  width: '100% !important',
                  mx: "auto !important",
                  transition: ".4s all",
                  cursor: "pointer",
                  ":hover": { transform: "scale(1.1)" },
                },
              }}
            >
              <Image src={whatHover === "woman" ? image1 : image2} />
            </Box>
          </Grid>

          <Grid
            item
            xs={2.25}
            className="animate__animated animate__fadeIn"
            sx={{ animationDelay: ".7s" }}
          >
            <Typography variant="h5" sx={{ fontWeight: 900 }}>
              محبوب‌ترین‌ها
            </Typography>
            <List>
              <ListItemButton>
                <Typography>ژاکت</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>پیراهن</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>بلوز</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>کت و کاپشن</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>دامن</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>شلوار</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>جوراب</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>کفش</Typography>
              </ListItemButton>
            </List>
          </Grid>

          <Grid
            item
            xs={2.25}
            className="animate__animated animate__fadeIn"
            sx={{ animationDelay: ".5s" }}
          >
            <Typography variant="h5" sx={{ fontWeight: 900 }}>
              محبوب‌ترین‌ها
            </Typography>
            <List>
              <ListItemButton>
                <Typography>ژاکت</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>پیراهن</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>بلوز</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>کت و کاپشن</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>دامن</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>شلوار</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>جوراب</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>کفش</Typography>
              </ListItemButton>
            </List>
          </Grid>

          <Grid
            item
            xs={2.25}
            className="animate__animated animate__fadeIn"
            sx={{ animationDelay: ".3s" }}
          >
            <Typography variant="h5" sx={{ fontWeight: 900 }}>
              محبوب‌ترین‌ها
            </Typography>
            <List>
              <ListItemButton>
                <Typography>ژاکت</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>پیراهن</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>بلوز</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>کت و کاپشن</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>دامن</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>شلوار</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>جوراب</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>کفش</Typography>
              </ListItemButton>
            </List>
          </Grid>

          <Grid
            item
            xs={2.25}
            className="animate__animated animate__fadeIn"
            sx={{ animationDelay: ".1s" }}
          >
            <Typography variant="h5" sx={{ fontWeight: 900 }}>
              کاکشن
            </Typography>
            <List>
              <ListItemButton>
                <Typography variant="body1">فروشگاه محله</Typography>
                <Typography variant="subtitle2">
                  در سر تا سر ایران شعبه دارد
                </Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>جشنواره پاییزه</Typography>
                <Typography variant="subtitle2">به پایان رسیده</Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>جشنواره بهاره</Typography>
                <Typography variant="subtitle2">
                  پایان تا تاریخ: 6/11
                </Typography>
              </ListItemButton>
              <ListItemButton>
                <Typography>عیدانه</Typography>
              </ListItemButton>
            </List>
          </Grid>

          <Grid
            item
            container
            sx={{
              mt: -3,
              flexDirection: `${whatHover === "man" && "row-reverse"}`,
            }}
          >
            <Grid item xs={3}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 900,
                  textAlign: whatHover === "man" ? "right" : "left",
                }}
              >
                بهترین‌های قرن جدید
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Box
                sx={{
                  height: 0.65,
                  borderBottom: "1px solid #80808029",
                  mx: 5,
                }}
              ></Box>
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={9}>
              <Link
                href="#"
                underline="none"
                sx={{
                  display: "block",
                  textAlign: "center",
                  mt: 1,
                  mb: 4,
                  fontSize: "1.6rem",
                  color: "black",
                  ":hover": {
                    color: "primary.main",
                    "& .MuiSvgIcon-root": {
                      transform: "translateX(7px)",
                    },
                  },
                  "& .MuiSvgIcon-root": {
                    transition: ".3s all",
                    mx: 0.5,
                    verticalAlign: "middle",
                  },
                }}
              >
                اخبار فروشگاه
                <ArrowRightAltIcon color="primary" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default HoverMenu;
