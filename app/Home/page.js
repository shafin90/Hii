'use client'
import React, { useContext, useState } from 'react';
import FriendList from "../FriendList/FriendList";
import MessageBox from "../MessageBox/MessageBox";
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerBody,
    Button,
} from '@chakra-ui/react'; // Assuming you are using Chakra UI for styling
import { authContext } from '../layout';

const Home = () => {

    const { onOpenList, isOpen, setIsOpen, screenWidth } = useContext(authContext);


    const onClose = () => {
        setIsOpen(false);
    }


    return (
        <div className="flex h-screen w-screen items-center justify-center overflow-hidden">


            <Drawer className={screenWidth > 576 && 'hidden'} isOpen={isOpen} placement='right' onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent className="bg-cyan-950 overflow-y-scroll">
                    <DrawerCloseButton />

                    <DrawerBody className="h-full flex  justify-center items-center">
                        <FriendList visibility={screenWidth>576?"none":"flex"} size="chotoDevice"></FriendList>

                        <Button className="bg-slate-300 ms-11 px-4 py-2 mt-3 w-20 rounded" variant='outline' mr={3} onClick={onClose}>
                             chat
                        </Button>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            <FriendList visibility={screenWidth<576?"none":"flex"} size="boroDevice"></FriendList>
            <MessageBox></MessageBox>
        </div>
    );
};

export default Home;
