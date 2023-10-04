import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

const MainLayout = () => {
  return (
    <div className="mx-auto">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
