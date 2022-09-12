import {
  Box,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  VimeoIcon,
} from "../../icon/myIcons";
import logo from "../../../public/image/digikala.jpg";
import google from "../../../public/image/google-pay.png";
import apple from "../../../public/image/apple-pay.png";
import visa from "../../../public/image/visa-logo-gray.png";
import Image from "next/image";
import Link from "next/link";

const FooterBottom = () => {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: "auto",
        my: 6,
        mt: 10,
        "& li p": {
          cursor: "pointer",
          transition: ".3s all",
          ":hover": { color: "primary.dark", letterSpacing: 1 },
        },
        "& li": {
          justifyContent: "right",
          px: 0,
          py: 0.8,
        },
      }}
      className="bottom-footer"
    >
      <Stack gap={1} justifyContent="right">
        <Box sx={{ width: 1 }}>
          <Typography component="h6" fontWeight={900}>
            روش‌های پرداخت مطمئن
          </Typography>
          <Stack sx={{ py: 3 }} gap={2} justifyContent="flex-end">
            <Box sx={{ width: 60 }}>
              <Image src={google} />
            </Box>
            <Box sx={{ width: 60, mt: 0.3 }}>
              <Image src={visa} />
            </Box>
            <Box sx={{ width: 60 }}>
              <Image src={apple} />
            </Box>
          </Stack>
        </Box>

        <Box sx={{ width: 1 }}>
          <Typography component="h6" fontWeight={900}>
            جزئیات اکانت
          </Typography>
          <List>
            <ListItem>
              <Link href="/account/details">
                <Typography variant="body2">حساب من</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/cart">
                <Typography variant="body2">مشاهده سبد خرید</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/account/wishlist">
                <Typography variant="body2">لیست علاقه‌مندی‌ها</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/account/history">
                <Typography variant="body2">وضعیت سفارش</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/account/history">
                <Typography variant="body2">پیگیری سفارش</Typography>
              </Link>
            </ListItem>
          </List>
        </Box>

        <Box sx={{ width: 1 }}>
          <Typography component="h6" fontWeight={900}>
            اطلاعات
          </Typography>
          <List>
            <ListItem>
              <Link href="/about-us">
                <Typography variant="body2">درباره ما</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/contact-us">
                <Typography variant="body2">ارتباط با ما</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Typography variant="body2">شرایط و ضوابط</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Typography variant="body2">بازگشت و تعویض</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="#">
                <Typography variant="body2">حمل و نقل و تحویل</Typography>
              </Link>
            </ListItem>
          </List>
        </Box>

        <Stack
          sx={{
            width: 1,
          }}
          direction="column"
          alignItems="flex-end"
        >
          <Box sx={{ width: 150, mb: 4, mt: -2 }}>
            <Image src={logo} alt="logo" />
          </Box>
          <Stack gap={1} sx={{ justifyContent: "right" }}>
            <Link href="#">
              <Typography variant="body2">Example@gmail.com</Typography>
            </Link>
            <Typography variant="body2">ایمیل:</Typography>
          </Stack>
          <Typography variant="body2" sx={{ my: 1 }}>
            ساعات پاسخگویی: 10:00-18:00
          </Typography>
          <Stack
            alignItems="center"
            sx={{
              my: 2,
              "& .MuiIconButton-root": {
                color: "black",
                ":hover": {
                  color: "primary.dark",
                },
              },
            }}
          >
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
        </Stack>
      </Stack>
    </Box>
  );
};
export default FooterBottom;
