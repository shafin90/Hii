'use client'

import { useContext, useEffect, useRef, useState } from "react";
import { authContext } from "../layout";

// This component is the conversation screen. 
//user's all chat will be displayed here

const AllMessage = () => {
    const {screenWidth, sendTrigger, setSendTrigger, buddyMail, setBuddyMail, userInfo } = useContext(authContext);

    // const {conversation} = useContext(authContext);
    const [text, setText] = useState([]) // All conversation to every body
    const [chat, setChat] = useState([]) // conversation with specific person


    const messageDivRef = useRef(null);


    useEffect(() => {
        fetch('https://hii-server-u2tu.vercel.app/conversation')
            .then(res => res.json())
            .then(data => setText(data))
    }, [sendTrigger, setSendTrigger, setBuddyMail, buddyMail])


    useEffect(() => {
        const newChat = text.filter(e => (e.from == userInfo?.email && e.to == buddyMail) || (e.to == userInfo?.email && e.from == buddyMail));
        setChat(newChat);


        console.log(chat)

    }, [text, setText])


    // useEffect(() => {
    //     messageDivRef.current.scrollTop = messageDivRef.current.scrollHeight;
    // }, [chat, setChat])



    return (
        <div ref={messageDivRef} className="h-5/6 overflow-y-scroll bg-slate-200 w-full">
            <div className={screenWidth<576?" bottom-0 flex flex-col justify-end items-end w-full bg-slate-200  px-3":" bottom-0 flex flex-col justify-end items-end w-full bg-slate-200  px-9"} >
                {
                    chat.map(e => <div className={e.to == buddyMail ? " w-full flex justify-end items-center" : " w-full flex justify-start items-center"} ><p className={e.to == buddyMail ? " bg-cyan-900 rounded-xl inline-block text-white px-3 py-2 mb-3" : " bg-white rounded-xl  inline-block text-cyan-950 px-3 py-2 mb-3"}>{e.message}</p></div>)
                }

            </div>
        </div>
    );
};

export default AllMessage;