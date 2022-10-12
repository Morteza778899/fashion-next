import Head from "next/head";
import BasicBreadcrumbs from "../components/layout/BasicBreadcrumbs";
import Register from "../components/routes/register/Register";

const RegisterPage = () => {
  return (
    <>
      <Head>
        <title>ثبت نام</title>
      </Head>
      <BasicBreadcrumbs routerName="/ثبت نام" />
      <Register />
    </>
  );
};
export default RegisterPage;
