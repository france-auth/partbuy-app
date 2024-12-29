"use client";

import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import Image from "next/image";

const invitesteps = [
  {
    step: 1,
    desc: 'Send an invite to a friend'
  },
  {
    step: 2,
    desc: 'Your friend signs up'
  },
  {
    step: 3,
    desc: 'You will both get token rewards when your friends successfully makes their first purchase'
  },
]

const Referral = () => {
  const [friends, setFriends] = useState<string>("invite");
  const [copied, setCopied] = useState<boolean>(false);  // Track if the code has been copied

  const handleInvite = () => setFriends("invite");
  const friendsList = () => setFriends("friends");

  const refCode = "4JCKZ";

  // Function to handle the copy-to-clipboard functionality
  const copyToClipboard = (text: string) => {
    // Ensure the document is focused before attempting to copy
    if (document.hasFocus()) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopied(true);  // Update the state to show "Copied"
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
        });
    } else {
      console.error("Document is not focused. Unable to copy.");
    }
  };

  return (
    <main className="page fade-in">
      <Header name="Marketplace - Referral" marketplace="Exit Marketplace" />
      <div className="w-screen bg-[#121212] mt-[45px] flex">
        <div className="w-full grid grid-cols-2 justify-items-center">
          <div
            className={`col-span-1 p-6 top-text relative cursor-pointer ${
              friends === "invite" ? "text-[#3246DA]" : "text-gray-400"
            }`}
            onClick={handleInvite}
          >
            <p>Refer a Friend</p>
            <span
              className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#3246DA] transition-opacity duration-700 ${
                friends === "invite" ? "opacity-100" : "opacity-0"
              }`}
            ></span>
          </div>
          <div
            className={`col-span-1 p-6 top-text relative cursor-pointer ${
              friends === "friends" ? "text-[#3246DA]" : "text-gray-400"
            }`}
            onClick={friendsList}
          >
            <p>Friends List</p>
            <span
              className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#3246DA] transition-opacity duration-700 ${
                friends === "friends" ? "opacity-100" : "opacity-0"
              }`}
            ></span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="roboto text-color text-center font-bold text-3xl leading-[35.26px]">
          Refer friends and earn 50 Tokens
        </h1>
        <div className="flex flex-col w-full relative px-4 justify-center items-center">
          <Image
            src="/referral/referralimg.png"
            width={150}
            height={150}
            quality={100}
            alt="referral image"
            className="w-full h-auto"
          />
          <div className="opacity-100 z-10 bg-[#000000] top-2/3 text-center py-3 w-[90%] rounded-3xl absolute text-gradient roboto border-[3px] border-dashed border-[#3246DA] space-y-2">
            <p className="text-xs">Your referral code</p>
            <p className="uppercase font-bold text-4xl">{refCode}</p>
            <p 
              className="text-xs cursor-pointer text-[#3246DA]"
              onClick={() => copyToClipboard(refCode)} // Trigger copy action on click
            >
              {copied ? "Copied" : "Tap to copy"}  {/* Change text to "Copied" after click */}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-wrap w-full space-y-2 roboto mt-14">
        {invitesteps.map(({ step, desc }, id) => (
          <div key={id} className="w-full flex justify-start gap-3 items-center">
            <div className="flex justify-center items-center w-10 h-10 text-base leading-[28.13px] font-medium rounded-full p-[10px] bg-cust-gradient">
              <p className="text-gradient text-center">{step}</p>
            </div>
            <div className="flex">
            <p  className="flex font-medium leading-[15.75px] text-sm">{desc}</p>
            </div>
          </div>
        ))}
      </div>
      <Navbar />
    </main>
  );
};

export default Referral;
