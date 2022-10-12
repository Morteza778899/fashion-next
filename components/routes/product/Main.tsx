import { Box, Grid } from "@mui/material";
import image1 from "../../../public/image/product-01.webp";
import image2 from "../../../public/image/product-02.webp";
import image3 from "../../../public/image/product-03.webp";
import image4 from "../../../public/image/product-04.webp";
import image5 from "../../../public/image/product-05.webp";
import image6 from "../../../public/image/product-06.webp";
import image7 from "../../../public/image/product-07.webp";
import image8 from "../../../public/image/product-08.webp";
import image9 from "../../../public/image/product-09.webp";
import { FC, useState } from "react";
import Slider from "../home/collection/quickView/Slider";
import { woman } from "../../../public/info/collectionData";
import Details from "./main/Details";
import Info from "./main/Info";
import Form from "./main/Form";
import Modals from "./main/Modals";
import Title from "./main/Title";
const biegeImages = [image1, image2, image3];
const blackImages = [image4, image5, image6];
const redImages = [image7, image8, image9];
const allImage = [...biegeImages, ...blackImages, ...redImages];

interface Iprops {
  singleProduct: {
    title: string,
    gender: string,
    price: string,
    images: string[],
    rating: number,
  }
}

const Main: FC<Iprops> = ({ singleProduct }) => {
  const [size, setSize] = useState("medium");
  const [color, setColor] = useState("biege");

  return (
    <>
      <Title singleProduct={singleProduct} />
      <Grid container direction={'row-reverse'}>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              m: {xs:2,sm:4},
              "& .MuiIconButton-root": {
                position: "absolute",
                zIndex: 20,
                top: "45%",
                color: "black",
                bgcolor: "#8f8f8f1f",
                ":hover": {
                  bgcolor: "#17c6a968",
                  color: "white",
                },
                transition: ".3s all",
              },
            }}
          >
            <Slider allImage={allImage} slidesPerView={1} />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box sx={{ m: 2 }}>
            <Details />
            <Info />
            <Form
              color={color}
              size={size}
              setSize={setSize}
              setColor={setColor}
              biegeImages={biegeImages}
              blackImages={blackImages}
              redImages={redImages}
            />
            <Modals />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Main;
