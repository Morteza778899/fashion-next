import { Badge, Box, IconButton, Stack, Typography, useMediaQuery } from "@mui/material";
import { BasketIcon, LikeIcon, SearchIcon } from "../../../icon/myIcons";
import HeaderMiddleMenu from "./HeaderMiddleMenu";
import logo from "../../../../public/image/digikala.jpg";
import HoverMenu from "./hoverMenu/HoverMenu";
import { FC, useState } from "react";
import Image from "next/image";
import SearchMenu from "./hoverMenu/SearchMenu";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import DrawerMenu from "./drawerMenu/DrawerMenu";

interface Iprops {
  hiddenMenu: boolean;
  isVisible: boolean;
}
const HeaderBotDuplicate: FC<Iprops> = ({ hiddenMenu, isVisible }) => {
  const [open, setOpen] = useState(false);
  const [hoverStatus, setHoverStatus] = useState(false);
  const [whatHover, setWhatHover] = useState("");
  const [searchMenuStatus, setSearchMenuStatus] = useState(false);
  const mdWidth = useMediaQuery('(min-width:900px)');
  const smWidth = useMediaQuery('(min-width:600px)');

  const hoverControler = (x: boolean, y: string) => {
    setHoverStatus(x);
    setWhatHover(y);
  };

  const openHandler = (x: boolean) => {
    setOpen(x);
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 70,
        position: `${hiddenMenu ? "fixed" : "relative"}`,
        opacity: `${(hiddenMenu && isVisible) || !hiddenMenu ? "1" : "0"}`,
        visibility: `${(hiddenMenu && isVisible) || !hiddenMenu ? "visible" : "hidden"
          }`,
        bgcolor: "white",
        top: 0,
        zIndex: 1000,
        transition: "0.3s all",
      }}
    >
      <Stack
        justifyContent="space-between"
        alignItems="center"
        sx={{ height: 1, maxWidth: 1200, mx: "auto", px: { xs: 1, sm: 4 } }}
      >
        {!mdWidth && (
          <Box sx={{ width: 'fit-content' }}>
            <DensityMediumIcon onClick={() => setOpen(true)} sx={{ cursor: 'pointer' }} />
            <DrawerMenu openHandler={openHandler} open={open} />
          </Box>
        )}

        <Box flexGrow={mdWidth ? 0 : 1}>
          <Image src={logo} width={150} height={55} alt='logo website' />
        </Box>

        {mdWidth && <HeaderMiddleMenu hoverControler={hoverControler} />}

        <Stack>
          <IconButton color="default" onClick={() => setSearchMenuStatus(true)}>
            <SearchIcon fontSize={`${smWidth ? 'large' : 'medium'}`} />
          </IconButton>
          <IconButton color="default">
            <Badge
              badgeContent={6}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{
                "& .MuiBadge-badge": {
                  bgcolor: "black",
                  color: "white",
                  bottom: 4,
                  left: 3,
                  fontFamily: "monospace",
                  scale: `${smWidth ? '1' : '.8'}`
                },
              }}
            >
              <LikeIcon fontSize={`${smWidth ? 'large' : 'medium'}`} />
            </Badge>
          </IconButton>
          <IconButton color="default">
            <Badge
              badgeContent={3}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              sx={{
                "& .MuiBadge-badge": {
                  bgcolor: "black",
                  color: "white",
                  bottom: 4,
                  left: 3,
                  fontFamily: "monospace",
                  scale: `${smWidth ? '1' : '.8'}`
                },
              }}
            >
              <BasketIcon fontSize={`${smWidth ? 'large' : 'medium'}`} />
            </Badge>
            {mdWidth && <Typography sx={{ px: 1 }}>$34.99</Typography>}
          </IconButton>
        </Stack>
      </Stack>
      {whatHover === "woman" && (
        <HoverMenu
          hoverControler={hoverControler}
          hoverStatus={hoverStatus}
          whatHover="woman"
        />
      )}
      {whatHover === "man" && (
        <HoverMenu
          hoverControler={hoverControler}
          hoverStatus={hoverStatus}
          whatHover="man"
        />
      )}
      {searchMenuStatus && (
        <SearchMenu setSearchMenuStatus={setSearchMenuStatus} />
      )}
    </Box>
  );
};
export default HeaderBotDuplicate;
