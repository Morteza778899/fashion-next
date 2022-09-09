import { useLottie } from "lottie-react";
import emptyJson from "../json/categoryEmpty.json";

const style = {
  height: 300,
};

const EmptyAnime = () => {
  const options = {
    animationData: emptyJson,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options, style);

  return View;
};

export default EmptyAnime;