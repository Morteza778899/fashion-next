import { Box, List, ListItem, ListItemText, Tooltip } from "@mui/material";
import Link from "next/link";
import React, { FC, useState } from "react";
import { DownIcon } from "../../../icon/myIcons";
import PagesMenu from "./hoverMenu/PagesMenu";
interface Iprops {
  hoverControler: (x: boolean, y: string) => void;
}
const HeaderMiddleMenu: FC<Iprops> = ({ hoverControler }) => {
  const [pagesMenuStatus, setPagesMenuStatus] = useState<boolean>(false);

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
              "& .icon": {
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
          <DownIcon className="icon" fontSize="small" sx={{ mt: 0.5 }} />
          <ListItemText primary="زنانه" />
        </ListItem>
        <ListItem
          onMouseOver={() => hoverControler(true, "man")}
          onMouseLeave={() => hoverControler(false, "man")}
        >
          <DownIcon className="icon" fontSize="small" sx={{ mt: 0.5 }} />
          <ListItemText primary="مردانه" />
        </ListItem>
        <Link href='/category/vertical'>
          <ListItem
            sx={{
              "& .MuiTooltip-tooltip": {
                mb: "-3px !important",
                mr: -5,
                p: 0,
                px: 0.5,
                fontSize: "0.65rem",
                bgcolor: "primary.main",
                "& .MuiTooltip-arrow:before": {
                  bgcolor: "primary.main",
                },
              },
            }}
          >
            <Tooltip
              title="جشنواره"
              placement="top"
              arrow
              open
              PopperProps={{
                disablePortal: true,
              }}
            >
              <ListItemText primary="محصولات" />
            </Tooltip>
          </ListItem>
        </Link>
        <ListItem
          onMouseOver={() => setPagesMenuStatus(true)}
          onMouseLeave={() => setPagesMenuStatus(false)}
          sx={{ position: "relative" }}
          className="pages-menu)"
        >
          <DownIcon className="icon" fontSize="small" sx={{ mt: 0.5 }} />
          <ListItemText primary="صفحات"></ListItemText>
          {pagesMenuStatus && <PagesMenu />}
        </ListItem>
        <Link href="/">
          <ListItem>
            <ListItemText primary="خانه" />
          </ListItem>
        </Link>
      </List>
    </Box>
  );
};
export default HeaderMiddleMenu;
