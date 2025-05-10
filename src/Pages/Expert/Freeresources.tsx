import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiFolder, FiFolderPlus, FiHelpCircle, FiUser, FiPlusCircle } from 'react-icons/fi';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const PEXELS_API_KEY = 'jRxSY76NgWxTk8R6Ho6iMFO5TuY4iOHM6ETxx7U2naBK8EjU7QzkJ4kY';

const Freeresources = () => {
    const [videos, setVideos] = useState([]);
    const [images, setImages] = useState([]);
    const [search, setSearch] = useState('nature');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const handleVideos = async () => {
        try {
            const response = await axios.get('https://api.pexels.com/videos/search', {
                headers: {
                    Authorization: PEXELS_API_KEY,
                },
                params: {
                    query: search,
                    per_page: 21,
                },
            });
            setVideos(response.data.videos);
            setImages([]);
        } catch (error) {
            console.error('Error fetching videos:', error);
        }
    };

    const handleImages = async () => {
        try {
            const response = await axios.get('https://api.pexels.com/v1/search', {
                headers: {
                    Authorization: PEXELS_API_KEY,
                },
                params: {
                    query: search,
                    per_page: 21,
                },
            });
            setImages(response.data.photos);
            setVideos([]);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    useEffect(() => {
        handleImages();
    }, []);

    return (
        <div className="flex font-sans bg-gray-100">
            {/* Sidebar */}
            <div className="w-64 h-screen fixed top-0 left-0 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0284C7] shadow-md px-6 py-6 flex flex-col z-20">
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
                        <li className="flex items-center gap-3 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                            <FiFolder className="text-xl" />
                            Projects
                        </li>
                    </Link>
                    <li className="flex items-center gap-3 mt-5 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                        <FiFolderPlus className="text-xl" />
                        My Projects
                    </li>
                    <li className="flex items-center gap-3 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                        💳 Payments
                    </li>
                    <Link to="/expert/freeresources">
                        <li className="flex items-center gap-3 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                            📚 Resources
                        </li>
                    </Link>
                    <li className="flex items-center gap-3 mt-5 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                        <FiHelpCircle className="text-xl" />
                        Support
                    </li>
                    <Link to="/expert/profile">
                        <li className="flex items-center gap-3 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
                            <FiUser className="text-xl" />
                            Profile
                        </li>
                    </Link>
                </ul>
            </div>

            {/* Main Content Area */}
            <div className="ml-64 w-full min-h-screen flex flex-col">
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

                {/* Main Content */}
                <div className="px-6 py-10 bg-gray-50 flex-grow">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">Free Images and Videos</h1>
                        <p className="mt-4 text-gray-600 text-lg">Search high-quality media resources for free.</p>
                    </div>

                    {/* Search Bar */}
                    <div className="flex justify-center gap-4 mb-8">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search images or videos..."
                            className="w-full sm:w-[500px] px-6 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
                        />
                        <button
                            onClick={handleImages}
                            className="bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl shadow hover:opacity-90 transition"
                        >
                            Search
                        </button>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-center gap-6 mt-6">
                        <button
                            onClick={handleImages}
                            className="px-5 py-2 rounded-xl bg-amber-600 text-white font-medium hover:bg-amber-700 transition"
                        >
                            Images
                        </button>
                        <button
                            onClick={handleVideos}
                            className="px-5 py-2 rounded-xl bg-amber-600 text-white font-medium hover:bg-amber-700 transition"
                        >
                            Videos
                        </button>
                    </div>

                    {/* Images */}
                    {images.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                            {images.map((img: any, index) => (
                                <div key={index} className="rounded-xl overflow-hidden shadow">
                                    <img
                                        src={img.src.medium}
                                        alt={img.alt}
                                        className="w-full h-64 object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Videos */}
                    {videos.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                            {videos.map((video: any, index) => (
                                <div key={index} className="aspect-video w-full rounded-xl overflow-hidden shadow">
                                    <video controls className="w-full h-full object-cover">
                                        <source src={video.video_files[0].link} type="video/mp4" />
                                    </video>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Freeresources;
