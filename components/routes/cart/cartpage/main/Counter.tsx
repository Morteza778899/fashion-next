import { IconButton, Stack, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface Iprops {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
}

const Counter: FC<Iprops> = ({ count, setCount }) => {
  return (
    <Stack
      gap={1}
      alignItems="center"
      sx={{
        justifyContent:{xs:'flex-end',sm:'center'},
        px:2,
        "& button": {
          height: "fit-content",
          bgcolor: "whitesmoke",
          "& svg": {
            fill: "black",
          },
        },
      }}
    >
      <IconButton size="small" onClick={() => count > 1 && setCount(count - 1)}>
        <RemoveIcon fontSize="small" />
      </IconButton>
      <Typography sx={{ p: {xs:.5,sm:1}, px: {xs:1,sm:2}, bgcolor: "whitesmoke", borderRadius: 2 }}>
        {count}
      </Typography>
      <IconButton size="small" onClick={() => count < 9 && setCount(count + 1)}>
        <AddIcon fontSize="small" />
      </IconButton>
    </Stack>
  );
};
export default Counter;
