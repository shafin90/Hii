'use client'
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import { authContext } from '../layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';


const page = () => {
    const router = useRouter();
    const { screeenWidth, handleLogin, userInfo } = useContext(authContext);//Getting data from layout.js through context API
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    // Function for handling login of user
    const login = () => {
        handleLogin(email, password)

    }
    if (userInfo !== null) {

        router.push('../Home')
    }



    // Initializing AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of the animation
            offset: 200, // Offset (in pixels) from the top of the element to start the animation
            easing: 'ease-in-out', // Easing options ('linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out')
            once: true, // Whether animation should only happen once - while scrolling down
        });
    }, []);

    // Tooltip is inilialized here to alert a user about password structure
    useEffect(() => {
        // Initialize tooltips
        tippy('.tooltip', {
            content: 'Password must be atleast 8 characters, Atleast 1 capital letter, 1 smaller letter, 1 special character', // Tooltip content
            placement: 'top', // Tooltip placement

        });
    }, []);

    return (
        <div className={screeenWidth>576?"flex min-h-screen flex-col items-center justify-center overflow-hidden p-24":"flex min-h-screen flex-col items-center justify-center overflow-hidden p-4"}>
            <div data-aos="fade-up" data-aos-duration="1000" className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
                <h2 className="text-2xl font-semibold mb-6">Login</h2>

                <form className="space-y-4" >

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
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Password
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


                    <div>
                        <button
                            onClick={login}
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
