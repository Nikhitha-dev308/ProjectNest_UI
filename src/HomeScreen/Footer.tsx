import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#033579] text-white py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo + Tagline */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Project Nest</h3>
          <p className="text-sm text-gray-300">
            Bridging students with expert mentors for real-world learning and impactful innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/studentlogin">Student Login</Link></li>
            <li><Link to="#">Expert Onboarding</Link></li>
            <li><Link to="#">Projects</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="#">Blog</Link></li>
            <li><Link to="#">FAQs</Link></li>
            <li><Link to="#">Support</Link></li>
            <li><Link to="#">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white"><FaFacebookF /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaTwitter /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-300 hover:text-white"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Project Nest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
