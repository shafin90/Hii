'use client'

// This component is messaging section.
// There will be 'AllMessage' component at the top, where conversation will be displayed.
// At the bottom, there will be input field to type and send message.

import AllMessage from "../AllMessage/AllMessage";
import SendingMessageComponent from "../SendingMeesageComponent/SendingMessageComponent";

const MessageBox = () => {
    return (
        <div className="w-3/4 h-screen  flex flex-col justify-start items-center">
            <AllMessage></AllMessage>
            <SendingMessageComponent></SendingMessageComponent>
        </div>
    );
};

export default MessageBox;