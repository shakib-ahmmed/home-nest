import React, { useContext, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { UserIcon, LogOut, Menu, Home, Star, Plus } from "lucide-react";
import { AuthContext } from "../Provider/AuthProvider.jsx";
import { toast } from "react-hot-toast";

// Default dashboard home for empty Outlet
const DashboardHome = () => (
    <div className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-[#075a12] dark:text-green-400">
            Welcome to your Dashboard!
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
            Here you can manage your properties, see your ratings, and add new listings.
        </p>
    </div>
);

const DashboardLayout = () => {
    const { user, logOut } = useContext(AuthContext);
    const location = useLocation();
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => toast.success("Logout successfully"))
            .catch((error) => toast.error(error.message));
    };

    // Sidebar links
    const navLinks = [
        { name: "Add Property", path: "/dashboard/add-property", icon: Plus },
        { name: "My Properties", path: "/dashboard/my-properties", icon: Home },
        { name: "My Ratings", path: "/dashboard/my-rating", icon: Star },
    ];

    return (
        <div className="flex min-h-screen bg-base-100">

            {/* Mobile overlay */}
            {isMobileSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
                    onClick={() => setIsMobileSidebarOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <aside
                className={`bg-base-200 p-6 flex flex-col justify-between shadow-lg w-64
        fixed top-0 left-0 h-full z-40 transform transition-transform duration-300
        ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
            >
                {/* Logo */}
                <div className="pb-10">
                    <Link
                        to="/"
                        className="hover:scale-105 transition-transform duration-300 mb-6 flex flex-col items-center"
                        onClick={() => setIsMobileSidebarOpen(false)}
                    >
                        <img src="/logo.png" alt="Logo" className="w-28 rounded-lg mb-2 shadow-md" />
                    </Link>
                    <Link to="/dashboard" onClick={() => setIsMobileSidebarOpen(false)}>
                        <h2 className="text-2xl font-extrabold text-center text-[#075a12] drop-shadow-sm">
                            User Dashboard
                        </h2>
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="flex-1 flex flex-col gap-3">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        const Icon = link.icon;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsMobileSidebarOpen(false)}
                                className={`group flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer
                  ${isActive ? "bg-[#075a12] text-white shadow-md scale-105" : "hover:bg-[#075a12] hover:text-white hover:scale-105"}`}
                                title={link.name}
                            >
                                <Icon className={`w-5 h-5 transition-colors duration-300 ${isActive ? "text-white" : "text-[#075a12] group-hover:text-white"}`} />
                                <span className="font-medium">{link.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                {/* Logout */}
                <div className="mt-6 flex flex-col gap-2 items-center">
                    <button
                        onClick={() => {
                            handleLogOut();
                            setIsMobileSidebarOpen(false);
                        }}
                        className="btn btn-outline btn-sm w-full flex items-center justify-center gap-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm"
                        title="Logout"
                    >
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 md:ml-64">

                {/* Mobile Navbar */}
                <div className="flex justify-between items-center p-4 shadow-md bg-base-100 md:hidden">
                    <button
                        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
                        className="btn btn-ghost"
                    >
                        <Menu className="w-6 h-6 text-[#075a12]" />
                    </button>
                    <h1 className="text-xl font-bold text-[#075a12]">Dashboard</h1>
                </div>

                {/* Desktop Navbar */}
                <div className="hidden md:flex justify-between items-center p-6">
                    <h1 className="text-2xl font-bold text-[#075a12]">Dashboard</h1>
                    <div className="flex items-center gap-3">
                        <UserIcon className="w-6 h-6 text-[#075a12] hover:text-green-700 transition-colors duration-300 cursor-pointer" />
                        <span className="hidden sm:block font-medium text-gray-700">
                            Welcome, {user?.displayName || "User"}
                        </span>
                    </div>
                </div>

                {/* Main Content Area */}
                <main className="p-6">
                    <div className="bg-base-200 p-6 rounded-xl shadow-md min-h-[70vh] transition-all duration-300 hover:shadow-xl">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
