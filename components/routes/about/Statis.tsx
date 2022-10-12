import { Box, Grid, Stack, Typography } from "@mui/material";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";

const Statis = () => {
  const [visible, setVisible] = useState(false);
  console.log(visible);

  return (
    <Box sx={{ backgroundColor: "#fafafa" }}>
      <Box sx={{ maxWidth: 1200, mx: "auto", py: 6 }}>
        <Grid container
          justifyContent="space-around"
          sx={{
            textAlign: "center",
            // flexDirection: { xs: 'column', sm: 'row' },
            "& h5": {
              m: {xs:1,sm:2},
            },
          }}
        >
          <Grid sm={4} direction="column" p={2}>
            <VisibilitySensor
              offset={{ bottom: -70 }}
              onChange={(isVisible: boolean) =>
                isVisible && setVisible(isVisible)
              }
            >
              <Typography variant="h2" fontWeight={900} color="primary">
                {visible ? <CountUp start={0} end={100} duration={2} /> : "0"}%
              </Typography>
            </VisibilitySensor>
            <Typography variant="h5">رضایت مشتری</Typography>
            <Typography variant="body1">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
             و برای شرایط فعلی تکنولوژی مورد نیاز
            </Typography>
          </Grid>
          <Grid sm={4} direction="column" p={2}>
            <VisibilitySensor
              offset={{ bottom: -70 }}
              onChange={(isVisible: boolean) =>
                isVisible && setVisible(isVisible)
              }
            >
              <Typography variant="h2" fontWeight={900} color="primary">
                {visible ? <CountUp start={0} end={2617} duration={2} /> : "0"}
              </Typography>
            </VisibilitySensor>
            <Typography variant="h5">کالای فروخته شده</Typography>
            <Typography variant="body1">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              و برای شرایط فعلی تکنولوژی مورد نیاز
            </Typography>
          </Grid>
          <Grid sm={4} direction="column" p={2}>
            <VisibilitySensor
              offset={{ bottom: -70 }}
              onChange={(isVisible: boolean) =>
                isVisible && setVisible(isVisible)
              }
            >
              <Typography variant="h2" fontWeight={900} color="primary">
                {visible ? <CountUp start={0} end={673} duration={2} /> : "0"}
              </Typography>
            </VisibilitySensor>
            <Typography variant="h5">تعداد مشتریان</Typography>
            <Typography variant="body1">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
               برای شرایط فعلی تکنولوژی مورد نیاز
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Statis;
