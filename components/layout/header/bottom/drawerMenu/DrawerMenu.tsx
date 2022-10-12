import { Accordion, AccordionDetails, AccordionSummary, Box, ClickAwayListener, Divider, Drawer, List, ListItem, Stack, Tooltip, Typography } from "@mui/material"
import { FC, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative } from "swiper";
import { Swiper as SwiperClass } from 'swiper/types/index';

interface Iprops {
    open: boolean;
    openHandler: (X: boolean) => void;
}

const DrawerMenu: FC<Iprops> = ({ open, openHandler }) => {
    const [swiper, setSwiper] = useState<SwiperClass>();

    return (
        <Drawer anchor="right" open={open}>
            <ClickAwayListener onClickAway={() => openHandler(false)}>
                <Box sx={{ width: 350, height: 1, p: 2, position: 'relative' }}>
                    <CloseIcon onClick={() => openHandler(false)}
                        sx={{ position: 'absolute', left: 0, top: 0, m: 4, mt: 3, cursor: 'pointer' }} />
                    <Stack direction={'column'} mt={4} divider={<Divider orientation="horizontal" flexItem />}>
                        <List sx={{
                            '& li': {
                                cursor: 'pointer',
                                "& p": {
                                    transition: '.3s all',
                                },
                                ":hover": {
                                    "& p": {
                                        color: 'primary.main'
                                    }
                                },
                                ":not(.title)": {
                                    justifyContent: 'space-between',
                                }
                            },
                            "& .swiper-slide": {
                                bgcolor: 'white'
                            }
                        }}>
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                style={{ width: "100%" }}
                                onSwiper={swiper => setSwiper(swiper)}
                                autoHeight
                                allowTouchMove={false}
                                dir="rtl"

                                effect={"creative"}
                                creativeEffect={{
                                    prev: {
                                        translate: ['100%', 0, 0],
                                    },
                                    next: {
                                        translate: ['100%', 0, 0],
                                    },
                                }}
                                modules={[EffectCreative]}
                            >
                                <SwiperSlide>
                                    <Link href='/'>
                                        <ListItem >
                                            <Typography>خانه</Typography>
                                        </ListItem>
                                    </Link>
                                    <ListItem onClick={() => swiper?.slideTo(1)}>
                                        <Typography>صفحات</Typography>
                                        <ChevronLeftIcon />
                                    </ListItem>
                                    <Link href='/category/vertical'>
                                        <ListItem sx={{
                                            "& .MuiTooltip-tooltip": {
                                                py: .3,
                                                fontSize: "0.65rem",
                                                bgcolor: "primary.main",
                                            },
                                        }}>
                                            <Tooltip
                                                title="جشنواره"
                                                placement="left"
                                                open
                                                PopperProps={{
                                                    disablePortal: true,
                                                }}
                                            >
                                                <Typography>محصولات</Typography>
                                            </Tooltip>
                                        </ListItem>
                                    </Link>
                                    <ListItem onClick={() => swiper?.slideTo(5)}>
                                        <Typography>محصولات جدید</Typography>
                                        <ChevronLeftIcon />
                                    </ListItem>
                                    <ListItem>
                                        <Typography>خرید</Typography>
                                    </ListItem>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ListItem className="title" onClick={() => swiper?.slideTo(0)}
                                        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', px: 0, mb: 1 }}>
                                        <ChevronRightIcon />
                                        <Typography fontSize={'1.2rem'}>صفحات</Typography>
                                    </ListItem>
                                    <Link href='/product'>
                                        <ListItem>
                                            <Typography>صفحه محصول</Typography>
                                        </ListItem>
                                    </Link>
                                    <ListItem onClick={() => swiper?.slideTo(2)}>
                                        <Typography>اکانت</Typography>
                                        <ChevronLeftIcon />
                                    </ListItem>
                                    <ListItem onClick={() => swiper?.slideTo(3)}>
                                        <Typography>صفحه دسته بندی</Typography>
                                        <ChevronLeftIcon />
                                    </ListItem>
                                    <ListItem onClick={() => swiper?.slideTo(4)}>
                                        <Typography>سبد خرید و پرداخت</Typography>
                                        <ChevronLeftIcon />
                                    </ListItem>
                                    <ListItem>
                                        <Typography>سوالات متداول</Typography>
                                    </ListItem>
                                    <Link href='/about-us'>
                                        <ListItem>
                                            <Typography>درباره‌ی ما</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/contact-us'>
                                        <ListItem>
                                            <Typography>ارتباط با ما</Typography>
                                        </ListItem>
                                    </Link>
                                    <ListItem>
                                        <Typography>گالری</Typography>
                                    </ListItem>
                                    <Link href='/404'>
                                        <ListItem>
                                            <Typography>صفحه 404</Typography>
                                        </ListItem>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ListItem className="title" onClick={() => swiper?.slideTo(1)}
                                        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', px: 0, mb: 1 }}>
                                        <ChevronRightIcon />
                                        <Typography fontSize={'1.2rem'}>اکانت</Typography>
                                    </ListItem>
                                    <Link href='/login'>
                                        <ListItem>
                                            <Typography>ورود</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/register'>
                                        <ListItem>
                                            <Typography>ثبت نام</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/account/details'>
                                        <ListItem>
                                            <Typography>اطلاعات اکانت</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/account/address'>
                                        <ListItem>
                                            <Typography>آدرس</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/account/wishlist'>
                                        <ListItem>
                                            <Typography>لیست علاقه‌مندی‌ها</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/account/history'>
                                        <ListItem>
                                            <Typography>تاریخچه سفارشات</Typography>
                                        </ListItem>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ListItem className="title" onClick={() => swiper?.slideTo(1)}
                                        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', px: 0, mb: 1 }}>
                                        <ChevronRightIcon />
                                        <Typography fontSize={'1.2rem'}>صفحه دسته بندی</Typography>
                                    </ListItem>
                                    <Link href='/category/vertical'>
                                        <ListItem>
                                            <Typography>دسته‌بندی عمودی</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/category/horizontal'>
                                        <ListItem>
                                            <Typography>دسته‌بندی لیستی</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/category/window'>
                                        <ListItem>
                                            <Typography>دسته‌بندی پنجره‌ای</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/category/empty'>
                                        <ListItem>
                                            <Typography>دسته‌بندی خالی</Typography>
                                        </ListItem>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ListItem className="title" onClick={() => swiper?.slideTo(1)}
                                        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', px: 0, mb: 1 }}>
                                        <ChevronRightIcon />
                                        <Typography fontSize={'1.2rem'}>سبد خرید و پرداخت</Typography>
                                    </ListItem>
                                    <Link href='/cart'>
                                        <ListItem>
                                            <Typography>سبد خرید</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/cart/empty'>
                                        <ListItem>
                                            <Typography>سبد خرید خالی</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/cart/checkout'>
                                        <ListItem>
                                            <Typography>صفحه پرداخت</Typography>
                                        </ListItem>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ListItem className="title" onClick={() => swiper?.slideTo(0)}
                                        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', px: 0, mb: 1 }}>
                                        <ChevronRightIcon />
                                        <Typography fontSize={'1.2rem'}>محصولات جدید</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography>کفش</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography>پیراهن</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography>ژاکت</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography>ساعت</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography>دامن</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography>شلوار</Typography>
                                    </ListItem>
                                </SwiperSlide>
                            </Swiper>
                        </List>
                        <Box sx={{
                            '.MuiPaper-root': {
                                boxShadow: 'none',
                                "::before": {
                                    backgroundColor: 'unset'
                                }
                            },
                            '& .MuiAccordionSummary-content.Mui-expanded': {
                                minHeight: 'unset',
                                m: '12px 0px !important'
                            },
                            "& .MuiAccordionSummary-root": {
                                minHeight: 'unset !important',
                            },
                            "& .MuiPaper-root.Mui-expanded": {
                                m: 0
                            },
                            "& .MuiAccordionDetails-root": {
                                p: .5,
                                px: 3,
                            }
                        }}>
                            <Accordion dir="rtl">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>فارسی</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ color: 'primary.main' }}>فارسی</Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ opacity: .6 }}>عربی</Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ opacity: .6 }}>English</Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion dir="rtl">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>حالت روز</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ color: 'primary.main' }}>حالت روز</Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ opacity: .6 }}>حالت شب</Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ opacity: .6 }}>حالت پیش فرض</Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    </Stack>
                </Box>
            </ClickAwayListener>
        </Drawer>
    )
}
export default DrawerMenu