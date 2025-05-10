import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from "axios";

const ExpertSignup = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [experience, setExperience] = useState<number>();
  const [url, setUrl] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [createpassword, setCreatepassword] = useState("") as any;
  const [confirmpassword, setConfirmpassword] = useState("") as any;
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignUp = async (event: any) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    // Check for password mismatch
    // if (createpassword !== confirmpassword) {
    //   setError("Passwords don't match!");
    //   return;
    // }
    // return false;
    try {
      // Sending request to backend
      const response = await axios.post(
        'http://localhost:3002/expert/signup',
        {
          name,
          email,
          phone,
          experience,
          github: url,
          city,
          createpassword,
          confirmpassword
        },
        {
          headers: { 'Content-type': 'application/json' }
        }
      );
      // console.log(response)
      // return false;
      // Successful signup
      if (response.status === 200) {
        setSuccess('Account created successfully!');
        setName('');
        setEmail('');
        setPhone('');
        setExperience(undefined);
        setUrl('');
        setCity('');
        setCreatepassword('');
        setConfirmpassword('');
      }
    } catch (err: any) {
      console.error("Error during signup:", err);
      setError(err.response?.data?.message || 'Signup failed. Try again later.');
    }
  };

  return (
    <>
      <Navbar />
      <div className='h-280 flex items-center justify-center bg-gray-100 px-4'>
        <div className='bg-white p-8 rounded-2xl shadow-lg w-150 h-250 max-w-m'>
          <div className='mb-6 text-center'>
            <h1 className="text-4xl text-[#0447a5] font-bold">PROJECT NEST</h1>
            <p className='text-gray-500'>Learn by Doing. Build with Confidence.</p>
          </div>

          <div className='space-y-5'>
            <p className='text-gray-900 block mb-2 font-medium'>Full Name</p>
            <input value={name} onChange={(e) => setName(e.target.value)} className='w-full border border-gray-300 rounded-xl px-4 py-2' type="text" placeholder='Enter full name' required />
          </div>
          <div className='space-y-5'>
            <p className='text-gray-900 block mb-2 font-medium mt-5'>Email Address</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full border border-gray-300 rounded-xl px-4 py-2' type="email" placeholder='Enter your email' required />
          </div>
          <div className='space-y-5'>
            <p className='text-gray-900 block mb-2 font-medium mt-5'>Phone Number</p>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} className='w-full border border-gray-300 rounded-xl px-4 py-2' type="text" placeholder='Enter number' required />
          </div>
          <div className='space-y-5'>
            <p className='text-gray-900 block mb-2 font-medium mt-5'>Professional Experience</p>
            <input value={experience} onChange={(e) => setExperience(parseInt(e.target.value))} className='w-full border border-gray-300 rounded-xl px-4 py-2' type="number" placeholder='Enter your professional experience in years' required />
          </div>
          <div className='space-y-5'>
            <p className='text-gray-900 block mb-2 font-medium mt-5'>GitHub Profile Link</p>
            <input value={url} onChange={(e) => setUrl(e.target.value)} className='w-full border border-gray-300 rounded-xl px-4 py-2' type="url" placeholder='Enter your GitHub profile URL' required />
          </div>
          <div className='space-y-5'>
            <p className='text-gray-900 block mb-2 font-medium mt-5'>City</p>
            <input value={city} onChange={(e) => setCity(e.target.value)} className='w-full border border-gray-300 rounded-xl px-4 py-2' type="text" placeholder='Enter your City' required />
          </div>
          <div className='space-y-5'>
            <p className='text-gray-900 block mb-2 font-medium mt-5'>Create Password</p>
            <input value={createpassword} onChange={(e) => setCreatepassword(e.target.value)} className='w-full border border-gray-300 rounded-xl px-4 py-2' type="password" placeholder='Create Password' required />
          </div>
          <div className='space-y-5'>
            <p className='text-gray-900 block mb-2 font-medium mt-5'>Confirm Password</p>
            <input value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} className='w-full border border-gray-300 rounded-xl px-4 py-2' type="password" placeholder='Confirm Password' required />
          </div>
          <div className='flex items-start mt-6'>
            <input type="checkbox" id="terms" className="mt-1 mr-2" required />
            <label htmlFor="terms" className='text-sm text-gray-700'>I agree to the <a href="/terms" className='text-blue-600 underline ml-1' target='_blank' rel='noopener noreferrer'>Terms and Conditions</a></label>
          </div>

          <button onClick={handleSignUp} className='w-full py-2 bg-[#1E3A8A] text-white rounded-lg font-medium mt-7 hover:bg-[#122860] transition duration-300' >Sign Up</button>
          {error && <div className="text-red-500 mt-3">{error}</div>}
          {success && <div className="text-green-500 mt-3">{success}</div>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ExpertSignup;
