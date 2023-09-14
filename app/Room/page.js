'use client'
import React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {

    let myMeeting = async (element) => {
        const appID = 444743152;
        const serverSecret = "ba3fb655d906c4216afe0df2458bb9fb";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, "shafin", Date.now().toString(), "shafin");

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            // sharedLinks: [
            //   {
            //     name: 'Personal link',
            //     url:
            //      window.location.protocol + '//' + 
            //      window.location.host + window.location.pathname +
            //       '?roomID=' +
            //       roomID,
            //   },
            // ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
        });



    }
    return (
        <div ref={myMeeting} className="flex min-h-screen flex-col items-center justify-between overflow-hidden p-24">

        </div>
    );
};

export default Room;