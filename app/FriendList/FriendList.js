'use client'
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faVideo, faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const FriendList = () => {
    // Create a state to store the search query
    const [searchQuery, setSearchQuery] = useState('');

    // Function to handle search input changes
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="w-1/4 drop-shadow-xl bg-slate-300 h-screen flex flex-col justify-between items-center">
            <div>
                <div className="p-4">
                    {/* Input field to search a friend*/}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search friends..."
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            className="w-full p-2 pr-10 border rounded border-gray-300"

                        />
                        <svg

                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-4 absolute top-2 right-2 text-gray-500 "
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            pointerEvents="none"

                        >
                            <path

                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-6a8 8 0 11-16 0 8 8 0 0116 0z"
                            />
                        </svg>
                    </div>

                    {/* Add your friend list rendering here */}
                </div>
            </div>







            {/* Top side green area where user profile pic and logout option is available */}
            <div className='relative bg-cyan-700 w-full h-16 p-4 flex justify-between items-center'>
                {/* LoggedIn user's profile pic */}
                <img className='w-9 h-9 rounded-full' src='https://www.sportscasting.com/wp-content/uploads/2020/04/Brock-Lesnar.jpg' />
                <FontAwesomeIcon icon={faEllipsisV} className="text-slate-200 ms-7" />
            </div>
        </div>
    );
};

export default FriendList;
