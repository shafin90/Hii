'use client'
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { authContext } from '../layout';


const page = () => {
    const { handleRegistration, name } = useContext(authContext)// collecting data from layout.js through context API
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    console.log(name)
    const register = () => {
        handleRegistration(email, password);
    }


    // Tooltip is inilialized here to alert a user about password structure
    useEffect(() => {
        // Initialize tooltips
        tippy('.tooltip', {
            content: 'Password must be atleast 8 characters, Atleast 1 capital letter, 1 smaller letter, 1 special character', // Tooltip content
            placement: 'top', // Tooltip placement

        });
    }, []);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden p-24">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-6">Registration</h2>

                <form className="space-y-4">

                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none py-2 px-3"
                            placeholder="John Doe"
                            required
                        />
                    </div>




                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none py-2 px-3"
                            placeholder="john@example.com"
                            required
                        />
                    </div>


                    <div className="space-y-2">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                            Create Password
                        </label>
                        <input

                            type="password"
                            id="password"
                            name="password"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none py-2 px-3 tooltip"
                            placeholder="********"
                            required
                        />
                    </div>


                    <div className="space-y-2">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            name="password"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none py-2 px-3 tooltip"
                            placeholder="********"
                            required
                        />
                    </div>






                    <div className="space-y-2">
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none py-2 px-3"
                            placeholder="123-456-7890"
                            required
                        />
                    </div>




                    <div>
                        <button
                            onClick={register}
                            type="submit"
                            className="w-full bg-cyan-700 hover:bg-cyan-900 text-white font-semibold py-2 px-4 rounded-md  focus:outline-none focus:ring focus:ring-indigo-200"
                        >
                            Registration
                        </button>
                    </div>

                    <p className='text-xs'>Already have an account? <Link className='font-semibold text-cyan-700' href='../Login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default page;
