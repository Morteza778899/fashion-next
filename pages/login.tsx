import Head from "next/head";
import BasicBreadcrumbs from "../components/layout/BasicBreadcrumbs";
import Login from "../components/routes/login/Login";

const LoginPage = () => {
  return (
    <>
      <Head>
        <title>ورود</title>
      </Head>
      <BasicBreadcrumbs routerName="/ورود" />
      <Login />
    </>
  );
};
export default LoginPage;
