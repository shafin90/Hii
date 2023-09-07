'use client'

import React, { useState } from 'react';


const SendingMessageComponent = () => {
    // Create a state to store the input value
    const [message, setMessage] = useState('');

    // Function to handle input changes
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
   
    };

    // Function to handle sending the message (you can implement the actual sending logic)
    const handleSendMessage = () => {
        // Implement your logic to send the message here
        console.log('Message sent:', message);

        // Clear the input field
        setMessage('');
    };

    return (
        <div className='w-full h-1/6 px-28  bg-slate-200 flex justify-around items-center'>
            <input
                type='text'
                placeholder='Type your message...'
                value={message}
                onChange={handleMessageChange}
                className='w-9/12 p-2 border rounded-l   border-gray-300 '
            />
            <button
                onClick={handleSendMessage}
                className='w-2/12 ms-5 bg-cyan-700 hover:bg-cyan-900 text-white font-semibold p-2 rounded-r'
            >
                Send
            </button>
        </div>
    );
};

export default SendingMessageComponent;
