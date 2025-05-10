import React, { useEffect, useState } from 'react';
import { FiFolder, FiFolderPlus, FiHelpCircle, FiUser } from 'react-icons/fi';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleApprove = (project: any) => {
    alert(`You approved the project: ${project.title}`);
    // TODO: Add actual approval logic (e.g., API call)
  };

  const handleReject = (project: any) => {
    alert(`You rejected the project: ${project.title}`);
    // TODO: Add actual rejection logic (e.g., API call)
  };

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:3002/expert/projects');
      setProjects(res?.data?.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0284C7] shadow-md px-6 py-6 flex flex-col">
        <Link to="/expert/dashboard" className="group text-center mb-10">
          <h1 className="text-white text-2xl font-extrabold tracking-wider hover:text-[#34d399] transition-all duration-300">
            PROJECT NEST
          </h1>
          <span className="mt-1 text-sm text-white opacity-0 group-hover:opacity-100 transition duration-300">
            Expert Dashboard
          </span>
        </Link>

        <ul className="space-y-6 text-white">
          <Link to="/projects">
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
          <Link to='/expert/freeresources'>
            <li className="flex items-center gap-3 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
              📚 Resources
            </li>
          </Link>
          <li className="flex items-center gap-3 mt-5 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
            <FiHelpCircle className="text-xl" />
            Support
          </li>
          <Link to='/expert/profile'>
            <li className="flex items-center gap-3 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
              <FiUser className="text-xl" />
              Profile
            </li>
          </Link>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Top Navbar */}
        <div className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0284C7] shadow-md px-8 py-4 flex justify-between items-center sticky top-0 z-10">
          <h2 className="text-lg font-medium text-white">Hello, Expert 👋</h2>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2 bg-white text-[#1E3A8A] rounded-full hover:bg-[#063a8c] hover:text-white transition duration-200"
          >
            <HiOutlineLogout />
            Logout
          </button>
        </div>

        {/* Project Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col justify-between"
              >
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 truncate">
                    {project?.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project?.description}
                  </p>
                </div>
                <div className="px-6 pb-4 text-right space-x-4">
                  <span
                    className="text-green-600 text-sm cursor-pointer hover:underline"
                    onClick={() => handleApprove(project)}
                  >
                    Approve
                  </span>
                  <span
                    className="text-red-600 text-sm cursor-pointer hover:underline"
                    onClick={() => handleReject(project)}
                  >
                    Reject
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center">
              <h1 className="text-xl font-semibold text-gray-400">
                No projects available
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
