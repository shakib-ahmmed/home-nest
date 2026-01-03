import React from "react";
import { Outlet, Link } from "react-router-dom";
import { UserIcon, LogOut } from "lucide-react";

const DashboardLayout = () => {
    return (
        <div className="flex min-h-screen bg-base-100">

            {/* Sidebar */}
            <aside className="w-64 bg-base-200 p-6 flex flex-col justify-between shadow-lg">

                {/* Logo */}
                <Link to="/" className="hover:scale-105 transition-transform duration-300">
                    <div className="mb-8">
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className="w-28 mx-auto rounded-lg mb-4 shadow-md"
                        />
                        <h2 className="text-2xl font-extrabold text-center text-[#075a12] drop-shadow-sm">
                            User Dashboard
                        </h2>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="flex-1 flex flex-col gap-3">
                    <Link
                        className="btn btn-ghost justify-start rounded-lg hover:bg-[#075a12] hover:text-white transition-colors duration-300"
                        to="/dashboard/add-property"
                    >
                        Add Property
                    </Link>

                    <Link
                        className="btn btn-ghost justify-start rounded-lg hover:bg-[#075a12] hover:text-white transition-colors duration-300"
                        to="/dashboard/my-properties"
                    >
                        My Properties
                    </Link>

                    <Link
                        className="btn btn-ghost justify-start rounded-lg hover:bg-[#075a12] hover:text-white transition-colors duration-300"
                        to="/dashboard/my-rating"
                    >
                        My Ratings
                    </Link>
                </nav>

                <div className="mt-8 flex flex-col gap-3 items-center">
                    <button className="btn btn-outline btn-sm w-full flex items-center justify-center gap-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 shadow-sm">
                        <LogOut className="w-4 h-4" /> Logout
                    </button>
                </div>
            </aside>

            <main className="flex-1 p-8 bg-base-100">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-[#075a12]">Dashboard</h1>
                    <div className="flex items-center gap-3">
                        <UserIcon className="w-6 h-6 text-[#075a12] hover:text-green-700 transition-colors duration-300 cursor-pointer" />
                        <span className="hidden sm:block font-medium text-gray-700">Welcome, User</span>
                    </div>
                </div>

                <div className="bg-base-200 p-6 rounded-xl shadow-md min-h-[70vh] transition-all duration-300 hover:shadow-xl">
                    <Outlet />
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
