import { Button, Divider, Grid, Rating, Stack, Typography } from "@mui/material"
const array = [1, 2, 3, 4]
const Reviews = () => {
    return (
        <Stack
            direction="column"
            divider={<Divider orientation="horizontal" sx={{ width: '70%', mx: 'auto' }} flexItem />}
            px={2}
            gap={3}
        >
            {
                array.map(() => (
                    <Stack
                        direction="column"
                        gap={1}
                    >
                        <Rating
                            name="half-rating"
                            readOnly
                            defaultValue={3}
                            precision={0.5}
                            sx={{
                                "& label": {
                                    display: "unset",
                                },
                            }}
                        />
                        <Stack justifyContent='space-between'>

                            <Typography
                                variant="body2"
                                sx={{ color: "gray", fontSize: "0.8rem" }}
                            >
                                مرتضی داداش‌پور در May 25, 2018
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: "gray", ml: 4, fontSize: "0.7rem", ":hover": {
                                        cursor: 'pointer',
                                        textDecoration: 'underline'
                                    }
                                }}>
                                گزارش کامنت
                            </Typography>
                        </Stack>
                        <Typography variant="h6">کیفیتش خوبه، بد نیست</Typography>
                        <Typography
                            variant="body2"
                        >
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله
                            در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                            نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                        </Typography>

                    </Stack>
                ))
            }

        </Stack>
    )
}
export default Reviews