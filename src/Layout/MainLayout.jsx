import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar/Navbar";
import "./Mainlayout.css";

const MainLayout = () => {
  return (
    <div>
      <div className="background-image">
        <Navbar />
        <Banner></Banner>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
