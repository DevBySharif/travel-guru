import { createBrowserRouter } from "react-router-dom";
import Login from "../Components/Login/Login";
import MainLayout from "../Layout/MainLayout";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Destination from "../Pages/Destination/Destination";
import News from "../Pages/News/News";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  },
  {
    path: "/news",
    element: <News></News>,
  },
  {
    path: "/destination",
    element: <Destination></Destination>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
  {
    path: "/contact",
    element: <Contact></Contact>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default Routes;
