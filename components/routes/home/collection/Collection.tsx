import { Box, Stack, Typography } from "@mui/material";
import React, { FC, useState } from "react";
import { BarLoader } from "react-spinners";
import { man, other, woman } from "../../../../public/info/collectionData";

import Card from "./Card";

interface Iprops {
  type: string;
}
const Collection: FC<Iprops> = ({ type }) => {
  const [array, setArray] = useState(woman);
  const [loading, setLoading] = useState(false);

  const clickHandler = (arr: typeof woman) => {
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
      {type === "third" ? null : (
        <Stack sx={{ mx: 2, alignItems: "center" }} direction="column">
          <Box sx={{ my: 3 }}>
            <Typography variant="h4" textAlign="center">
              {type === "first" ? "دسته بندی" : "مدل‌های جدید"}
            </Typography>
          </Box>
          {type === "first" ? (
            <Stack
              gap={5}
              width="fit-content"
              sx={{
                "& h5": {
                  cursor: "pointer",
                },
              }}
            >
              <Typography
                variant="h5"
                onClick={() => clickHandler(woman)}
                sx={{ opacity: array !== woman ? ".5" : "unset" }}
              >
                زنانه
              </Typography>
              <Typography
                variant="h5"
                onClick={() => clickHandler(man)}
                sx={{ opacity: array !== man ? ".5" : "unset" }}
              >
                مردانه
              </Typography>
              <Typography
                variant="h5"
                onClick={() => clickHandler(other)}
                sx={{ opacity: array !== other ? ".5" : "unset" }}
              >
                متفرقه
              </Typography>
            </Stack>
          ) : (
            <Typography variant="body1" className="hurryUP">
              زود باشید!!! فرصت محدوده
            </Typography>
          )}
          {loading ? (
            <Box sx={{ height: 465, mt: 4 }}>
              <BarLoader color="#17c6aa" width={150}/>
            </Box>
          ) : (
            <Stack sx={{ mt: 4 }}>
              {array.map((obj, index) => (
                <Card item={obj} key={index} />
              ))}
            </Stack>
          )}
        </Stack>
      )}
    </Box>
  );
};
export default Collection;
