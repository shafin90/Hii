'use client'
import React, { useContext, useEffect, useState } from 'react';
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
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter
} from "@chakra-ui/react";
import { authContext } from '../layout';
import { useRouter } from 'next/navigation';





const FriendList = ({visibility,size}) => {
    const { screenWidth, handleLogout, allUser,setAllUser, setFrndImg, setFrndNm, buddyMail, setBuddyMail, profilePic, loggedInUserName, loggedInUserMail, loggedInUserPhoneNumber } = useContext(authContext)// getting data from layout.js through context API
    const router = useRouter();//Declaring router

    // Create a state to store the search query
    const [searchQuery, setSearchQuery] = useState('');
    const [isPopoverOpen, setPopoverOpen] = useState(false);
    const [isUserProfileModalOpen, setUserProfileModalOpen] = useState(false); // Track the modal's open state
   
    const [filteredUsers, setFilteredUsers] = useState([]);

    // Function to handle search input changes
    useEffect(() => {
        const filtered = allUser.filter(user => user.phoneNumber.includes(searchQuery));
        setFilteredUsers(filtered);
    }, [searchQuery, allUser]);


    
    // Function to logout user.
    const logout = () => {
        handleLogout();
        router.push('../Login')
    }



    // Function to open the user profile modal
    const openUserProfileModal = () => {
        setUserProfileModalOpen(true);
    }

    // Function to close the user profile modal
    const closeUserProfileModal = () => {
        setUserProfileModalOpen(false);
    }


 
    return (
        <div  className={visibility=='flex'?size=="chotoDevice"?"w-3/4 drop-shadow-xl bg-slate-300 h-screen flex flex-col justify-between items-center":"w-1/4 drop-shadow-xl bg-slate-300 h-screen flex flex-col justify-between items-center":"w-1/4 drop-shadow-xl bg-slate-300 h-screen hidden"}>
            <div>
                <div className="p-4">
                    {/* Input field to search a friend*/}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search phone number"
                            value={searchQuery}
                            onChange={e=>setSearchQuery(e.target.value)}
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

                <ul className='w-full ps-5 '>
                    {filteredUsers.map(event => <li onClick={e => {
                        setFrndImg(event.photoUrl)
                        setFrndNm(event.userName)
                        setBuddyMail(event?.email)
                        // console.log(event?.email)
                    }}
                        className='w-full transition border-b p-3 cursor-pointer hover:bg-cyan-700 hover:text-white text-cyan-700 '>
                        <img className='w-9 h-9 rounded-full inline-block' src={event.photoUrl} />
                        <p className='inline-block ms-2 w-4/5   text-sm hover:text-slate-200'>{event.userName}</p>
                    </li>)}
                </ul>
            </div>

            {/* Top side green area where user profile pic and logout option is available */}

            <div className='relative bg-cyan-700 w-full h-16 p-4 flex justify-between items-center'>
                {/* LoggedIn user's profile pic */}
                <img className='w-9 h-9 rounded-full cursor-pointer' src={profilePic} onClick={openUserProfileModal} />


                {/* Logout Button */}
                {isPopoverOpen && (
                    <Button onClick={logout} onClose={() => setPopoverOpen(false)}
                        autoFocus={false} variant="unstyled" className='w-5/12 h-12 hover:bg-red-950 bg-red-900 text-slate-200   z-10 cursor:pointer'>Logout</Button>

                )}


                {/* Three Dot icons */}
                <div onClick={() => setPopoverOpen(!isPopoverOpen)} className='bg-cyan-700 hover:bg-cyan-900 cursor-pointer rounded-full w-8 h-8 flex justify-center items-center'>
                    <FontAwesomeIcon icon={faEllipsisV} className="text-slate-200 " />
                </div>


            </div>



            {/* Need a modal here */}
            <Modal className=" w-3/5 h-4/6 " isOpen={isUserProfileModalOpen} onClose={closeUserProfileModal}>
                <ModalOverlay />
                <ModalContent className=' bg-cyan-900  w-5/6 h-5/6 flex justify-center items-center'>

                    <ModalBody className=' w-3/4 mt-12'>
                        {/* Display user profile information here */}
                        <img className='w-24 h-24 rounded-full' src={profilePic} alt="User Profile" />
                        <h1 className=' font-semibold mt-2 text-white text-4xl '>{loggedInUserName}</h1>
                        <p className=' text-white my-2'>{loggedInUserMail}</p>
                        <p className=' text-white'>{loggedInUserPhoneNumber}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button className=' w-28 h-10 bg-cyan-50 rounded-xl mb-10 text-cyan-950' onClick={closeUserProfileModal}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>


        </div>
    );
};

export default FriendList;
