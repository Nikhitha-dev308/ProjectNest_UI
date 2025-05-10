import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import { FiBell, FiFolder, FiFolderPlus, FiHelpCircle, FiUser, FiPlusCircle } from 'react-icons/fi';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const PEXELS_API_KEY = 'jRxSY76NgWxTk8R6Ho6iMFO5TuY4iOHM6ETxx7U2naBK8EjU7QzkJ4kY';

const FreeResources = () => {
    const [show, setShow] = useState(false) as any;

    const [videos, setVideos] = useState([]);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false) as any;
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
            setLoading(true);
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
            <div className="w-64 h-screen fixed top-0 left-0 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0284C7] shadow-md px-6 py-6">
                <Link to='/' className="group relative block text-center mb-10">
                    <h1 className="text-white text-2xl font-extrabold tracking-wider hover:text-[#34d399] transition-all duration-300">
                        PROJECT NEST
                    </h1>
                    <span className="transform -translate-x-1/2 mt-1 text-sm text-white opacity-0 group-hover:opacity-100 transition duration-300">
                        Student Dashboard
                    </span>
                </Link>
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
                    <li className="flex items-center gap-3 mt-5 cursor-pointer hover:text-[#d7e4f7] hover:underline transition">
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
            <div className="ml-64 w-full min-h-screen flex flex-col">
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

                {/* Content */}
                <div className="px-6 py-10 bg-gray-50 flex-grow">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">Free Images and Videos</h1>
                        <p className="mt-4 text-gray-600 text-lg">Search high-quality media resources for free.</p>
                    </div>

                    {/* Search Bar */}
                    <div className="flex justify-center gap-4 mb-8">
                        <input
                            type="text"
                            value={" "}
                            onChange={(e: any) => setSearch(e.target.value)}
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

                    {loading ? <>{images.length > 0 && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                            {images.map((img: any, index) => (
                                <div key={index} className="rounded-xl overflow-hidden shadow">
                                    <img src={img.src.medium} alt={img.alt} className="w-full h-64 object-cover" />
                                </div>
                            ))}
                        </div>
                    )}</> : <><div role="status" className="text-center  mt-15">
                        <svg aria-hidden="true" className="inline w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div></>}


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

export default FreeResources;
