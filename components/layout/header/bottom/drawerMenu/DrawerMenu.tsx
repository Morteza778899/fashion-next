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
        <Drawer anchor="right" open={open} sx={{ "& .MuiPaper-root": { width: 1, maxWidth: 350 } }}>
            <ClickAwayListener onClickAway={() => openHandler(false)}>
                <Box sx={{ width: 1, height: 1, p: 2, position: 'relative' }}>
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
                                            <Typography>????????</Typography>
                                        </ListItem>
                                    </Link>
                                    <ListItem onClick={() => swiper?.slideTo(1)}>
                                        <Typography>??????????</Typography>
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
                                                title="??????????????"
                                                placement="left"
                                                open
                                                PopperProps={{
                                                    disablePortal: true,
                                                }}
                                            >
                                                <Typography>??????????????</Typography>
                                            </Tooltip>
                                        </ListItem>
                                    </Link>
                                    <ListItem onClick={() => swiper?.slideTo(5)}>
                                        <Typography>?????????????? ????????</Typography>
                                        <ChevronLeftIcon />
                                    </ListItem>
                                    <ListItem>
                                        <Typography>????????</Typography>
                                    </ListItem>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ListItem className="title" onClick={() => swiper?.slideTo(0)}
                                        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', px: 0, mb: 1 }}>
                                        <ChevronRightIcon />
                                        <Typography fontSize={'1.2rem'}>??????????</Typography>
                                    </ListItem>
                                    <Link href='/product'>
                                        <ListItem>
                                            <Typography>???????? ??????????</Typography>
                                        </ListItem>
                                    </Link>
                                    <ListItem onClick={() => swiper?.slideTo(2)}>
                                        <Typography>??????????</Typography>
                                        <ChevronLeftIcon />
                                    </ListItem>
                                    <ListItem onClick={() => swiper?.slideTo(3)}>
                                        <Typography>???????? ???????? ????????</Typography>
                                        <ChevronLeftIcon />
                                    </ListItem>
                                    <ListItem onClick={() => swiper?.slideTo(4)}>
                                        <Typography>?????? ???????? ?? ????????????</Typography>
                                        <ChevronLeftIcon />
                                    </ListItem>
                                    <ListItem>
                                        <Typography>???????????? ????????????</Typography>
                                    </ListItem>
                                    <Link href='/about-us'>
                                        <ListItem>
                                            <Typography>????????????????? ????</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/contact-us'>
                                        <ListItem>
                                            <Typography>???????????? ???? ????</Typography>
                                        </ListItem>
                                    </Link>
                                    <ListItem>
                                        <Typography>??????????</Typography>
                                    </ListItem>
                                    <Link href='/404'>
                                        <ListItem>
                                            <Typography>???????? 404</Typography>
                                        </ListItem>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ListItem className="title" onClick={() => swiper?.slideTo(1)}
                                        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', px: 0, mb: 1 }}>
                                        <ChevronRightIcon />
                                        <Typography fontSize={'1.2rem'}>??????????</Typography>
                                    </ListItem>
                                    <Link href='/login'>
                                        <ListItem>
                                            <Typography>????????</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/register'>
                                        <ListItem>
                                            <Typography>?????? ??????</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/account/details'>
                                        <ListItem>
                                            <Typography>?????????????? ??????????</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/account/address'>
                                        <ListItem>
                                            <Typography>????????</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/account/wishlist'>
                                        <ListItem>
                                            <Typography>???????? ????????????????????????????</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/account/history'>
                                        <ListItem>
                                            <Typography>?????????????? ??????????????</Typography>
                                        </ListItem>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ListItem className="title" onClick={() => swiper?.slideTo(1)}
                                        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', px: 0, mb: 1 }}>
                                        <ChevronRightIcon />
                                        <Typography fontSize={'1.2rem'}>???????? ???????? ????????</Typography>
                                    </ListItem>
                                    <Link href='/category/vertical'>
                                        <ListItem>
                                            <Typography>??????????????????? ??????????</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/category/horizontal'>
                                        <ListItem>
                                            <Typography>??????????????????? ??????????</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/category/window'>
                                        <ListItem>
                                            <Typography>??????????????????? ?????????????????</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/category/empty'>
                                        <ListItem>
                                            <Typography>??????????????????? ????????</Typography>
                                        </ListItem>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ListItem className="title" onClick={() => swiper?.slideTo(1)}
                                        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', px: 0, mb: 1 }}>
                                        <ChevronRightIcon />
                                        <Typography fontSize={'1.2rem'}>?????? ???????? ?? ????????????</Typography>
                                    </ListItem>
                                    <Link href='/cart'>
                                        <ListItem>
                                            <Typography>?????? ????????</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/cart/empty'>
                                        <ListItem>
                                            <Typography>?????? ???????? ????????</Typography>
                                        </ListItem>
                                    </Link>
                                    <Link href='/cart/checkout'>
                                        <ListItem>
                                            <Typography>???????? ????????????</Typography>
                                        </ListItem>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <ListItem className="title" onClick={() => swiper?.slideTo(0)}
                                        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)', px: 0, mb: 1 }}>
                                        <ChevronRightIcon />
                                        <Typography fontSize={'1.2rem'}>?????????????? ????????</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography>??????</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography>????????????</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography>????????</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography>????????</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography>????????</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography>??????????</Typography>
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
                                    <Typography>??????????</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ color: 'primary.main' }}>??????????</Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ opacity: .6 }}>????????</Typography>
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
                                    <Typography>???????? ??????</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography sx={{ color: 'primary.main' }}>???????? ??????</Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ opacity: .6 }}>???????? ????</Typography>
                                </AccordionDetails>
                                <AccordionDetails>
                                    <Typography sx={{ opacity: .6 }}>???????? ?????? ??????</Typography>
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