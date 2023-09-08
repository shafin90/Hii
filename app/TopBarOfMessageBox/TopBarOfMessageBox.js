'use client'
//This is the top most component of MessageBox component. In this component, there is an image of message reciever with his/her name and also three dot icon to show that person's info. Also there might be calling feature option.  
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faVideo, faEllipsisV } from "@fortawesome/free-solid-svg-icons";


const TopBarOfMessageBox = () => {
    
    
    
    return (
        <div className=" w-full h-12 bg-slate-200 px-9 py-9 flex justify-between items-center">

            {/* This section contain profile pic or message reciever and name */}
            <div>
                {/* profile pic */}
                <img className="w-10 h-10 rounded-full inline  " src="https://akns-images.eonline.com/eol_images/Entire_Site/2018323/rs_1024x759-180423040331-1024.John-Cena-JR-042318.jpg?fit=inside|900:auto&output-quality=90" />

                {/* Message reciever's name */}
                <p className="inline font-semibold text-cyan-700  ms-4">Demo Name</p>
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