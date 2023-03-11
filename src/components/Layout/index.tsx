import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <h3>Navbar</h3>
      <Outlet />
    </>
  );
};
