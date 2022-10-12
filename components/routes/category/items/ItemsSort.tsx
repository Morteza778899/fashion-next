import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react";
import TableRowsIcon from "@mui/icons-material/TableRows";
import WindowIcon from "@mui/icons-material/Window";

interface Iprops {
  setGrid: Dispatch<SetStateAction<string>>;
  grid: string | string[] | undefined;
}

const ItemsSort: FC<Iprops> = ({ grid, setGrid }) => {
  const [itemNum, setItemNum] = useState("12");
  const [sort, setSort] = useState("new");
  const mdWidth = useMediaQuery('(min-width:900px)')
  const handleItemNum = (event: SelectChangeEvent) => {
    setItemNum(event.target.value);
  };
  const handleSort = (event: SelectChangeEvent) => {
    setSort(event.target.value);
  };
  const handleGrid = (
    event: React.MouseEvent<HTMLElement>,
    newGrid: string | null
  ) => {
    if (newGrid !== null) {
      setGrid(newGrid);
    }
  };
  return (
    <Stack gap={3} alignItems="center" justifyContent="space-between">
      <Stack>
        <ToggleButtonGroup
          value={grid}
          exclusive
          onChange={handleGrid}
          aria-label="text grid"
        >
          <ToggleButton value="vertical" aria-label="left aligned">
            <TableRowsIcon
              sx={{
                transform: "rotate(90deg)",
              }}
            />
          </ToggleButton>
          {mdWidth && (
            <ToggleButton value="window" aria-label="centered">
              <WindowIcon />
            </ToggleButton>
          )}
          <ToggleButton value="horizontal" aria-label="right aligned">
            <TableRowsIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
      {mdWidth && (
        <>
          <Stack alignItems="center" gap={1}>
            <FormControl variant="filled" sx={{ width: 70 }}>
              <Select
                value={itemNum}
                onChange={handleItemNum}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="12">12</MenuItem>
                <MenuItem value="24">24</MenuItem>
                <MenuItem value="48">48</MenuItem>
              </Select>
            </FormControl>
            <Typography>تعداد نمایش:</Typography>
          </Stack>
          <Stack alignItems="center" gap={1}>
            <FormControl variant="filled" sx={{ width: 120 }}>
              <Select value={sort} onChange={handleSort}>
                <MenuItem value="new">جدیدترین</MenuItem>
                <MenuItem value="price">قیمت</MenuItem>
                <MenuItem value="rate">امتیاز</MenuItem>
              </Select>
            </FormControl>
            <Typography> مرتب سازی:</Typography>
          </Stack>
        </>
      )}
      <Typography variant="body2">تعداد کل آیتم ها (32)</Typography>
    </Stack>
  );
};
export default ItemsSort;
