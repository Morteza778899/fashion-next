import BasicBreadcrumbs from "../components/layout/BasicBreadcrumbs";
import Login from "../components/routes/login/Login";

const LoginPage = () => {
  return (
    <>
      <BasicBreadcrumbs routerName="/ورود" />
      <Login />
    </>
  );
};
export default LoginPage;
