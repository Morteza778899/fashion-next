import { Box, Stack, Typography } from "@mui/material";
import { Circle } from "rc-progress";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { BarLoader } from "react-spinners";

interface Iprops {
  setNum: Dispatch<SetStateAction<number>>;
  num: number;
  circleFill: number;
}
const LoadMore: FC<Iprops> = ({ num, setNum, circleFill }) => {
  const [hover, setHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const clickHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setNum(num + 4); // add 4 item for every click
    }, 2000);
  };
  return (
    <Stack justifyContent="center">
      {loading ? (
        <Box sx={{ my: 4 }}>
          <BarLoader color="#17c6aa" width={150} />
        </Box>
      ) : (
        <Box
          sx={{
            position: "relative",
            width: 120,
            height: 120,
            cursor: "pointer",
          }}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onClick={clickHandler}
        >
          <Circle
            percent={circleFill}
            trailWidth={4}
            strokeWidth={4}
            strokeColor="#17c6aa"
          />
          <Typography
            sx={{
              position: "absolute",
              width: "fit-content",
              height: "fit-content",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              mx: "auto",
              my: "auto",
            }}
            variant="body2"
          >
            {hover ? "4 تا بیشتر کن" : "نمایش بیشتر"}
          </Typography>
        </Box>
      )}
    </Stack>
  );
};
export default LoadMore;
