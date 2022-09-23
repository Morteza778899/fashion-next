import { ThemeProvider } from "@mui/material";
import { FC, useCallback } from "react";
import Footer from "./footer/Footer";
import HeaderBottom from "./header/bottom/HeaderBottom";
import HeaderTop from "./header/top/HeaderTop";
import { theme } from "./theme";

interface Iprops {
  children?: React.ReactNode;
}

const Layout: FC<Iprops> = ({ children }) => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <HeaderTop />
        <HeaderBottom />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};
export default Layout;
