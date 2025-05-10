import React, { useState } from "react";
import Footer from '../Student/Footer';
import axios from 'axios';
import { useNavigate } from "react-router";
import AdminNavbar from "./AdminNavbar";

const AdminLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");

    const navigate = useNavigate();

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError("");
        setSuccess("");

        try {
            const response = await axios.post('http://localhost:3002/admin/login', {
                adminEmail: email,
                password: password
            }, {
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.data?.status === 1) {
                localStorage.setItem("adminEmail", email);
                setSuccess("Login successful!");
                setEmail("");
                setPassword("");
                navigate('/admin/dashboard');
            } else {
                setError("Invalid credentials.");
            }
        } catch (err: any) {
            console.error("Login failed:", err);
            setError(err.response?.data?.error || "Login failed. Please try again.");
        }
    };

    return (
        <>
            <AdminNavbar />
            <div className='h-screen flex items-center justify-center bg-gray-100 px-4'>
                <div className='bg-white p-8 rounded-2xl shadow-lg w-120 h-110 max-w-m'>
                    <div className='mb-6 text-center'>
                        <h1 className="text-4xl text-[#0447a5] font-bold">PROJECT NEST</h1>
                        <p className='text-gray-500'>Learn by Doing. Build with Confidence.</p>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className='space-y-5'>
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
                            <p className='text-gray-900 block mb-2 font-medium mt-5'>Password</p>
                            <input
                                value={password}
                                onChange={handlePassword}
                                className='w-full border rounded-xl border-gray-300 px-4 py-2 focus:outline-none focus:ring-[#0447a5] transition'
                                type="password"
                                placeholder='Enter your password'
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 mt-3">{error}</p>}
                        {success && <p className="text-green-500 mt-3">{success}</p>}
                        <p className='text-[#0447a5] hover:underline mt-5 text-right'>Forgot Password?</p>
                        <button
                            className='w-full py-2 bg-[#1E3A8A] text-white rounded-lg font-medium mt-5 hover:bg-[#122860] transition duration-300'
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                    <p className='text-center text-sm text-gray-600 mt-2'>
                        Don't have an account?
                        <span className='text-[#0447a5] hover:underline ml-1 cursor-pointer'>
                            Sign Up
                        </span>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminLogin;
