import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const link = <>
        {/* Home */}
        <li>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-600 font-semibold underline'
                        : 'text-gray-700 hover:text-blue-500 transition-colors duration-200'
                }
            >
                Home
            </NavLink>
        </li>
        {/* Add schedule */}
        <li>
            <NavLink
                to="/add-schedule"
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-600 font-semibold underline'
                        : 'text-gray-700 hover:text-blue-500 transition-colors duration-200'
                }
            >
                Add Schedule
            </NavLink>
        </li>
        {/* All Schedule */}
        <li>
            <NavLink
                to="/all-schedule"
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-600 font-semibold underline'
                        : 'text-gray-700 hover:text-blue-500 transition-colors duration-200'
                }
            >
                All Schedule
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/sign-up"
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-600 font-semibold underline'
                        : 'text-gray-700 hover:text-blue-500 transition-colors duration-200'
                }
            >
                Sign up
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/sign-in"
                className={({ isActive }) =>
                    isActive
                        ? 'text-blue-600 font-semibold underline'
                        : 'text-gray-700 hover:text-blue-500 transition-colors duration-200'
                }
            >
                Sign in
            </NavLink>
        </li>
    </>
    return (
        <div className="navbar lg:px-20 px-6 bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
            </div>
        </div>
    );
};

export default Navbar;