import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo/logo.png";

const Header = () => {
  return (
    <div className="bg-violet-200">
      <div className="navbar container m-auto  ">
        <div className="navbar-start  ">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content mt-3  p-2 w-52"
            >
              <li>
                <Link>Course</Link>
              </li>
              <li>
                <Link>Instructor</Link>
              </li>
              <li>
                <Link>About US</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>

          <img className="hidden md:block " src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  font-bold text-gray-600">
            <li>
              <Link>Course</Link>
            </li>
            <li>
              <Link>Instructor</Link>
            </li>
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-1 ">
          <button className="btn btn-success">
            {" "}
            <Link className="">Login</Link>
          </button>
          <button className="btn btn-warning">
            {" "}
            <Link className="">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
