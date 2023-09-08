'use client'
import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faVideo, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import {
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverHeader,
    PopoverCloseButton,
    PopoverBody,
    PopoverFooter,
} from "@chakra-ui/react";
import { authContext } from '../layout';
import { useRouter } from 'next/navigation';


const FriendList = () => {
    const { handleLogout, allUser, setFrndImg, setFrndNm } = useContext(authContext)// getting data from layout.js through context API
    const router = useRouter();//Declaring router

    // Create a state to store the search query
    const [searchQuery, setSearchQuery] = useState('');
    const [isPopoverOpen, setPopoverOpen] = useState(false);

    // Function to handle search input changes
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Function to logout user.
    const logout = () => {
        handleLogout();
        router.push('../Login')
    }
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


                <ul  className='w-full ps-5'>
                    {allUser.map(e => <li  className='w-full transition border-b p-3 cursor-pointer hover:bg-cyan-700 hover:text-white text-cyan-700 '>
                         
                         <img 
                         
                         onClick={e=>{
                            setFrndNm(e.userName)
                            setFrndImg(e.photoUrl)
                         }}
                         
                         
                         className='w-9 h-9 rounded-full inline-block' src={e.photoUrl} />
                         
                         
                         
                         <p 
                         onClick={e=>{
                            setFrndNm(e.userName)
                            setFrndImg(e.photoUrl)
                         }}
                          className='inline-block ms-2 w-4/5   text-sm hover:text-slate-200'>{e.userName}</p>
                         
                         
                         </li>)}
                </ul>


            </div>







            {/* Top side green area where user profile pic and logout option is available */}

            {isPopoverOpen && (


                <Button onClick={logout} onClose={() => setPopoverOpen(false)}
                    autoFocus={false} variant="unstyled" className='w-5/12 h-12 hover:bg-red-950 bg-red-900 text-slate-200 cursor:pointer'>Logout</Button>



            )}
            <div className='relative bg-cyan-700 w-full h-16 p-4 flex justify-between items-center'>
                {/* LoggedIn user's profile pic */}
                <img className='w-9 h-9 rounded-full' src='https://www.sportscasting.com/wp-content/uploads/2020/04/Brock-Lesnar.jpg' />



                <div onClick={() => setPopoverOpen(!isPopoverOpen)} className='bg-cyan-700 hover:bg-cyan-900 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center'>
                    <FontAwesomeIcon icon={faEllipsisV} className="text-slate-200 " />
                </div>


            </div>

        </div>
    );
};

export default FriendList;
