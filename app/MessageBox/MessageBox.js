'use client'

import { useContext } from "react";
// This component is messaging section.
// There will be 'AllMessage' component at the top, where conversation will be displayed.
// At the bottom, there will be input field to type and send message.

import AllMessage from "../AllMessage/AllMessage";
import SendingMessageComponent from "../SendingMeesageComponent/SendingMessageComponent";
import TopBarOfMessageBox from "../TopBarOfMessageBox/TopBarOfMessageBox";
import { authContext } from "../layout";

const MessageBox = () => {
    const {screenWidth} = useContext(authContext);
    return (
        <div className={screenWidth<576? "w-full h-screen  flex flex-col justify-start items-center":"w-3/4 h-screen  flex flex-col justify-start items-center"}>
            <TopBarOfMessageBox></TopBarOfMessageBox>
            <AllMessage></AllMessage>
            <SendingMessageComponent></SendingMessageComponent>
        </div>
    );
};

export default MessageBox;