import React from 'react';
import { NavLink, Link } from 'react-router';
import logoimg from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm mx-2 md:px-10 lg:px-12">
            <div className="navbar-start">
               
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-semibold"
                                        : "text-gray-700"
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/allapps"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-semibold"
                                        : "text-gray-700"
                                }
                            >
                                Apps
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/installation"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-semibold"
                                        : "text-gray-700"
                                }
                            >
                                Installation
                            </NavLink>
                        </li>
                    </ul>
                </div>

                {/* Logo */}
                <div className="flex gap-[-8px] md:gap-0 justify-center items-center">
                    <img className="h-8 w-6 md:w-8" src={logoimg} alt="logo" />
                    <Link to="/" className="btn btn-ghost text-xl">
                        HERO.IO
                    </Link>
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                                    : "text-gray-700"
                            }
                        >
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/allapps"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                                    : "text-gray-700"
                            }
                        >
                            Apps
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/installation"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-blue-600 font-semibold border-b-2 border-blue-600"
                                    : "text-gray-700"
                            }
                        >
                            Installation
                        </NavLink>
                    </li>
                </ul>
            </div>

            
            <div className="navbar-end">
                <Link to="https://github.com/akib2012">
                    <button className="btn bg-gradient-to-r from-purple-700 to-purple-500 text-xl text-white py-2">
                        <i className="fa-brands fa-github mr-2"></i>Contribute
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
