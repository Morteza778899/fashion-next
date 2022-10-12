import { Box, ClickAwayListener, Drawer, Fade, Grid, Typography, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import FilterContent from "./FilterContent";
import CancelIcon from '@mui/icons-material/Cancel';
import SortIcon from '@mui/icons-material/Sort';
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";

const Filter = () => {
  const [open, setOpen] = useState(false)
  const mdWidth = useMediaQuery('(min-width:900px)')
  const footerVisibility = useSelector((state: RootState) => state.footerVisibility.value)
  return (
    <Grid item xs={12} lg={3}>
      {mdWidth ? (
        <FilterContent />
      ) : (
        <>
          <Fade timeout={500} in={!footerVisibility}>
            <Box sx={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              width: 1,
              bgcolor: 'primary.main',
              cursor: 'pointer',
              zIndex: 10000
            }}>
              {open ? (
                <Stack >
                  <Stack flexGrow={1} onClick={() => setOpen(false)} alignItems='center' justifyContent='center'
                    sx={{ bgcolor: '#efefef', cursor: 'pointer' }}>
                    <CancelIcon />
                    <Typography variant="h6" textAlign='center' my={1.5}>انصراف</Typography>
                  </Stack>
                  <Stack flexGrow={1} onClick={() => setOpen(false)} alignItems='center' justifyContent='center'
                    sx={{ bgcolor: 'primary.main', cursor: 'pointer', color: 'white' }}>
                    <SortIcon color="inherit" />
                    <Typography variant="h6" textAlign='center' my={1.5}>مرتب سازی</Typography>
                  </Stack>
                </Stack>
              ) : (
                <Typography variant="h6" onClick={() => setOpen(true)}
                  sx={{ textAlign: 'center', m: 1.5, color: 'white' }} >فیلتر و مرتب سازی</Typography>
              )}
            </Box>
          </Fade>

          <Drawer anchor="bottom" open={open} sx={{ zIndex: 2000 }}>
            <Box sx={{ p: { xs: 2, sm: 3 }, minHeight: '100vh' }}>
              <FilterContent />
            </Box>
          </Drawer>
        </>
      )}
    </Grid>
  );
};
export default Filter;
