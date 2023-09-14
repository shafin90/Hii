'use client'
//This is the top most component of MessageBox component. In this component, there is an image of message reciever with his/her name and also three dot icon to show that person's info. Also there might be calling feature option.  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faVideo, faEllipsisV, faPeopleGroup, faScroll, faScrollTorah, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useState, useRef } from "react";
import { authContext } from "../layout";
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input } from "@chakra-ui/react";
import { useRouter } from "next/navigation";






const TopBarOfMessageBox = () => {

    const { makeScroll, setMakeScroll, screenWidth, frndNm, frndImg, onOpenList } = useContext(authContext); // collecting data from layout.js through context API

    const router = useRouter();

    // Define state variables for the drawer
    const [isOpen, setIsOpen] = useState(false);
    const btnRef = React.useRef();

    // Function to open the drawer
    const onOpen = () => {
        setIsOpen(true);
    };

    // Function to close the drawer
    const onClose = () => {
        setIsOpen(false);
    };

    const click = () => {
        setMakeScroll(!makeScroll)
    }

    const vedioCall = () => {
        router.push('../Room')
    }



    return (
        <div className={screenWidth > 576 ? " w-full h-12 bg-slate-200 px-9 py-9 flex justify-between items-center" : " w-full h-12 bg-slate-200 px-3 py-9 flex justify-between items-center"}>

            {/* This section contain profile pic or message reciever and name */}
            <div>
                {/* profile pic */}
                <img className="w-10 h-10 rounded-full inline  " src={frndImg} />

                {/* Message reciever's name */}
                <p className="inline font-semibold text-cyan-700  ms-4">{screenWidth < 576 ? '' : frndNm}</p>
            </div>

            {/* This section contains audio call icon, vide call icon and three dot menu icon */}
            <div className=" flex justify-between items-center">
                {/* scroll feature */}
                <FontAwesomeIcon onClick={click} icon={faArrowCircleUp} className={makeScroll ? "text-cyan-950 me-6 text-xl cursor-pointer" : "text-cyan-700 me-6 cursor-pointer"} />
                {screenWidth < 576 && <FontAwesomeIcon onClick={onOpenList} icon={faPeopleGroup} className="text-cyan-700  me-5 cursor-pointer" />}

                {/* audio calling icon */}
                <FontAwesomeIcon icon={faPhone} className="text-cyan-700 mr-3 cursor-pointer" />

                {/* Video calling icon */}
                <FontAwesomeIcon onClick={vedioCall} icon={faVideo} className="text-cyan-700 mr-3 ms-3 cursor-pointer" />
                <div onClick={onOpen} className={screenWidth < 576 ? "w-7 h-7 rounded-full bg-slate-200 hover:bg-slate-400  cursor-pointer flex justify-center items-center" : "w-7 h-7 rounded-full bg-slate-200 hover:bg-slate-400 ms-7 cursor-pointer flex justify-center items-center"}>
                    <FontAwesomeIcon icon={faEllipsisV} className=" text-cyan-700 " />
                </div>
            </div>





            {/* Chakra UI- Drawer */}
            <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
                <DrawerOverlay />
                <DrawerContent className=" bg-cyan-950">
                    <DrawerCloseButton />

                    <DrawerBody className=" h-full flex flex-col justify-center items-center">
                        <img src={frndImg} className=" w-40 h-40 rounded-full mb-3" />
                        <h1 className=" text-white  text-4xl mb-3 font-semibold ">{frndNm}</h1>

                        <Button className="  bg-slate-300  px-4 py-2 mt-3 w-20 rounded " variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>

        </div>
    );
};

export default TopBarOfMessageBox;