import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-lg w-full mx-auto">
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;
