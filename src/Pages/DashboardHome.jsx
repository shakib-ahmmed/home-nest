import React from "react";
import { Home, Star, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardHome = () => {
    const stats = [
        { name: "Total Properties", value: 12, icon: Home, color: "bg-green-500/20 text-green-600" },
        { name: "Average Ratings", value: "4.5 / 5", icon: Star, color: "bg-yellow-500/20 text-yellow-600" },
        { name: "New Properties", value: 3, icon: Plus, color: "bg-blue-500/20 text-blue-600" },
    ];

    return (
        <div className="flex flex-col gap-6">
            {/* Welcome Section */}
            <div className="space-y-2">
                <h2 className="text-3xl font-bold text-[#075a12] dark:text-green-400">Welcome to your Dashboard!</h2>
                <p className="text-gray-700 dark:text-gray-300">
                    Here you can manage your properties, see your ratings, and add new listings.
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div
                            key={stat.name}
                            className={`p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4 cursor-pointer transform hover:-translate-y-1 dark:bg-gray-800`}
                        >
                            <div
                                className={`p-3 rounded-full flex items-center justify-center ${stat.color} shrink-0`}
                            >
                                <Icon className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-gray-500 dark:text-gray-400">{stat.name}</p>
                                <p className="font-bold text-xl dark:text-white">{stat.value}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
                <Link
                    to="/dashboard/add-property"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 bg-[#075a12] text-white dark:bg-green-600">
                    <Plus
                        className="w-5 h-5"
                    /> Add Property
                </Link>
                <Link
                    to="/dashboard/my-rating"
                    className="flex items-center gap-2 px-6 py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 bg-[#075a12] text-white dark:bg-green-600">
                    <Star className="w-5 h-5" /> View Ratings
                </Link>
            </div>

            <div className="mt-6 p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl min-h-[200px] flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">
                    Select an action from above or check your recent properties here.
                </p>
            </div>
        </div>
    );
};

export default DashboardHome;
