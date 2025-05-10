import axios from 'axios';
import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import { FiFolder, FiFolderPlus, FiHelpCircle, FiUser, FiPlusCircle } from 'react-icons/fi';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';

const AskAi = () => {
    const [show, setShow] = useState(false) as any;

    const navigate = useNavigate();
    const [messages, setMessages] = useState([{ sender: 'ai', text: 'Hello! How can I help you today?' }]);
    const [input, setInput] = useState('');

    const GEMINI_API_KEY = 'AIzaSyCbJDAQe-DIdQ8Ee3goLHcN3nIPZuaF3Ns';

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    const handleSend = async () => {

        // user's message
        setMessages(prevMessages => [...prevMessages, { sender: 'user', text: input }]);
        setInput('');
        try {
            const response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
                {
                    contents: [
                        {
                            parts: [{ text: input }]
                        }
                    ]
                },
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(response);
            // ai response
            const aiText = response.data.candidates[0].content.parts[0].text;
            setMessages(prevMessages => [...prevMessages, { sender: 'ai', text: aiText }]);
        } catch (error) {
            setMessages(prevMessages => [...prevMessages, { sender: 'ai', text: 'Sorry, something went wrong.' }]);
            console.error('Error from Gemini API:', error);
        }

        // setInput('');
    };

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

            {/* Main Content */}
            <div className="ml-64 w-full min-h-screen flex flex-col">
                {/* Navbar */}
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

                {/* Chat Content */}
                <div className="  flex-grow px-6 py-4 bg-gray-50 relative">
                    {/* Chat Messages */}
                    <div className="flex flex-col gap-4 overflow-y-auto flex-grow mb-28 max-h-[70vh]">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`max-w-xl px-5 py-3 rounded-xl shadow-md ${msg.sender === 'user'
                                    ? 'bg-blue-500 text-white self-end'
                                    : 'bg-white border border-gray-200 self-start'
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Message Input */}
                    <div className="absolute bottom-0 left-0 w-full px-6 py-4 bg-white border-t flex gap-4">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            type="text"
                            placeholder="Type your question..."
                            className="flex-grow px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            onClick={handleSend}
                            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AskAi;
