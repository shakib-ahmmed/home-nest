import React from "react";
import { Home, Star, Plus } from "lucide-react";

const DashboardHome = () => {
    return (
        <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-[#075a12]">Welcome to your Dashboard!</h2>
            <p className="text-gray-700">
                Here you can manage your properties, see your ratings, and add new listings.
            </p>

            {/* Cards Example */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4">
                    <Home className="w-6 h-6 text-[#075a12]" />
                    <div>
                        <p className="text-gray-500">Total Properties</p>
                        <p className="font-bold text-xl">12</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4">
                    <Star className="w-6 h-6 text-[#075a12]" />
                    <div>
                        <p className="text-gray-500">Average Ratings</p>
                        <p className="font-bold text-xl">4.5 / 5</p>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-4">
                    <Plus className="w-6 h-6 text-[#075a12]" />
                    <div>
                        <p className="text-gray-500">New Properties</p>
                        <p className="font-bold text-xl">3</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;
