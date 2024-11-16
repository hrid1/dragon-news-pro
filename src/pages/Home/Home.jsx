import { Outlet } from "react-router-dom";
import LatestNews from "../../components/LatestNews";
import LeftNavbar from "../../components/layout-components/LeftNavbar";
import RIghtNavbar from "../../components/layout-components/RIghtNavbar";
import Navbar from "../../components/Navbar";


const Home = () => {
  
  
  return (
    <div className="container mx-auto">
      <LatestNews />
      <Navbar></Navbar>
      <section className="grid md:grid-cols-12 gap-3 my-6">
        <aside className="left col-span-3">
          <LeftNavbar></LeftNavbar>
        </aside>
        <div className="center col-span-6 font-semibold text-xl">
          Dragon News Home
          <Outlet />
        </div>
        <aside className="right col-span-3">
          <RIghtNavbar />
        </aside>
      </section>
    </div>
  );
};

export default Home;
