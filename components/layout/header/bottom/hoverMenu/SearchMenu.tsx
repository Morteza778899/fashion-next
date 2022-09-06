import { Box, ClickAwayListener, Stack, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Dispatch, FC, SetStateAction } from "react";

interface Iprops {
  setSearchMenuStatus: Dispatch<SetStateAction<boolean>>;
}

const SearchMenu: FC<Iprops> = ({ setSearchMenuStatus }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 70,
        bgcolor: "white",
        boxShadow: "0px 0px 10px #e9e9e9",
        width: 1,
        "& .MuiInputBase-root": {
          m: 2,
          p: 1,
          ":before": {
            borderBottom: "1px solid #80808040",
          },
          ":hover": {
            ":before": {
              borderBottom: "1px solid #80808040 !important",
            },
          },
        },
        "& svg": {
          width: 50,
          height: 50,
        },
      }}
    >
      <ClickAwayListener onClickAway={() => setSearchMenuStatus(false)}>
        <Stack
          sx={{
            maxWidth: 1200,
            mx: "auto",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            variant="standard"
            placeholder="دنبال چی میگردی؟"
            fullWidth
            sx={{ maxWidth: 500 }}
          />
          <CloseIcon
            sx={{
              mx: 6,
              cursor: "pointer",
              ":hover": { color: "primary.main" },
            }}
            onClick={() => setSearchMenuStatus(false)}
          />
        </Stack>
      </ClickAwayListener>
    </Box>
  );
};
export default SearchMenu;
