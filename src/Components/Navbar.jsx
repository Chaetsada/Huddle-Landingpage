import React from "react";
import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <nav className="flex items-center p-5 md:p-10">
            <img className="w-28 h-5 md:w-[200px] md:h-8" src={logo} alt="logo-icon" />
            <button className="text-primary-100 border border-primary-200 rounded-2xl ml-auto text-sm px-4 py-1 hover:opacity-80">
                Try It Free
            </button>
        </nav>
    );
};

export default Navbar;
