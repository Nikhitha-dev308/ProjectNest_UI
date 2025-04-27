import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import axios from 'axios';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [college, setCollege] = useState('');
  const [branch, setBranch] = useState('');
  const [year, setYear] = useState('');
  const [createPassword, setCreatePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (createPassword !== confirmPassword) {
      setError("Passwords don't match!");
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3001/student/signup',
        {
          Fullname: name,
          email,
          Phonenumber: number,
          College: college,
          Branch: branch,
          Year: year,
          Password:confirmPassword,
        },
        {
          headers: { 'Content-type': 'application/json' },
        }
      );

      setSuccess('Account created successfully!');
      setName('');
      setEmail('');
      setNumber('');
      setCollege('');
      setBranch('');
      setYear('');
      setCreatePassword('');
      setConfirmPassword('');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Signup failed. Try again later.');
    }
  };

  return (
    <>
      <Navbar />
 <div className='h-280 flex items-center justify-center bg-gray-100 px-4'>
    <div className='bg-white p-8 rounded-2xl shadow-lg w-150 h-250 max-w-m'>
          <div className='mb-6 text-center'>
            <h1 className='text-4xl text-[#0447a5] font-bold'>PROJECT NEST</h1>
            <p className='text-gray-500'>Learn by Doing. Build with Confidence.</p>
          </div>

          {error && <p className='text-red-600 mb-4'>{error}</p>}
          {success && <p className='text-green-600 mb-4'>{success}</p>}

          <form onSubmit={handleSignUp} className='space-y-5'>
            <div>
              <label className='block mb-2 font-medium'>Full Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className='w-full border border-gray-300 rounded-xl px-4 py-2' type='text' placeholder='Enter full name' required />
            </div>
            <div>
              <label className='block mb-2 font-medium'>Email Address</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full border border-gray-300 rounded-xl px-4 py-2' type='email' placeholder='Enter your email' required />
            </div>
            <div>
              <label className='block mb-2 font-medium'>Phone Number</label>
              <input value={number} onChange={(e) => setNumber(e.target.value)} className='w-full border border-gray-300 rounded-xl px-4 py-2' type='tel' placeholder='Enter number' required />
            </div>
            <div>
              <label className='block mb-2 font-medium'>College</label>
              <input value={college} onChange={(e) => setCollege(e.target.value)} className='w-full border border-gray-300 rounded-xl px-4 py-2' type='text' placeholder='Enter your college' required />
            </div>
            <div>
              <label className='block mb-2 font-medium'>Branch</label>
              <select value={branch} onChange={(e) => setBranch(e.target.value)} className='w-full border border-gray-300 rounded-xl px-4 py-2' required>
                <option value=''>Select your branch</option>
                <option value='CSE'>CSE</option>
                <option value='CSE-DS'>CSE-DS</option>
                <option value='IOT'>IOT</option>
                <option value='AIML'>AIML</option>
                <option value='ECE'>ECE</option>
                <option value='EEE'>EEE</option>
              </select>
            </div>
            <div>
              <label className='block mb-2 font-medium'>Year of Study</label>
              <select value={year} onChange={(e) => setYear(e.target.value)} className='w-full border border-gray-300 rounded-xl px-4 py-2' required>
                <option value=''>Select year</option>
                <option value='1st year'>1st year</option>
                <option value='2nd year'>2nd year</option>
                <option value='3rd year'>3rd year</option>
                <option value='4th year'>4th year</option>
              </select>
            </div>
            <div>
              <label className='block mb-2 font-medium'>Create Password</label>
              <input value={createPassword} onChange={(e) => setCreatePassword(e.target.value)} className='w-full border border-gray-300 rounded-xl px-4 py-2' type='password' placeholder='Create Password' required />
            </div>
            <div>
              <label className='block mb-2 font-medium'>Confirm Password</label>
              <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className='w-full border border-gray-300 rounded-xl px-4 py-2' type='password' placeholder='Confirm Password' required />
            </div>
            <div className='flex items-start mt-4'>
              <input type='checkbox' id='terms' className='mt-1 mr-2' required />
              <label htmlFor='terms' className='text-sm text-gray-700'>
                I agree to the
                <a href='/terms' className='text-blue-600 underline ml-1' target='_blank' rel='noopener noreferrer'>
                  Terms and Conditions
                </a>
              </label>
            </div>
            <button className='w-full py-2 bg-[#1E3A8A] text-white rounded-lg font-medium mt-5 hover:bg-[#122860] transition duration-300' type='submit'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
