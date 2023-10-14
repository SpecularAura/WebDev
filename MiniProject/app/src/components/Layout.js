import { Outlet } from "react-router-dom";
import MyAppBar from "./MyAppBar";

const Layout = () => {
  return (
    <main className="App">
      <MyAppBar />
      <Outlet />
    </main>
  );
};

export default Layout;
