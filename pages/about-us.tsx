import Head from "next/head";
import Explain from "../components/routes/about/Explain";
import Newsletter from "../components/routes/about/Newsletter";
import Statis from "../components/routes/about/Statis";
import Why from "../components/routes/about/Why";

const AboutUsPage = () => {
  return (
    <>
      <Head>
        <title>درباره ما</title>
      </Head>
      <Explain />
      <Why />
      <Statis />
      <Newsletter />
    </>
  );
};
export default AboutUsPage;
