'use client'
// This component is the home page of this messaging app.

import FriendList from "../FriendList/FriendList";
import MessageBox from "../MessageBox/MessageBox";

const Home = () => {
    
    return (
        <div className="flex h-screen w-screen  items-center justify-center overflow-hidden ">

            <FriendList></FriendList>
            <MessageBox></MessageBox>

        </div>
    );
};

export default Home;