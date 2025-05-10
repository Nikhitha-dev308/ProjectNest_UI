import { useState } from 'react';
import axios from 'axios';
import { FiPlusCircle } from 'react-icons/fi';
import { HiOutlineLogout } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';


const CreateProject = () => {
  const [show, setShow] = useState(false);

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };


  const handleTitle = (event: any) => {
    setTitle(event.target.value);
  };

  const handleDescription = (event: any) => {
    setDescription(event.target.value);
  };

  const handleIdea = async (event: any) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3002/student/submitidea',
        {
          title: title,
          description: description
        },
        {
          headers: { 'content-type': 'application/json' }
        }
      );
      setTitle('');
      setDescription('');
      alert('Your idea has been submitted successfully!');

    } catch (error) {
      console.log('Idea submission failed', error);
      alert('Failed to submit your idea. Please try again.');
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="bg-gradient-to-r from-[#1E3A8A] via-[#2563EB] to-[#0284C7] shadow-md px-8 py-4 flex justify-between items-center">
        <Link to='/student/dashboard'><h2 className="text-lg font-medium text-white">Hello, Student 👋</h2></Link>
        <div className="flex items-center gap-4 group">
          <Link to="/student/createproject">
            <FiPlusCircle className="text-3xl text-white cursor-pointer" />
          </Link>
          <span className="text-sm text-white opacity-70 group-hover:opacity-100 transition">Create</span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-5 py-2 bg-white text-[#1E3A8A] rounded-full hover:bg-[#063a8c] hover:text-white transition duration-200 cursor-pointer"
          >
            <HiOutlineLogout />
            Logout
          </button>
        </div>
      </div>



      <div className="flex h-162 font-sans bg-gradient-to-r from-[#e0f2fe] via-white to-[#f0f9ff] sticky">
        {/* Left - Form */}
        <div className="w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4 text-center">Submit Your Project Idea</h2>
            <form className="space-y-4">
              <div className="relative">
                <input
                  onChange={handleTitle}
                  value={title}
                  type="text"
                  id="title"
                  className="peer w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                />
                <label
                  htmlFor="title"
                  className="absolute left-4 top-2 text-gray-500 text-sm transition-all 
                  peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                  peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1E3A8A]"
                >
                  Project Title
                </label>

              </div>

              <div className="relative">
                <textarea
                  onChange={handleDescription}
                  value={description}
                  id="description"
                  required
                  className="peer w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                ></textarea>
                <label
                  htmlFor="description"
                  className="absolute left-4 top-2 text-gray-500 text-sm transition-all
                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                    peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1E3A8A]"
                >
                  Brief Description
                </label>
              </div>

              <button
                onClick={handleIdea}
                className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#0284C7] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition"
              >
                Submit Idea
              </button>
            </form>
          </div>
        </div>

        {/* Right - Description */}
        <div className="w-1/2 flex items-center justify-center px-10 text-center bg-gradient-to-bl from-[#1E3A8A] via-[#2563EB] to-[#0284C7] text-white">
          <div className="max-w">
            <h2 className="text-4xl font-bold mb-6">Welcome to Project Nest</h2>
            <p className="text-lg leading-relaxed">
              Project Nest is your go-to platform to bring your innovative project ideas to life. Submit your ideas confidently—
              we prioritize your privacy and intellectual rights. Your idea remains exclusively yours, and we ensure that it will never be used
              without your permission. Let’s build something great together!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
