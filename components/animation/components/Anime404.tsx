import { useLottie } from "lottie-react";
import json404 from "../json/404.json";

const style = {
  height: 300,
};

const Anime404 = () => {
  const options = {
    animationData: json404,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default Anime404;