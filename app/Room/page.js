import React, { useRef, useEffect } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const myMeeting = async () => {
            const appID = 444743152;
            const serverSecret = "ba3fb655d906c4216afe0df2458bb9fb";
            const roomName = "shafin"; // Replace with your desired room name
            const userID = "shafin"; // Replace with your user ID or unique identifier

            const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
                appID,
                serverSecret,
                roomName,
                Date.now().toString(),
                userID
            );

            // Create instance object from Kit Token.
            const zp = ZegoUIKitPrebuilt.create(kitToken);

            zp.init({
                config: {
                    logLevel: 'debug', // Adjust log level as needed
                },
            });

            // You should set the element reference for rendering the video here.
            zp.mount({
                container: containerRef.current,
            });

            // Join the room
            const joinResult = await zp.joinRoom(roomName);

            if (joinResult) {
                // Handle successful join
            } else {
                // Handle join failure
            }
        };

        myMeeting();
    }, []);

    return (
        <div
            ref={containerRef}
            className="flex min-h-screen flex-col items-center justify-between overflow-hidden p-24"
        ></div>
    );
};

export default Room;
