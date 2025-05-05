import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
    return (
        <>
            <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0284C7] py-2 shadow-lg backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                    {/* Logo */}
                    <div className="flex items-center space-x-5">
                        <img
                            src="/images/logoo.png"
                            alt="Project Nest Logo"
                            className="h-16 w-auto object-contain transition-transform duration-300 transform hover:scale-110"
                        />
                        <Link to='/'>
                            <h1 className="text-white text-4xl font-extrabold tracking-wider hover:text-[#34d399] transition-all duration-300">
                                PROJECT NEST
                            </h1>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-10 text-white font-medium text-lg">
                        <Link
                            to="/about"
                            className="hover:text-[#34d399] hover:scale-110 transition-all duration-300 transform"
                        >
                            About
                        </Link>
                        <Link
                            to="/admin/login"
                            className="hover:text-[#34d399] hover:scale-110 transition-all duration-300 transform"
                        >
                            Login
                        </Link>
                        <Link
                            to="/admin/signup"
                            className="hover:text-[#34d399] hover:scale-110 transition-all duration-300 transform">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default AdminNavbar