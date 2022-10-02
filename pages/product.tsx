import { Box } from "@mui/material";
import { FC } from "react";
import BasicBreadcrumbs from "../components/layout/BasicBreadcrumbs";
import Main from "../components/routes/product/Main";
import TabsDetails from "../components/routes/product/TabsDetails";
import { getSingleProduct } from "../redux/features/singleProduct/action";
import { wrapper } from "../redux/store";

interface Iprops {
  singleProduct: {
    title: string,
    gender: string,
    price: string,
    images: string[],
    rating: number,
  }
}

const ProductPage: FC<Iprops> = ({ singleProduct }) => {
  console.log(singleProduct)
  return (
    <>
      <BasicBreadcrumbs routerName="/صفحه محصول" />
      <Box sx={{ maxWidth: 1200, mx: "auto", my: 5 }}>
        <Main singleProduct={singleProduct} />
      </Box>
      <TabsDetails />
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params }) => {
      await store.dispatch(getSingleProduct());
      const singleProduct = store.getState().singleProduct;
      if (singleProduct.error.status) {
        return {
          redirect: {
            destination: '/404',
            permanent: false,
          },
        };
      } else {
        return {
          props: {
            singleProduct: singleProduct.value
          },
        };
      }
    }
);

export default ProductPage;
