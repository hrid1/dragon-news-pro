import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <section className="bg-gray-200 ">
      <div className="container mx-auto">
        <Navbar></Navbar>
        <div className="h-[calc(100vh-80px)]">
          <Outlet></Outlet>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
