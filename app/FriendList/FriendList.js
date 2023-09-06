'use client'
import React, { useState } from 'react';

const FriendList = () => {
    // Create a state to store the search query
    const [searchQuery, setSearchQuery] = useState('');
   
    // Function to handle search input changes
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="w-1/4 drop-shadow-xl bg-slate-300 h-screen">
            <div className="p-4">
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
                        className= "h-6 w-4 absolute top-2 right-2 text-gray-500 "
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
            </div>
            {/* Add your friend list rendering here */}
        </div>
    );
};

export default FriendList;
