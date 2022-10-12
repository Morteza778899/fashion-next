import { Accordion, AccordionDetails, AccordionSummary, Box, IconButton, Stack, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from "next/image";
import google from "../../../public/image/google-pay.png";
import apple from "../../../public/image/apple-pay.png";
import visa from "../../../public/image/visa-logo-gray.png";
import Link from "next/link";
import logo from "../../../public/image/digikala.jpg";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, VimeoIcon } from "../../icon/myIcons";
import { useState } from "react";
import AccordionLayout from "../../routes/category/filter/AccordionLayout";

const FooterBottomXS = () => {
    return (
        <Box sx={{
            mx: 4,
            "& .MuiAccordionSummary-content": {
                py:{xs:1,sm:1.5},
            },
            "& .MuiAccordionDetails-root": {
                py:0,
                "& p": {
                    m: 1,
                    mx: {xs:1,sm:2}
                }
            }
        }}>
            <AccordionLayout title="جزئیات اکانت" firstOpen={false}>
                <Stack direction={'column'}>
                    <Link href="/account/details">
                        <Typography variant="body2">حساب من</Typography>
                    </Link>
                    <Link href="/cart">
                        <Typography variant="body2">مشاهده سبد خرید</Typography>
                    </Link>
                    <Link href="/account/wishlist">
                        <Typography variant="body2">لیست علاقه‌مندی‌ها</Typography>
                    </Link>
                    <Link href="/account/history">
                        <Typography variant="body2">وضعیت سفارش</Typography>
                    </Link>
                    <Link href="/account/history">
                        <Typography variant="body2">پیگیری سفارش</Typography>
                    </Link>
                </Stack>
            </AccordionLayout>

            <AccordionLayout title="اطلاعات" firstOpen={false}>
                <Stack direction={'column'}>
                    <Link href="/about-us">
                        <Typography variant="body2">درباره ما</Typography>
                    </Link>
                    <Link href="/contact-us">
                        <Typography variant="body2">ارتباط با ما</Typography>
                    </Link>
                    <Link href="#">
                        <Typography variant="body2">شرایط و ضوابط</Typography>
                    </Link>
                    <Link href="#">
                        <Typography variant="body2">بازگشت و تعویض</Typography>
                    </Link>
                    <Link href="#">
                        <Typography variant="body2">حمل و نقل و تحویل</Typography>
                    </Link>
                </Stack>
            </AccordionLayout>

            <AccordionLayout title="روش‌های پرداخت مطمئن" firstOpen={false}>
                    <Stack gap={2} justifyContent="flex-start">
                        <Box sx={{ width: 60 }}>
                            <Image src={google} alt='' />
                        </Box>
                        <Box sx={{ width: 60, mt: 0.3 }}>
                            <Image src={visa} alt='' />
                        </Box>
                        <Box sx={{ width: 60 }}>
                            <Image src={apple} alt='' />
                        </Box>
                    </Stack>
            </AccordionLayout>

            <Stack
                sx={{
                    width: 1,
                }}
                direction="column"
                alignItems="center"
            >
                <Box sx={{ width: 150, m: 2 }}>
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
        </Box>
    )
}
export default FooterBottomXS