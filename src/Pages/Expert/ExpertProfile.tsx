import React, { useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaUniversity, FaCodeBranch, FaCalendarAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import axios from 'axios';
import { HiOutlineLogout } from 'react-icons/hi';
import { FiFolder, FiFolderPlus, FiHelpCircle, FiUser, FiPlusCircle } from 'react-icons/fi';


const ExpertProfile = () => {
    const navigate = useNavigate();

    const [profile, setProfile] = useState({
        name: '',
        email: '',
        phone: '',
        experience: '',
        github: '',
        city: '',
    });

    const handleLogout = () => {
        navigate('/');
    };

    // Fetch profile data from the backend
    const fetchProfile = async () => {
        const expertEmail = localStorage.getItem('expertEmail');
        if (!expertEmail) return;
        try {
            const response = await axios.get(`http://localhost:3002/expert/profiledata?email=${expertEmail}`);
            console.log(response)
            if (response.data && response.data.status === 3) {
                setProfile({
                    name: response?.data?.data?.name || '',
                    email: response?.data?.data?.email || '',
                    phone: response?.data?.data?.number || '',
                    experience: response?.data?.data?.experience || '',
                    github: response?.data?.data?.github || '',
                    city: response?.data?.data?.city || '',
                });
            }
        } catch (error) {
            console.error('Error fetching profile data:', error);
        }
    };

    const handleSave = async () => {
        try {
            const response = await axios.put('http://localhost:3002/expert/updateprofile', {
                name: profile.name,
                email: profile.email,
                phone: profile.phone,
                experience: profile.experience,
                github: profile.github,
                city: profile.city
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

    return (
        <>

            <div className="flex h-screen bg-gray-100 font-sans">
                {/* Sidebar */}
                <div className="w-64 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0284C7] shadow-md px-6 py-6  sticky h-250">
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
                </div>

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col overflow-y-auto h-250">
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


                    {/* Dashboard Content */}
                    <div className="min-h-screen pt-15 pb-15  bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex justify-center items-center px-4">
                        <div className="w-full max-w-150 bg-white/40 backdrop-blur-lg p-8 rounded-3xl shadow-2xl border border-white/30">
                            {/* Profile Image and Name */}
                            <div className="text-center mb-8">
                                <img
                                    src="https://via.placeholder.com/100"
                                    alt="Profile"
                                    className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg"
                                />
                                <h2 className="mt-4 text-xl font-bold text-gray-800">{profile.name}</h2>
                                <p className="text-sm text-gray-500">Expert Profile</p>
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
                                        onChange={(e: any) => setProfile({ ...profile, phone: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 mb-1 font-medium">
                                        <FaUniversity /> Experience
                                    </label>
                                    <input
                                        type="number"
                                        placeholder="Enter your experience"
                                        className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400"
                                        value={profile.experience}
                                        onChange={(e: any) => setProfile({ ...profile, experience: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 mb-1 font-medium">
                                        <FaCodeBranch /> Github link
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your Github link"
                                        className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400"
                                        value={profile.github}
                                        onChange={(e: any) => setProfile({ ...profile, github: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="flex items-center gap-2 mb-1 font-medium">
                                        <FaCalendarAlt /> City
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your City"
                                        className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-purple-400"
                                        value={profile.city}
                                        onChange={(e: any) => setProfile({ ...profile, city: e.target.value })}
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

            </div>
        </>
    );
};

export default ExpertProfile;
