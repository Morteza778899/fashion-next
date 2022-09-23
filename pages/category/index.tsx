import { Box, Stack, Typography } from "@mui/material";
import { man, woman, other } from "../../public/info/collectionData";
import { FC, useEffect, useState } from "react";
import TowPic from "../../components/routes/category/TwoPic";
import Filter from "../../components/routes/category/filter/Filter";
import ItemsSort from "../../components/routes/category/items/ItemsSort";
import { useRouter } from "next/router";
const array = [...man, ...woman, ...other];
import EmptyAnime from "../../components/animation/components/EmptyAnime";
import BasicBreadcrumbs from "../../components/layout/BasicBreadcrumbs";


interface Iprops {
    shape: string
}

const CategoryPage: FC<Iprops> = ({ shape }) => {
    const router = useRouter();
    // const { shape } = router.query;
    const [grid, setGrid] = useState(shape);
    const [num, setNum] = useState(4);

    useEffect(() => {
        setGrid(shape);
    }, [router]);

    var fliterArray;
    if (num == array.length || num > array.length) {
        fliterArray = array.slice(0, array.length);
    } else {
        fliterArray = array.slice(0, num);
    }
    const circleFill = (fliterArray.length / array.length) * 100;

    return (
        <>
            <BasicBreadcrumbs routerName={`/دسته بندی/${grid === 'vertical' ? 'دسته‌بندی عمودی' : grid === 'horizontal' ? 'دسته‌بندی لیستی' : grid === 'window' ? 'دسته‌بندی پنجره‌ای' : 'دسته‌بندی خالی'}`} />
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
                        <Stack direction="column" alignItems="center" pt={5}>
                            <EmptyAnime />
                            <Typography>
                                متاسفانه مطابق انتخاب شما هیچ محصولی وجود ندارد
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        </>
    );
};

export default CategoryPage;