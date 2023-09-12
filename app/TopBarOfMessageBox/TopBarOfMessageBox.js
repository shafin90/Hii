'use client'
//This is the top most component of MessageBox component. In this component, there is an image of message reciever with his/her name and also three dot icon to show that person's info. Also there might be calling feature option.  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faVideo, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { authContext } from "../layout";


const TopBarOfMessageBox = () => {
    
    const {frndNm, frndImg} = useContext(authContext); // collecting data from layout.js through context API
    
    return (
        <div className=" w-full h-12 bg-slate-200 px-9 py-9 flex justify-between items-center">

            {/* This section contain profile pic or message reciever and name */}
            <div>
                {/* profile pic */}
                <img className="w-10 h-10 rounded-full inline  " src={frndImg} />

                {/* Message reciever's name */}
                <p className="inline font-semibold text-cyan-700  ms-4">{frndNm}</p>
            </div>

            {/* This section contains audio call icon, vide call icon and three dot menu icon */}
            <div>
                <FontAwesomeIcon icon={faPhone} className="text-cyan-700 mr-3 cursor-pointer" />
                <FontAwesomeIcon icon={faVideo} className="text-cyan-700 mr-3 ms-3 cursor-pointer" />
                <FontAwesomeIcon icon={faEllipsisV} className="text-cyan-700 ms-7 cursor-pointer" />
            </div>
        </div>
    );
};

export default TopBarOfMessageBox;