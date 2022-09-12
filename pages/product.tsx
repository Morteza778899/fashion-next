import { Box } from "@mui/material";
import Main from "../components/routes/product/Main";
import TabsDetails from "../components/routes/product/TabsDetails";

const ProductPage = () => {
  return (
    <>
      <Box sx={{ maxWidth: 1200, mx: "auto", my: 5 }}>
        <Main />
      </Box>
      <TabsDetails />
    </>
  );
};
export default ProductPage;
