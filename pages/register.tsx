import BasicBreadcrumbs from "../components/layout/BasicBreadcrumbs";
import Register from "../components/routes/register/Register";

const RegisterPage = () => {
  return (
    <>
      <BasicBreadcrumbs routerName="/ثبت نام" />
      <Register />
    </>
  );
};
export default RegisterPage;
