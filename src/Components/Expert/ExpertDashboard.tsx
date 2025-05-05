import React, { useState } from 'react';
import { FiBell, FiFolder, FiFolderPlus, FiHelpCircle, FiUser, FiPlusCircle } from 'react-icons/fi';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const ExpertDashboard = () => {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <div className="flex h-screen bg-gray-100 font-sans">
            {/* Sidebar */}
            <div className="w-64 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0284C7] shadow-md px-6 py-6 sticky">
                <Link to='/expert/dashboard' className="group relative block text-center mb-10">
                    <h1 className="text-white text-2xl font-extrabold tracking-wider hover:text-[#34d399] transition-all duration-300">
                        PROJECT NEST
                    </h1>
                    <span className="transform -translate-x-1/2 mt-1 text-sm text-white opacity-0 group-hover:opacity-100 transition duration-300">
                        Expert Dashboard
                    </span>
                </Link>
                <div>
                    <ul className="space-y-6 text-white">
                        <Link to='/projects'>
                            <li className="flex items-center gap-3 cursor-pointer mb-5 hover:text-[#d7e4f7] hover:underline transition">
                                <FiFolder className="text-xl" />
                                Projects
                            </li>
                        </Link>
                        <li className="flex items-center gap-3 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                            <FiFolderPlus className="text-xl" />
                            My Projects
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                            💳 Payments
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                            📚 Resources
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                            <FiHelpCircle className="text-xl" />
                            Support
                        </li>
                        <li className="flex items-center gap-3 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                            <FiUser className="text-xl" />
                            Profile
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-y-auto">
                {/* Top Navbar */}
                <div className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0284C7] shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-10">
                    <h2 className="text-lg font-medium text-white">Hello, Expert 👋</h2>
                    <div className="flex items-center gap-4 group">
                        <button onClick={handleLogout} className="flex items-center gap-2 px-5 py-2 bg-white text-[#1E3A8A] rounded-full hover:bg-[#063a8c] hover:text-white transition duration-200 cursor-pointer">
                            <HiOutlineLogout />
                            Logout
                        </button>
                    </div>
                </div>
                {/* 
                {/* Dashboard Content */}
                <div className="p-8 space-y-8">
                    {/* Overview Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h3 className="text-gray-600 text-sm mb-2">Active Projects</h3>
                            <p className="text-3xl font-bold">8</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h3 className="text-gray-600 text-sm mb-2">Completed Projects</h3>
                            <p className="text-3xl font-bold">25</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h3 className="text-gray-600 text-sm mb-2">Pending Payments</h3>
                            <p className="text-3xl font-bold">$1500</p>
                        </div>
                        <div className="bg-white shadow-md rounded-lg p-6 text-center">
                            <h3 className="text-gray-600 text-sm mb-2">Avg. Rating</h3>
                            <p className="text-3xl font-bold">4.8 ⭐</p>
                        </div>
                    </div>

                    {/* Recent Projects Table */}
                    <div className="bg-white shadow-md rounded-lg overflow-hidden">
                        <div className="px-6 py-4 bg-blue-600 text-white font-semibold">
                            Recent Projects
                        </div>
                        <table className="min-w-full text-sm">
                            <thead className="bg-gray-50 text-gray-600">
                                <tr>
                                    <th className="text-left py-3 px-6">Project Name</th>
                                    <th className="text-left py-3 px-6">Status</th>
                                    <th className="text-left py-3 px-6">Deadline</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b hover:bg-gray-100">
                                    <td className="py-4 px-6">E-commerce Website</td>
                                    <td className="py-4 px-6 text-green-600">In Progress</td>
                                    <td className="py-4 px-6">May 30, 2025</td>
                                </tr>
                                <tr className="border-b hover:bg-gray-100">
                                    <td className="py-4 px-6">Portfolio Website</td>
                                    <td className="py-4 px-6 text-yellow-600">Pending</td>
                                    <td className="py-4 px-6">June 10, 2025</td>
                                </tr>
                                <tr className="border-b hover:bg-gray-100">
                                    <td className="py-4 px-6">App Landing Page</td>
                                    <td className="py-4 px-6 text-green-600">Completed</td>
                                    <td className="py-4 px-6">April 15, 2025</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExpertDashboard;
