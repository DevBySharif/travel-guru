import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";
import "./Header.css";

const Header = () => {
  return (
    <div className="background-image">
      <Navbar />
      <Banner />
    </div>
  );
};

export default Header;
