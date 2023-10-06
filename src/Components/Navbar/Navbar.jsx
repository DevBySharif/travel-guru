import { FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/news">News</NavLink>
      </li>
      <li>
        <NavLink to="/destination">Destination</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar  mx-auto pt-6">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box font-montserrat w-52 text-white"
          >
            {navLinks}
          </ul>
        </div>
        <a>
          <img className="w-min h-[56px]" src={logo} alt="" />
        </a>
      </div>
      <div className="form-control mr-4 relative">
        <input
          type="text"
          placeholder="Search your Destination..."
          className="bg-transparent border-2 border-white font-montserrat rounded-sm pl-8 p-4 w-[300px] h-[30px]"
        ></input>
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
          <FaSearch />
        </span>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-white font-montserrat px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="bg-[#F9A51A] font-montserrat text-base font-medium py-3 px-7 rounded-md">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
