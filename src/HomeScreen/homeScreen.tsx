import React from 'react';
import { Link } from 'react-router';
import ProjectCard from './ProjectCard';
import Feedback from './Feedback';
import Footer from './Footer';
// import PN_Logo.png from '/images/'


const HomeScreen = () => {
  return (
    <div>
      {/* Navbar */}
      <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0284C7] py-2 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-5">
          <img
            src="/images/logoo.png"
            alt="Project Nest Logo"
            className="h-16 w-auto object-contain transition-transform duration-300 transform hover:scale-110"
          />
          <h1 className="text-white text-4xl font-extrabold tracking-wider hover:text-[#34d399] transition-all duration-300">
            PROJECT NEST
          </h1>
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
            to="/expert/home"
            className="hover:text-[#34d399] hover:scale-110 transition-all duration-300 transform"
          >
            Expert Teaching
          </Link>
          <Link
            to="/student/login"
            className="hover:text-[#34d399] hover:scale-110 transition-all duration-300 transform"
          >
            Login
          </Link>
          <Link
            to="/student/signup"
            className="hover:text-[#34d399] hover:scale-110 transition-all duration-300 transform">
            Sign Up
          </Link>
        </div>
      </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gray-100 py-40">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-500 mb-6">
            Welcome to <span className="text-[#033579]">Project Nest</span>
          </h1>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          Empowering students and experts through collaborative learning. Start your journey today and experience the next-gen education hub!
          </p>
          <div className="space-x-6">
            <Link to="/student/login">
              <button className="bg-[#033579] hover:bg-blue-900 text-white px-6 py-3 cursor-pointer rounded-full text-lg font-medium shadow-lg transition-all">
                Join as Student
              </button>
            </Link>
            <Link to="/expert/home">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 cursor-pointer rounded-full text-lg font-medium shadow-lg transition-all">
              Become an Expert
            </button>
            </Link>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
            <div className="max-w-6xl mx-auto text-center px-6">
                <h2 className="text-4xl font-bold mb-10 text-[#033579]">Why Join Project Nest?</h2>
                <div className="grid sm:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-2xl font-semibold text-[#033579] mb-2">🌱 Hands-on Learning</h3>
                    <p className="text-gray-600">Work on real challenges with industry relevance.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-[#033579] mb-2">🎯 Expert Mentorship</h3>
                    <p className="text-gray-600">Get guidance from professionals and mentors.</p>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-[#033579] mb-2">🚀 Build Your Projects</h3>
                    <p className="text-gray-600">Showcase real projects to stand out in placements.</p>
                </div>
                </div>
            </div>
        </section>

        {/* popular projects */}
        <ProjectCard/>

        {/* students feedback */}
        <Feedback/>

        {/* footer section */}
        <Footer/>
    </div>
  );
};

export default HomeScreen;
