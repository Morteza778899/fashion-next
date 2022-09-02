import { Box, List, ListItem, ListItemText } from "@mui/material";
import React, { FC } from "react";
import { DownIcon } from "../../../icon/myIcons";
interface Iprops {
  hoverControler: (x: boolean, y: string) => void;
}
const HeaderMiddleMenu: FC<Iprops> = ({ hoverControler }) => {
  return (
    <Box sx={{ height: 1 }}>
      <List
        sx={{
          display: "flex",
          p: 0,
          height: 1,
          "& .MuiListItem-root": {
            whiteSpace: "nowrap",
            py: 0,
            "&:hover": {
              color: "primary.main",
              cursor: "pointer",
              "& svg": {
                transform: "rotate(180deg)",
              },
            },
          },
        }}
      >
        <ListItem
          onMouseOver={() => hoverControler(true, "woman")}
          onMouseLeave={() => hoverControler(false, "woman")}
        >
          <DownIcon fontSize="small" sx={{ mt: 0.5 }} />
          <ListItemText primary="زنانه" />
        </ListItem>
        <ListItem
          onMouseOver={() => hoverControler(true, "man")}
          onMouseLeave={() => hoverControler(false, "man")}
        >
          <DownIcon fontSize="small" sx={{ mt: 0.5 }} />
          <ListItemText primary="مردانه" />
        </ListItem>
        <ListItem>
          <DownIcon fontSize="small" sx={{ mt: 0.5 }} />
          <ListItemText primary="صفحات" />
        </ListItem>
        <ListItem>
          <ListItemText primary="خانه" />
        </ListItem>
      </List>
    </Box>
  );
};
export default HeaderMiddleMenu;
