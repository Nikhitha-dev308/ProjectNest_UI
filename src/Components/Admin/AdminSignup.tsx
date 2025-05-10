import React, { useState } from "react";
import Footer from '../Student/Footer';
import axios from 'axios';
import AdminNavbar from "./AdminNavbar";

const AdminSignup = () => {
    const [email, setEmail] = useState<string>("");
    const [createPassword, setCreatePassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handleCreatePassword = (e: React.ChangeEvent<HTMLInputElement>) => setCreatePassword(e.target.value);
    const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value);

    const handleSignup = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        if (createPassword !== confirmPassword) {
            setError("Passwords don't match!");
            return;
        }

        try {
            const response = await axios.post('http://localhost:3002/admin/signup', {
                adminEmail: email,
                password: confirmPassword
            }, {
                headers: { 'Content-Type': 'application/json' }
            });

            setSuccess('Account created successfully!');
            setEmail('');
            setCreatePassword('');
            setConfirmPassword('');
        } catch (err: any) {
            setError(err.response?.data?.message || 'Signup failed. Try again later.');
        }
    };

    return (
        <>
            <AdminNavbar />
            <div className='h-screen flex items-center justify-center bg-gray-100 px-4'>
                <div className='bg-white p-8 rounded-2xl shadow-lg w-120 h-auto max-w-md'>
                    <div className='mb-6 text-center'>
                        <h1 className="text-4xl text-[#0447a5] font-bold">PROJECT NEST</h1>
                        <p className='text-gray-500'>Learn by Doing. Build with Confidence.</p>
                    </div>

                    {error && <p className="text-red-500 text-center mb-3">{error}</p>}
                    {success && <p className="text-green-600 text-center mb-3">{success}</p>}

                    <form onSubmit={handleSignup}>
                        <div className='space-y-5'>
                            <div>
                                <p className='text-gray-900 block mb-2 font-medium'>Email Address</p>
                                <input
                                    value={email}
                                    onChange={handleEmail}
                                    className='w-full border border-gray-300 rounded-xl px-4 py-2'
                                    type="email"
                                    placeholder='Enter your email'
                                    required
                                />
                            </div>
                            <div>
                                <p className='text-gray-900 block mb-2 font-medium'>Create Password</p>
                                <input
                                    value={createPassword}
                                    onChange={handleCreatePassword}
                                    className='w-full border rounded-xl border-gray-300 px-4 py-2 focus:outline-none focus:ring-[#0447a5] transition'
                                    type="password"
                                    placeholder='Enter your password'
                                    required
                                />
                            </div>
                            <div>
                                <p className='text-gray-900 block mb-2 font-medium'>Confirm Password</p>
                                <input
                                    value={confirmPassword}
                                    onChange={handleConfirmPassword}
                                    className='w-full border rounded-xl border-gray-300 px-4 py-2 focus:outline-none focus:ring-[#0447a5] transition'
                                    type="password"
                                    placeholder='Confirm your password'
                                    required
                                />
                            </div>
                        </div>

                        <button
                            className='w-full py-2 bg-[#1E3A8A] text-white rounded-lg font-medium mt-6 hover:bg-[#122860] transition duration-300'
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </form>

                    <p className='text-center text-sm text-gray-600 mt-4'>
                        Already have an account?
                        <span className='text-[#0447a5] hover:underline ml-1'>Log In</span>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminSignup;
