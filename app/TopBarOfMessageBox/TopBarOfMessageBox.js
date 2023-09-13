'use client'
//This is the top most component of MessageBox component. In this component, there is an image of message reciever with his/her name and also three dot icon to show that person's info. Also there might be calling feature option.  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faVideo, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useState, useRef } from "react";
import { authContext } from "../layout";
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input } from "@chakra-ui/react";
import { ZegoExpressEngine } from "zego-express-engine-webrtc";




const TopBarOfMessageBox = () => {

    const { frndNm, frndImg } = useContext(authContext); // collecting data from layout.js through context API

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


 
     // Function to make a video call
  const makeVideoCall = (frndID) => {
    // Create a ZegoExpressEngine instance.
    const engine = new ZegoExpressEngine();

    // Start the local video preview.
    engine.startPreview();

    // Publish the local video stream to ZEGOCLOUD.
    engine.publishStream("local", "video");

    // Join the same room as the other user.
    engine.joinRoom("roomID", frndID);

    // Start the remote video playback.
    engine.playStream("remote", "video");
  };

    return (
        <div className=" w-full h-12 bg-slate-200 px-9 py-9 flex justify-between items-center">

            {/* This section contain profile pic or message reciever and name */}
            <div>
                {/* profile pic */}
                <img className="w-10 h-10 rounded-full inline  " src={frndImg} />

                {/* Message reciever's name */}
                <p className="inline font-semibold text-cyan-700  ms-4">{frndNm}</p>
            </div>

            {/* This section contains audio call icon, vide call icon and three dot menu icon */}
            <div className=" flex justify-between items-center">
                {/* audio calling icon */}
                <FontAwesomeIcon icon={faPhone} className="text-cyan-700 mr-3 cursor-pointer" />
                
                {/* Video calling icon */}
                <FontAwesomeIcon onClick={() => makeVideoCall(444743152)}  icon={faVideo} className="text-cyan-700 mr-3 ms-3 cursor-pointer" />
                <div onClick={onOpen} className="w-7 h-7 rounded-full bg-slate-200 hover:bg-slate-400 ms-7 cursor-pointer flex justify-center items-center">
                    <FontAwesomeIcon icon={faEllipsisV} className=" text-cyan-700 "  />
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