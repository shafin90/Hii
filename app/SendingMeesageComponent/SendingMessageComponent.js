'use client'

import React, { useContext, useState } from 'react';
import { authContext } from '../layout';


const SendingMessageComponent = () => {
    // Collecting data from layout.js through context API
    const {screenWidth,message, setMessage, buddyMail, userInfo, sendTrigger, setSendTrigger } = useContext(authContext);

    // Function to handle input changes
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    // Function to handle sending the message (you can implement the actual sending logic)
    const handleSendMessage = () => {
        // Implement your logic to send the message here
        console.log('Message sent:', message);

        fetch('https://hii-server-u2tu.vercel.app/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message, to: buddyMail, from: userInfo.email }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Message sent:', data);

                // Clear the input field
                setMessage('');
             


            })
            .catch((error) => {
                console.error('Error sending message:', error);
            });

        // Clear the input field
        setMessage('');

    };


    // Function to send message when user click enter button after typing message
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // Prevent the default behavior of the Enter key (e.g., newline in a textarea)
            event.preventDefault();
            // Call the send message function
            handleSendMessage();
        }
    };

    return (
        <div className={screenWidth<576?'w-full h-1/6 px-3 bg-slate-200 flex justify-between items-center':'w-full h-1/6 px-28 bg-slate-200 flex justify-around items-center'}>
            <input
                type='text'
                placeholder='Type your message...'
                value={message}
                onChange={handleMessageChange}
                className='w-9/12 p-2 border rounded-l border-gray-300'
                onKeyDown={handleKeyDown}
            />
            <button
                onClick={handleSendMessage}
                className={screenWidth<576?'w-2/12 p-2 rounded-full text-sm bg-cyan-700 hover:bg-cyan-900 text-white font-semibold  rounded-r':'w-2/12 ms-5 bg-cyan-700 hover:bg-cyan-900 text-white font-semibold p-2 rounded-r'}
            >
                {screenWidth<576?">>":"send"}
            </button>
        </div>
    );
};

export default SendingMessageComponent;
