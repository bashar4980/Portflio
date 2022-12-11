import React from "react";

import { Link } from 'react-scroll'


const Header = () => {

  const menuitem =(
    <>
    
     <li className="text-xl font-bold "><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
   
     <li className="text-xl font-bold"> <Link activeClass="active" to="project" spy={true} smooth={true} offset={50} duration={500}>Project</Link></li>
     <li className="text-xl font-bold"> <Link activeClass="active" to="contract" spy={true} smooth={true} offset={50} duration={500} >Contract</Link></li>

    
    </>
  )
   
  return (
    <div className="bg-primary">
      <div className="navbar container mx-auto flex justify-between">
        <div className="navbar-start">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
             {/* Content */}
             {menuitem}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost normal-case text-3xl font-bold text-neutral">
            BASHAR
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {/* Content */}
          {menuitem}
          </ul>
        </div>
       
      </div>
    </div>
  );
};

export default Header;
