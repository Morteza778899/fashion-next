import { Box, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { FC, useState } from "react";
import { BarLoader } from "react-spinners";
import { man, other, woman } from "../../../../public/info/collectionData";

import Card from "./Card";

interface Iprops {
  type: string;
}
const Collection: FC<Iprops> = ({ type }) => {
  const [array, setArray] = useState(man);
  const [loading, setLoading] = useState(false);
  const smWidth = useMediaQuery('(min-width:600px)')

  const clickHandler = (arr: typeof man) => {
    if (array !== arr) {
      setLoading(true);
      setArray(arr);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", my: 4 }}>
      {type === "third" ? (
        <Grid container direction="row-reverse">
          {array.map((obj, index) => (
            <Card item={obj} key={index} />
          ))}
        </Grid>
      ) : (
        <Stack sx={{ mx: 2, alignItems: "center" }} direction="column">
          <Box sx={{ my: { xs: 1, sm: 3 } }}>
            <Typography variant="h4" textAlign="center">
              {type === "first" ? "دسته بندی" : "مدل‌های جدید"}
            </Typography>
          </Box>
          {type === "first" ? (
            <>
              <Stack
                gap={5}
                width="fit-content"
                sx={{
                  "& h5,h6": {
                    cursor: "pointer",
                  },
                }}
              >
                <Typography
                  variant={`${smWidth ? 'h5' : 'h6'}`}
                  onClick={() => clickHandler(woman)}
                  sx={{ opacity: array !== woman ? ".5" : "unset" }}
                >
                  زنانه
                </Typography>
                <Typography
                  variant={`${smWidth ? 'h5' : 'h6'}`}
                  onClick={() => clickHandler(man)}
                  sx={{ opacity: array !== man ? ".5" : "unset" }}
                >
                  مردانه
                </Typography>
                <Typography
                  variant={`${smWidth ? 'h5' : 'h6'}`}
                  onClick={() => clickHandler(other)}
                  sx={{ opacity: array !== other ? ".5" : "unset" }}
                >
                  متفرقه
                </Typography>
              </Stack>
              {loading ? (
                <Box sx={{ height: 465, pt: 2, mt: { xs: 0, sm: 4 } }}>
                  <BarLoader color="#17c6aa" width={150} />
                </Box>
              ) : (
                <Grid container sx={{ mt: { xs: 0, sm: 4 } }} direction="row-reverse">
                  {array.map((obj, index) => (
                    <Card item={obj} key={index} />
                  ))}
                </Grid>
              )}
            </>
          ) : (
            <>
              <Typography variant="body1" className="hurryUP">
                زود باشید!!! فرصت محدوده
              </Typography>
              {loading ? (
                <Box sx={{ height: 465, pt: 2, mt: { xs: 0, sm: 4 } }}>
                  <BarLoader color="#17c6aa" width={150} />
                </Box>
              ) : (
                <Grid container sx={{ mt: { xs: 0, sm: 4 } }} direction="row-reverse">
                  {woman.map((obj, index) => (
                    <Card item={obj} key={index} />
                  ))}
                </Grid>
              )}
            </>
          )}
        </Stack>
      )}
    </Box>
  );
};
export default Collection;
