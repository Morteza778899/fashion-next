import {
  Box,
  Button,
  Checkbox,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
  Typography,
  useMediaQuery,
  Zoom,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import Image, { StaticImageData } from "next/image";

interface Iprops {
  color: string;
  size: string;
  setSize: Dispatch<SetStateAction<string>>;
  setColor: Dispatch<SetStateAction<string>>;
  biegeImages: StaticImageData[];
  blackImages: StaticImageData[];
  redImages: StaticImageData[];
}

const Form: FC<Iprops> = ({
  color,
  size,
  setSize,
  setColor,
  biegeImages,
  blackImages,
  redImages,
}) => {
  const [num, setNum] = useState(1);
  const smWidth = useMediaQuery('(min-width:600px)')
  return (
    <>
      <Stack alignItems="center" gap={4} sx={{ m: 2, my: 4 }}>
        <Stack
          flexGrow={1}
          gap={2}
          justifyContent="flex-end"
          sx={{
            "& button": {
              p: 0,
              overflow: "hidden",
            },
            "& .Mui-selected": {
              border: "1px solid black !important",
            },
          }}
        >
          <ToggleButtonGroup
            color="secondary"
            value={color}
            exclusive
            onChange={(e, value) => setColor(value)}
          >
            <Tooltip title="کرمی" TransitionComponent={Zoom} placement="top">
              <ToggleButton
                value="biege"
                selected={color === "biege" ? true : false}
              >
                <Box sx={{ width: 50, cursor: "pointer" }}>
                  <Image src={biegeImages[0]} alt='' />
                </Box>
              </ToggleButton>
            </Tooltip>
            <Tooltip title="سیاه" TransitionComponent={Zoom} placement="top">
              <ToggleButton
                value="black"
                selected={color === "black" ? true : false}
              >
                <Box sx={{ width: 50, cursor: "pointer" }}>
                  <Image src={blackImages[0]} alt='' />
                </Box>
              </ToggleButton>
            </Tooltip>
            <Tooltip title="قرمز" TransitionComponent={Zoom} placement="top">
              <ToggleButton
                value="red"
                selected={color === "red" ? true : false}
              >
                <Box sx={{ width: 50, cursor: "pointer" }}>
                  <Image src={redImages[0]} alt='' />
                </Box>
              </ToggleButton>
            </Tooltip>
          </ToggleButtonGroup>
        </Stack>
        <Box height="fit-content">
          <Typography variant="h6" fontWeight={900}>
            رنگ:
          </Typography>
        </Box>
      </Stack>

      <Stack alignItems="center" gap={4} sx={{ m: 2, my: 4 }}>
        <Stack flexGrow={1} gap={2} justifyContent="flex-end">
          <ToggleButtonGroup
            size="small"
            color="secondary"
            value={size}
            exclusive
            onChange={(e, value) => setSize(value)}
          >
            <ToggleButton value="large">
              <Typography>بزرگ</Typography>
            </ToggleButton>
            <ToggleButton value="medium">
              <Typography>متوسط</Typography>
            </ToggleButton>
            <ToggleButton value="small">
              <Typography>کوچک</Typography>
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
        <Box height="fit-content">
          <Typography variant="h6" fontWeight={900}>
            سایز:
          </Typography>
        </Box>
      </Stack>

      <Stack alignItems="center" gap={{ xs: 1, sm: 2 }} sx={{ m: 1, my: 4 }}>
        <Stack sx={{ bgcolor: "#f7f7f8" }} alignItems="center">
          <Typography variant="h5" sx={{ height: "fit-content", px: { xs: 1.5, sm: 3 } }}>
            {num}
          </Typography>
          <Stack
            direction="column"
            sx={{
              "& .MuiIconButton-root": {
                color: "black",
                ":hover": {
                  color: "primary.dark",
                },
              },
            }}
          >
            <IconButton size="small" onClick={() => num < 9 && setNum(num + 1)}>
              <AddIcon fontSize="small" />
            </IconButton>
            <IconButton size="small" onClick={() => num > 1 && setNum(num - 1)}>
              <RemoveIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>

        <Box flexGrow={1} alignSelf="stretch">
          <Button variant="contained" size={`${smWidth ? 'medium' : 'small'}`} sx={{ width: 1, height: 1 }}>
            <Typography variant='h6'>افزودن به سبد خرید</Typography>
          </Button>
        </Box>
        <Box
          sx={{
            "& .MuiCheckbox-root": {
              p: 0,
            },
          }}
        >
          <Checkbox
            icon={<FavoriteBorder fontSize="large" />}
            checkedIcon={<Favorite fontSize="large" />}
            sx={{
              transition: ".3s all",
              ":hover": {
                transform: "rotateY(180deg)",
              },
            }}
            color="secondary"
          />
        </Box>
      </Stack>
    </>
  );
};
export default Form;
