import type { NextPage } from "next";
import Banner from "../components/routes/home/banner/Banner";
import Blog from "../components/routes/home/blog/Blog";
import Brand from "../components/routes/home/brand/Brand";
import Collection from "../components/routes/home/collection/Collection";
import Slider from "../components/routes/home/slider/Slider";
import TwoPic from "../components/routes/home/twopic/TwoPic";

const Home: NextPage = () => {
  return (
    <>
      <Slider />
      <TwoPic />
      <Brand />
      <Collection type="first" />
      <Banner />
      <Collection type="second" />
      <Blog />
    </>
  );
};

export default Home;
