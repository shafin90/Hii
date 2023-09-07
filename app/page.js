'use client'
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const router = useRouter();//Initializing the router 
  const brand = useRef();//Detecting the logo. logo will make appear from bottom to middle

  const [top, setTop] = useState(100);//Declaring the state of position value of the brand

  // Brand styling
  const brandStyle = {
    top: `${top}vh`,
    transition: "0.8s",
  };

  // value od top changes over time
  useEffect(() => {
    const newTop = 20;
    setTop(newTop);
  }, [top]);


  // After coming to middle position of the brand-logo, then page will be navigated to login page.
  setTimeout(() => {
    router.push("./Login"); // Replace with the actual route you want to navigate to
  }, 1500)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden p-24">
      {/* brand */}
      <h1 style={brandStyle} ref={brand} className="text-cyan-700 text-8xl  relative text-center">
        Hii
      </h1>
    </main>
  );
}
