import { Box, ThemeProvider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import { AppDispatch, RootState } from "../../redux/store";
import Footer from "./footer/Footer";
import HeaderBottom from "./header/bottom/HeaderBottom";
import HeaderTop from "./header/top/HeaderTop";
import { theme } from "./theme";
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { toast, ToastContainer } from "react-toastify";
import VisibilitySensor from "react-visibility-sensor";
import { setVisibility } from "../../redux/features/footerVisibility/action";

interface Iprops {
  children?: React.ReactNode;
}

const Layout: FC<Iprops> = ({ children }) => {
  const allProduct = useSelector((state: RootState) => state.allProduct)
  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    if (allProduct.error.status) {
      toast.error(<Typography>{allProduct.error.message}</Typography>)
    }
  }, [allProduct])

  // loading for page routing
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, [])

  function onChange(isVisible: boolean) {
    dispatch(setVisibility(isVisible))
  }

  return (
    allProduct.loading ? (
      <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: 1, height: '100vh' }}>
        <BeatLoader />
      </Stack>
    ) : (
      <ThemeProvider theme={theme}>
        <Box sx={{ minHeight: '100vh' }}>
          <HeaderTop />
          <HeaderBottom />
          {loading ? (
            <Stack justifyContent={'center'} alignItems={'center'} sx={{ width: 1, height: '80vh' }}>
              <BeatLoader />
            </Stack>
          ) :
            children
          }
          <VisibilitySensor partialVisibility={true} onChange={onChange}>
            <Footer />
          </VisibilitySensor >
        </Box>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeProvider>
    )
  );
};
export default Layout;
