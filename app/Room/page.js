'use client'

import React, { useState } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { data } from 'autoprefixer';

const Room = () => {
    const [roomID, setRoomID] = useState('shafin');

    let myMeeting = async (element) => {
        const appID = 444743152;
        const serverSecret = "ba3fb655d906c4216afe0df2458bb9fb";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "shafin");


        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            // sharedLinks: [
            //     {
            //         name: 'Personal link',
            //         url:
            //             window.location.protocol + '//' +
            //             window.location.host + window.location.pathname +
            //             '?roomID=' +
            //             roomID,
            //     },
            // ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
        });




    }


    return (
        <div ref={myMeeting} >
            
        </div>
    );
};

export default Room;