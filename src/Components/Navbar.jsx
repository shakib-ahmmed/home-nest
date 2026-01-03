import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider.jsx";
import { UserIcon, Sun, Moon, Monitor } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);
    useEffect(() => {
        const applyTheme = (mode) => {
            if (mode === "system") {
                const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
            } else {
                document.documentElement.setAttribute("data-theme", mode);
            }
        };

        applyTheme(theme);

        if (theme === "system") {
            const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
            const handler = () => applyTheme("system");
            mediaQuery.addEventListener("change", handler);
            return () => mediaQuery.removeEventListener("change", handler);
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Logout successfully");
                setDropdownOpen(false);
            })
            .catch((error) => toast.error(error.message));
    };

    return (
        <>
            <div className="navbar sticky top-0 z-50 bg-base-100 shadow-sm pb-5 lg:pl-[80px] lg:pr-[80px]">
                <div className="navbar-start">

                    {/* Mobile Menu */}
                    <div className="dropdown pb-5">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            ☰
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2"
                        >
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/all-properties">All Properties</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                            {user && (
                                <>
                                    <li><NavLink to="/dashboard">My Dashboard</NavLink></li>
                                </>
                            )}
                        </ul>
                    </div>

                    {/* Desktop Menu */}

                    <NavLink to="/" className="flex items-center gap-2">
                        <img
                            className="lg:w-12 w-10 lg:h-12 h-10"
                            src="/logo.png"
                            alt="logo"
                        />
                        <span className="font-bold text-2xl sm:text-3xl lg:text-4xl text-[#075a12]">
                            HOME NEST
                        </span>
                    </NavLink>
                </div>
                <div className="navbar-center font-bold hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/all-properties">All Properties</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        {user && <li><NavLink to="/dashboard">My Dashboard</NavLink></li>}
                    </ul>
                </div>

                <div className="navbar-end gap-2">

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            {theme === "light" && <Sun />}
                            {theme === "dark" && <Moon />}
                            {theme === "system" && <Monitor />}
                        </label>

                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
                        >
                            <li><button onClick={() => setTheme("light")}>☀ Light</button></li>
                            <li><button onClick={() => setTheme("dark")}>🌙 Dark</button></li>
                            <li><button onClick={() => setTheme("system")}>💻 System</button></li>
                        </ul>
                    </div>

                    {/* USER / AUTH */}
                    {user ? (
                        <div className="relative  lg:flex">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="p-2 rounded-full hover:scale-105 transition"
                            >
                                {user.photoURL ? (
                                    <img
                                        src={user.photoURL}
                                        className="w-10 h-10 rounded-full object-cover"
                                        alt="user"
                                    />
                                ) : (
                                    <UserIcon className="w-10 h-10 text-gray-500" />
                                )}
                            </button>

                            {dropdownOpen && (
                                <div className="absolute right-0 mt-2 w-56 bg-base-100 shadow-lg rounded-xl z-50">
                                    <div className="px-4 py-3 border-b">
                                        <p className="font-semibold">{user.displayName || "User"}</p>
                                        <p className="text-sm">{user.email}</p>
                                    </div>
                                    <button
                                        onClick={handleLogOut}
                                        className="w-full px-4 py-2 text-left hover:bg-[#075a12] hover:text-white"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <Link
                                to="/auth/login"
                                className="btn bg-[#075a12] text-white font-semibold w-[145px] h-[45px] hover:scale-105"
                            >
                                Login
                            </Link>
                            <Link
                                to="/auth/registration"
                                className="btn bg-gray-200 text-gray-800 font-semibold w-[145px] h-[45px] hover:scale-105"
                            >
                                Signup
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            <ToastContainer position="top-center" />
        </>
    );
};

export default Navbar;
