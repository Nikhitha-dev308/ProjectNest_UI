import React, { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaUniversity, FaCodeBranch, FaCalendarAlt, FaRobot } from 'react-icons/fa';
import { FiFolder, FiFolderPlus, FiHelpCircle, FiUser, FiPlusCircle } from 'react-icons/fi';
import { HiOutlineLogout } from 'react-icons/hi';
import axios from 'axios';
import { Link, useNavigate } from 'react-router';

const StudentProfile = () => {
    const [show, setShow] = useState(false) as any;
    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        college: '',
        branch: '',
        year: '',
    });


    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    };

    const fetchProfile = async () => {
        const email = localStorage.getItem('email');
        if (!email) return;
        try {
            const response = await axios.get(`http://localhost:3002/student/profiledata?email=${email}`);
            console.log(response)

            if (response.data && response.data.status === 3) {
                const profileData = response.data.data;
                setProfile({
                    name: profileData.name || '',
                    email: profileData.email || '',
                    phone: profileData.phone || '',
                    college: profileData.college || '',
                    branch: profileData.branch || '',
                    year: profileData.year || '',
                });


            }
        } catch (error) {
            console.error('Error fetching profile data:', error);
        }
    };

    const handleSave = async () => {
        try {
            const response = await axios.put('http://localhost:3002/student/updateprofile', {
                name: profile.name,
                email: profile.email,
                phone: profile.phone,
                college: profile.college,
                branch: profile.branch,
                year: profile.year
            }, {
                headers: { 'Content-type': 'application/json' }
            });

            if (response.data && response.data.status === 1) {
                alert('Profile updated successfully!');
            } else {
                alert('Update failed. Please try again.');
            }
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    useEffect(() => {
        fetchProfile();
    }, []);
    console.log(profile);

    return (
        <>
            <div className="flex h-screen bg-gray-100 font-sans ">
                {/* Sidebar */}
                <div className="w-64 h-250 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0284C7] shadow-md px-6 py-6 fixed">
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
                            <Link to='/student/freeresources'>
                                <li className="flex items-center gap-3 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                                    📚 Resources
                                </li>
                            </Link>
                            <Link to='/student/askai'>
                                <li className="flex items-center gap-3 mt-5 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                                    <FaRobot className="text-xl" />
                                    Ask AI
                                </li>
                            </Link>
                            <li className="flex items-center mt-5 gap-3 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                                <FiHelpCircle className="text-xl" />
                                Support
                            </li>
                            <Link to="/student/profile">
                                <li className="flex items-center gap-3 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                                    <FiUser className="text-xl" />
                                    Profile
                                </li>
                            </Link>
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
                <div className="flex-1 flex flex-col h-250">
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
                    <div className="min-h-screen pt-6 pl-60 pb-15 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex justify-center items-center px-4">
                        <div className="w-full max-w-150 bg-white/40 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/30">
                            {/* Profile Image and Name */}
                            <div className="text-center mb-8">
                                <img
                                    src="https://via.placeholder.com/100"
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg"
                                />
                                <h2 className="mt-4 text-xl font-bold text-gray-800">{profile.name}</h2>
                                <p className="text-sm text-gray-500">Student Profile</p>
                            </div>

                            {/* Form Inputs */}
                            <form className="space-y-5 text-gray-700">
                                <div>
                                    <label className="flex items-center gap-2 mb-1 font-medium">
                                        <FaUser /> Name
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400"
                                        value={profile.name}
                                        onChange={(e: any) => setProfile({ ...profile, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 mb-1 font-medium">
                                        <FaEnvelope /> Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400"
                                        value={profile.email}
                                        onChange={(e: any) => setProfile({ ...profile, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 mb-1 font-medium">
                                        <FaPhone /> Phone
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your phone number"
                                        className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400"
                                        value={profile.phone}
                                        onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 mb-1 font-medium">
                                        <FaUniversity /> College
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your college"
                                        className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400"
                                        value={profile.college}
                                        onChange={(e: any) => setProfile({ ...profile, college: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 mb-1 font-medium">
                                        <FaCodeBranch /> Branch
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your branch"
                                        className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400"
                                        value={profile.branch}
                                        onChange={(e: any) => setProfile({ ...profile, branch: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 mb-1 font-medium">
                                        <FaCalendarAlt /> Year
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your academic year"
                                        className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400"
                                        value={profile.year}
                                        onChange={(e: any) => setProfile({ ...profile, year: e.target.value })}
                                    />
                                </div>
                            </form>

                            {/* Buttons */}
                            <div className=" mt-8">
                                <button onClick={handleSave} className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600">
                                    Save
                                </button>
                            </div>
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
        </>
    );
};

export default StudentProfile;
