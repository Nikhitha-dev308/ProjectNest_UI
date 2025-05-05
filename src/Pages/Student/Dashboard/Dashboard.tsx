import React, { useState } from 'react';
import { FiBell, FiFolder, FiFolderPlus, FiHelpCircle, FiUser, FiPlusCircle } from 'react-icons/fi';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [show, setShow] = useState(false) as any;

  const navigate: any = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  }
  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0284C7] shadow-md px-6 py-6 sticky">
        <Link to='/' className="group relative block text-center mb-10">
          <h1 className="text-white text-2xl font-extrabold tracking-wider hover:text-[#34d399] transition-all duration-300">
            PROJECT NEST
          </h1>
          <span className="transform -translate-x-1/2 mt-1 text-sm text-white opacity-0 group-hover:opacity-100 transition duration-300">
            Student Dashboard
          </span>
        </Link>
        <div>
          <ul className="space-y-6 text-white">
            <li className="flex items-center gap-3 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
              <FiFolder className="text-xl" />
              Projects
            </li>
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
        <div className="mt-40 pt-6">
          <Link
            to="/student/createproject"
            className="flex items-center gap-3 text-white pl-0 px-2 rounded-md hover:underline hover:text-[#bcdbd0] transition-all ease-in-out duration-200 hover:scale-95"
          >
            <FiPlusCircle className="text-xl" />
            <span className="text-lg font-medium">Create Your Project</span>
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0284C7] shadow-md px-8 py-4 flex justify-between items-center">
          <h2 className="text-lg font-medium text-white">Hello, Nikhitha 👋</h2>
          <div className="flex items-center gap-4 group">
            {/* Plus Icon */}
            <div onClick={() => { setShow(true) }} className='relative'>
              <Link to="/student/createproject">
                <FiPlusCircle className="text-3xl text-white cursor-pointer" />
              </Link>
              {/* Hover Text: Display "Create Your Project" below the icon */}
              <span className="absolute left-4 top-8 transform -translate-x-1/2 text-sm text-[#ffffff] opacity-1 group-hover:opacity-100 transition-all duration-300">
                Create
              </span>
            </div>
            {/* Logout Button */}
            <button onClick={handleLogout} className="flex items-center gap-2 px-5 py-2 bg-white text-[#1E3A8A] rounded-full hover:bg-[#063a8c] hover:text-white transition duration-200 cursor-pointer">
              <HiOutlineLogout />
              Logout
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex p-8">
          <div className="text-center text-gray-600 text-xl">
            Welcome to your dashboard!
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-10">
        <Link
          to="/student/createproject"
          className="flex items-center justify-center bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0284C7] text-white p-4 rounded-full shadow-lg hover:scale-105 transition duration-300"
        >
          <FiPlusCircle className="text-4xl" />
        </Link>
      </div>


    </div>
  );
};

export default Dashboard;
