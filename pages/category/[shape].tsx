import { Box, CircularProgress, Grid, Stack, Typography } from "@mui/material";
import { man, woman, other } from "../../public/info/collectionData";
import HorizontalView from "../../components/routes/category/items/HorizontalView";
import VerticalView from "../../components/routes/category/items/VerticalView";
import { useEffect, useState } from "react";
import WindowView from "../../components/routes/category/items/WindowView";
import LoadMore from "../../components/routes/category/items/LoadMore";
import TowPic from "../../components/routes/category/TwoPic";
import Filter from "../../components/routes/category/filter/Filter";
import ItemsSort from "../../components/routes/category/items/ItemsSort";
import { useRouter } from "next/router";
const array = [...man, ...woman, ...other];
import EmptyAnime from "../../components/animation/components/EmptyAnime";

const CategoryPage = () => {
  const router = useRouter();
  const { shape } = router.query;
  const [grid, setGrid] = useState(shape);
  const [num, setNum] = useState(4);

  useEffect(() => {
    setGrid(shape);
  },[router]);

  var fliterArray;
  if (num == array.length || num > array.length) {
    fliterArray = array.slice(0, array.length);
  } else {
    fliterArray = array.slice(0, num);
  }
  const circleFill = (fliterArray.length / array.length) * 100;

  return (
    <Box sx={{ maxWidth: 1200, mx: "auto" }}>
      <TowPic />
      <Stack direction="row-reverse" sx={{ mb: 8 }}>
        <Filter />
        <Box
          sx={{
            width: 1,
            "& .MuiSelect-select": {
              pt: 1,
              textAlign: "center",
            },
          }}
        >
          <ItemsSort grid={grid} setGrid={setGrid} />
          {grid === "vertical" ? (
            <Grid
              direction="row-reverse"
              container
              sx={{ p: 3 }}
              justifyContent="flex-start"
            >
              {fliterArray.map((obj, index) => (
                <VerticalView item={obj} key={index} />
              ))}
            </Grid>
          ) : grid === "horizontal" ? (
            <Grid
              direction="row-reverse"
              container
              sx={{ p: 5, px: 8 }}
              gap={5}
            >
              {fliterArray.map((obj, index) => (
                <HorizontalView item={obj} key={index} />
              ))}
            </Grid>
          ) : grid === "window" ? (
            <Grid
              direction="row-reverse"
              container
              sx={{ p: 3 }}
              justifyContent="flex-start"
            >
              {fliterArray.map((obj, index) => (
                <WindowView item={obj} key={index} />
              ))}
            </Grid>
          ) : (
            grid === "empty" && (
              <Stack direction="column" alignItems="center" pt={5}>
                <EmptyAnime />
                <Typography>
                  متاسفانه مطابق انتخاب شما هیچ محصولی وجود ندارد
                </Typography>
              </Stack>
            )
          )}
          {num < array.length && grid !== "empty" && (
            <LoadMore num={num} setNum={setNum} circleFill={circleFill} />
          )}
        </Box>
      </Stack>
    </Box>
  );
};
export default CategoryPage;
