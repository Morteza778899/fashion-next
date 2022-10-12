import { Button, Grid } from "@mui/material"

const Tags = () => {
    return (
        <Grid
            direction="row-reverse"
            sx={{
                my: 3,
                "& button": {
                    whiteSpace: "nowrap",
                    m:1
                },
                "& svg": {
                    width: 15,
                    height: 15,
                    ml: 0.6,
                },
            }}
        >
            <Button size="small" variant="contained" color='info' >زنانه</Button>
            <Button size="small" variant="contained" color='info' >خاکستری</Button>
            <Button size="small" variant="contained" color='info' >جین</Button>
            <Button size="small" variant="contained" color='info' >پارچه‌ای</Button>
            <Button size="small" variant="contained" color='info' >مجلسی</Button>
            <Button size="small" variant="contained" color='info' >آبی</Button>
            <Button size="small" variant="contained" color='info' >جشنواره</Button>
            <Button size="small" variant="contained" color='info' >مناسبتی</Button>
            <Button size="small" variant="contained" color='info' >مدل جدید</Button>
            <Button size="small" variant="contained" color='info' >بهتذین نمره</Button>
            <Button size="small" variant="contained" color='info' >کیفیت خوب</Button>
            <Button size="small" variant="contained" color='info' >تابستانه</Button>
            <Button size="small" variant="contained" color='info' >دارای تخفیف</Button>
        </Grid>
    )
}
export default Tags