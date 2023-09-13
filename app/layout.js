'use client'
import { createContext, useEffect, useState } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { app } from '@/firebase.config'
import { Box, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'




// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export const authContext = createContext();//Creating authContext for Context API
const auth = getAuth(app);

export default function RootLayout({ children }) {

  const [userInfo, setUserInfo] = useState(null);// user information
  const router = useRouter() // Declaring router
  const [allUser, setAllUser] = useState([]); //Information of All users
  const [frndImg, setFrndImg] = useState('')// This state contain the image of the friend with whol conversation is running. This image will be displayed on the top through the state value
  const [frndNm, setFrndNm] = useState(''); // same reasone as previous state
  const [buddyMail, setBuddyMail] = useState('') // When user choose a friend from friendlist to chat with, then that friend's mail adress stored in this state, so that, all the conversation with friend can be restored.
  const [message, setMessage] = useState('') // every single conversation.
  const [conversation, setConversation] = useState([]);// hold all the conversation
  const [sendTrigger, setSendTrigger] = useState(true);// triggered when send button is clicked
  const [profilePic, setProfilePic] = useState('');// Holds profile pic
  const [loggedInUserMail, setLoggedInUserMail] = useState('') // Hold currently loggedinUser's mail
  const [loggedInUserName, setLoggedInUserName] = useState('') // Hold currently loggedinUser's name
  const [loggedInUserPhoneNumber, setLoggedInUserPhoneNumber] = useState('') // Hold currently loggedinUser's phone number
  const [userLoadTrigger, setUserLoadTrigger] = useState(true); // When registration is doen, this triger is fired, and all users data fetched
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1359);// Screen width in different device

  // Feting all users information from database
  useEffect(() => {
    fetch('https://hii-server-u2tu.vercel.app/users')
      .then(res => res.json())
      .then(data => setAllUser(data))
  }, [userLoadTrigger, setUserLoadTrigger])

  //measuring the screen size
  // Define a function to update the screenWidth state
  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  // Add an event listener to update the screenWidth when the window is resized
  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);






  setTimeout(() => {
    setSendTrigger(!sendTrigger)
  }, 500)


  // Function to register user
  const handleRegistration = (email, password) => {
    console.log(123)
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUserInfo(userCredential.user)
        setUserLoadTrigger(!userLoadTrigger)
        router.push('./Home')
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  // Function to login user
  const handleLogin = (email, password) => {

    console.log(email, password)
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUserInfo(user)
        setUserLoadTrigger(!userLoadTrigger)
        console.log(user)
        alert('done')
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  //  Function to logout user
  const handleLogout = () => {
    signOut(auth).then(() => {
      setUserInfo('')
      router.push('./')
    }).catch((error) => {
      // An error happened.
    });
  }




  // Filtering data to find currently loggedIn User and finally find the profile pic
  useEffect(() => {
    const demoUser = allUser.filter(e => e.email == userInfo?.email);
    setProfilePic(demoUser[0]?.photoUrl);
    setLoggedInUserName(demoUser[0]?.userName);
    setLoggedInUserMail(demoUser[0]?.email);
    setLoggedInUserPhoneNumber(demoUser[0]?.phoneNumber)

  }, [allUser, setAllUser])




  // observer========================================
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        setUserInfo(userInfo);

      } else {
        setUserInfo(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);


  const onOpenList = () => {
    setIsOpen(true);
  }


  // These are the value that will be passed through Context API
  const value = {
    handleLogin,
    handleRegistration,
    handleLogout,
    userInfo,
    allUser,
    frndImg,
    setFrndImg,
    frndNm,
    setFrndNm,
    buddyMail,
    setBuddyMail,
    message,
    setMessage,
    conversation,
    setConversation,
    sendTrigger,
    setSendTrigger,
    profilePic,
    loggedInUserName,
    loggedInUserMail,
    loggedInUserPhoneNumber,
    isOpen,
    setIsOpen,
    onOpenList,
    screenWidth
  }

  return (
    <html lang="en">
      <body className={inter.className}>


        <authContext.Provider value={value}>
          {children}
        </authContext.Provider>



      </body>
    </html>
  )
}
