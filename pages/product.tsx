import { Box } from "@mui/material";
import axios from "axios";
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

const ProductPage: FC<Iprops> = () => {
  // console.log(singleProduct)
    const singleProduct = {
    title: "شلوار چرمی",
    gender: "women",
    price: "195'000",
    images: ['https://uupload.ir/view/product-01-1_ck2h.webp/', 'https://uupload.ir/view/product-01-2_vyim.webp/', 'https://uupload.ir/view/product-01-3_svxy.webp/'],
    rating: 5,
  }
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

// export const getServerSideProps = async () => {
//   // const { data } = await axios.get('https://api.npoint.io/d08c4cfbcded5228dd52')
//   const singleProduct = {
//     title: "شلوار چرمی",
//     gender: "women",
//     price: "195'000",
//     images: ['https://uupload.ir/view/product-01-1_ck2h.webp/', 'https://uupload.ir/view/product-01-2_vyim.webp/', 'https://uupload.ir/view/product-01-3_svxy.webp/'],
//     rating: 5,
//   }
//   return {
//     props: {
//       singleProduct
//     }
//   }
// }
export default ProductPage;
