import { Outlet } from "react-router";
import NavBar from "./components/navbar/NavBar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;