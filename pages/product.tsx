import { Box } from "@mui/material";
import Head from "next/head";
import BasicBreadcrumbs from "../components/layout/BasicBreadcrumbs";
import Main from "../components/routes/product/Main";
import TabsDetails from "../components/routes/product/TabsDetails";

const ProductPage = () => {
  const singleProduct = {
    title: "شلوار چرمی",
    gender: "women",
    price: "195'000",
    images: ['https://uupload.ir/view/product-01-1_ck2h.webp/', 'https://uupload.ir/view/product-01-2_vyim.webp/', 'https://uupload.ir/view/product-01-3_svxy.webp/'],
    rating: 5,
  }
  return (
    <>
      <Head>
        <title>صفحه محصول</title>
      </Head>
      <BasicBreadcrumbs routerName="/صفحه محصول" />
      <Box sx={{ maxWidth: 1200, mx: "auto", my: 5 }}>
        <Main singleProduct={singleProduct} />
      </Box>
      <TabsDetails />
    </>
  );
};

// getServerSideProps is too slow in vercel, then i use static data
// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) =>
//     async ({ params }) => {
// await store.dispatch(getSingleProduct());
//       const singleProduct = store.getState().singleProduct;
//       if (singleProduct.error.status) {
//         return {
//           redirect: {
//             destination: '/404',
//             permanent: false,
//           },
//         };
//       } else {
//         return {
//           props: {
//             singleProduct: singleProduct.value
//           },
//         };
//       }
//     }
// );

export default ProductPage;
