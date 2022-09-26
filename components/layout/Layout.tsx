import { ThemeProvider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { FC } from "react";
import { useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { RootState } from "../../redux/store";
import Footer from "./footer/Footer";
import HeaderBottom from "./header/bottom/HeaderBottom";
import HeaderTop from "./header/top/HeaderTop";
import { theme } from "./theme";

interface Iprops {
  children?: React.ReactNode;
}

const Layout: FC<Iprops> = ({ children }) => {
  const allProduct = useSelector((state: RootState) => state.allProduct)

  return (
    allProduct.loading ? (
        <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: 1, height: '100px' }}>
          <BeatLoader />
        </Stack>
    ) : (
      <ThemeProvider theme={theme}>
        <HeaderTop />
        <HeaderBottom />
        {children}
        <Footer />
      </ThemeProvider>
    )
  );
};
export default Layout;
