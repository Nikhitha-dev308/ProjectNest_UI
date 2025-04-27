import React,{useState} from 'react';
import Navbar from '../../HomeScreen/Navbar';
import axios from 'axios';

const CreateProject = () => {

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleTitle = (event: any) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  }

  const handleDescription = (event: any) => {
    console.log(event.target.value);
    setDescription(event.target.value);
  }

  const handleIdea = async(event : any) => {
    event.preventDefault();
    try{
      const response = await axios.post("http://localhost:3001/submitidea",{
        title:title,
        description:description
      },{
        headers: {'content-type' : 'application/json'}
      });

    }catch(error){
      console.log("Idea submission failed" , error)
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex h-162 font-sans  bg-gradient-to-r from-[#e0f2fe] via-white to-[#f0f9ff] sticky">
      {/* Left - Form */}
      <div className="w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-2xl font-bold text-[#1E3A8A] mb-4 text-center">Submit Your Project Idea</h2>
          <form className="space-y-4">
            <div className="relative">
              <input
                onChange={handleTitle}
                type="text"
                id="title"
                placeholder=" "
                className="peer w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
              />
              <label
                htmlFor="title"
                className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1E3A8A]"
              >
                Project Title
              </label>
            </div>

            <div className="relative">
              <textarea
                onChange={handleDescription}
                id="description"
                placeholder=" "
                required
                className="peer w-full border border-gray-300 rounded-lg px-4 pt-4 pb-2 focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
              ></textarea>
              <label
                htmlFor="description"
                className="absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#1E3A8A]"
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
