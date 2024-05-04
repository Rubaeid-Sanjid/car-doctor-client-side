import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
const Navbar = () => {

    const navlink = <>
        <NavLink to={"/"} className={'mx-3 textl font-semibold'}>Home</NavLink>
        <NavLink to={"/about"} className={'mx-3 textl font-semibold'}>About</NavLink>
        <NavLink to={"/services"} className={'mx-3 textl font-semibold'}>Services</NavLink>
        <NavLink to={"/blog"} className={'mx-3 textl font-semibold'}>Blog</NavLink>
        <NavLink to={"/contact"} className={'mx-3 textl font-semibold'}>Contact</NavLink>
        
    </>
  return (
    <div className="navbar bg-base-100 container mx-auto lg:px-12 px-3 mt-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlink}
          </ul>
        </div>
        <img src={logo} alt="" className="w-24"/>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlink}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="px-3 py-2 text-[#FF3811] border border-[#FF3811] rounded-md">Appointment</a>
      </div>
    </div>
  );
};

export default Navbar;
