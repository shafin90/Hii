'use client'
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { authContext } from '../layout';






const page = () => {

const {name} = useContext(authContext);
console.log(name)
 
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
                <h2 className="text-2xl font-semibold mb-6">Login</h2>

                <form className="space-y-4">

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:outline-none py-2 px-3"
                            placeholder="john@example.com"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Password
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


                    <div>
                        <button
                            type="submit"
                            className="w-full bg-cyan-700 hover:bg-cyan-900 text-white font-semibold py-2 px-4 rounded-md  focus:outline-none focus:ring focus:ring-indigo-200"
                        >
                            Login
                        </button>
                    </div>

                    <p className='text-xs'>Don't have an account? <Link className='font-semibold text-cyan-700' href='../Registration'>Registration</Link></p>


                </form>
            </div>
        </div>
    );
};

export default page;