import React, { useState, useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const [roomID, setRoomID] = useState('shafin');
    const divRef = useRef(null);

    useEffect(() => {
        const appID = 444743152;
        const serverSecret = "ba3fb655d906c4216afe0df2458bb9fb";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "shafin");

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        // Configure the container element
        const element = divRef.current;

        if (element) {
            zp.joinRoom({
                container: element,
                scenario: {
                    mode: ZegoUIKitPrebuilt.OneONoneCall,
                },
            });
        }

        return () => {
            // Clean up any resources when the component unmounts
            zp.destroy();
        };
    }, [roomID]);

    return <div ref={divRef}></div>;
};

export default Room;
