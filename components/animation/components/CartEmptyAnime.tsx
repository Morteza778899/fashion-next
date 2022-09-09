import { useLottie } from "lottie-react";
import cartEmpty from "../json/cartEmpty.json";

const style = {
  height: 300,
};

const CartEmptyAnime = () => {
  const options = {
    animationData: cartEmpty,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default CartEmptyAnime;