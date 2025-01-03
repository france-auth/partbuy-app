"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Button from "@/components/ui/Button";

const properties = [
  {
    heading: 'All Properties',
  },
  {
    heading: 'New Properties',
  },
  {
    heading: 'Top Properties',
  },
  {
    heading: 'Learn',
  },
]

interface AllProperties {
  property: string;
  buttonname: string;
  time?: string;
  topproperties?: string;
  img: string;
}

const allproperties: AllProperties[] = [
  {
    property: 'Property A',
    buttonname: 'buy property',
    time: '05/10/2020',
    topproperties: 'in 24hrs',
    img: '/properties/properties-list.svg'
  },
  {
    property: 'Property A',
    buttonname: 'buy property',
    time: '05/10/2020',
    topproperties: 'in 24hrs',
    img: '/properties/properties-list.svg'
  },
  {
    property: 'Property A',
    buttonname: 'buy property',
    time: '05/10/2020',
    topproperties: 'in 24hrs',
    img: '/properties/properties-list.svg'
  },
  {
    property: 'Property A',
    buttonname: 'buy property',
    time: '05/10/2020',
    topproperties: 'in 24hrs',
    img: '/properties/properties-list.svg'
  },
]

const Marketplace = () => {
    // State to track the active tab
  const [activeTab, setActiveTab] = useState(0);
  const [ishovered, setIshovered] = useState(false);  
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensure the component only renders on the client side
    setIsClient(true);
  }, []);

  const handleHover = () => setIshovered(true);
  const handleOut = () => setIshovered(false);

  // Function to handle tab click
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <main className="pb-24 fade-in">
      {isClient && (<div className="w-screen relative " onMouseOver={handleHover} onMouseOut={handleOut}>
        <Header 
          name="Auction Overflow" 
          marketplace="Exit Marketplace" 
          className={`absolute ${ishovered ? 'fade-in bottom-0' : 'fade-in top-5'}`}
        />
        <h1 className={`flex font-bold text-[28px] leading-[32.5px] uppercase absolute top-1/3 text-center text-gradient roboto px-2 
          ${ishovered ? 'fade-out hidden' : 'fade-in '} `
        }>
          welcome to partbuy’s marketplace
        </h1>
        <Image 
          src={'/marketplace/marketplace-bg.svg'}
          alt="marketplace background image" 
          width={1} 
          height={1} 
          className={`w-full h-auto`}
        />
      </div>)}
      <div className="w-full grid grid-cols-2 p-3 text-color font-bold text-[10.3px] leading-[12.19px] montserrat justify-items-center">
        <p className="grid col-span-1">1,250 Available Properties</p>
        <p className="grid col-span-1">500 Property Owners</p>
      </div>
      <div className="box space-y-2.5">
        <p className="roboto text-color font-bold text-xs leading-[14.06px]">
        Don’t know how to buy?
        </p>
        <p className="ash-text">
        Learn how to naturally purchase your virtual properties, access real time offers and participate in real time auctions to experience your full purchasing power
        </p>
      </div>
      <div className="px-5 py-4 w-full">
        <Button
          name="learn how to buy properties"
          src="/tutorial/rocket.svg"
          width={15}
          height={15}
          alt="rocket image"
          className="dashboard-button space-y-4"
        />
      </div>
      <div className="w-full flex flex-col items-center border-b-[0.25px] border-gray-300 px-3  mb-3">
        <div className="w-full grid grid-cols-4 justify-items-center montserrat text-[10.3px] leading-[12.19px] font-normal">
          {properties.map(({ heading }, id) => (
            <div
              key={id}
              onClick={() => handleTabClick(id)} // Handle click
              className="w-full grid justify-items-center relative col-span-1 py-4 cursor-pointer"
            >
              <div className="grid col-span-1 text-nowrap w-full justify-items-center">
                <p className={`${activeTab === id ? "font-semibold text-[#3246DA]" : ""}`}>{heading}</p>
              </div>
              <span
                className={`absolute bottom-0 left-0 w-full h-[3px] bg-[#3246DA] transition-opacity duration-700 ${
                  activeTab === id ? "opacity-100" : "opacity-0"
                }`}
              ></span>
            </div>
          ))}
        </div>
      </div>
      <div className="box fade-in">
        <div className="flex justify-between items-center w-full mb-2">
          {activeTab !== 3 ? (
            <p className="top-text">top properties</p>
          ) : activeTab === 3 ? (
            <div className="flex flex-col gap-1">
              <p className="top-text">getting started</p>
              <p className="ash-text">Watch Lessons and Trade Virtually</p>
            </div>
          ) : null}
          <Button 
            name="view all properties" 
            className="property-button" 
          />
        </div>
        <div className="fade-in w-full space-y-3">
          {allproperties.map(({ property, img, buttonname, time, topproperties }, id) => (
            <div key={id} className={`w-full p-3 flex justify-between items-center  ${activeTab === 3 ? 'border-b-[0.2px] border-b[#ffffff]' : ''}`}>
              <div className="w-max flex gap-2">
                <Image 
                  src={img}
                  alt="property image"
                  width={1}
                  height={1}
                  className="w-16 h-auto"
                />
                {activeTab !== 3 ? (
                  <div className="fade-in flex flex-col gap-1 items-start justify-center text-color">
                    <p className="roboto font-bold text-[15px] leading-[17.59px] ">{property}</p>
                    {activeTab === 1 ? (
                      <p className="fade-in montserrat text-[10px] leading-[9.75px] ">Time Created: {time}</p>
                    ) : activeTab === 2 ? (
                      <p className="fade-in montserrat font-semibold text-[10px] leading-[9.75px]">
                        <span className="green-text mr-1">20%</span> {topproperties}
                      </p>
                    ) : null}
                  </div>
                ) : activeTab === 3 ? (
                  <div className="roboto flex flex-col justify-evenly items-start gap-1 text-color">
                    <p className="fade-in text-[9px] leading-[9.38px] opacity-50 ">Level 1</p>
                    <p className="fade-in text-xs font-bold leading-[14.06px] ">Learning to Trade Virtually</p>
                    <div className="fade-in w-max rounded-full bg-[#ffffff] px-2.5 py-[3px]">
                      <p className="text-[#121212] text-[8px] leading-[8.7px] ">12 mins</p>
                    </div>
                  </div>
                ) : null}
              </div>
              {activeTab !== 3 ? (<Button 
                name={buttonname}
                className="property-button"
              />) : activeTab === 3 ? (
                <Image 
                  src={'/marketplace/arrow.svg'}
                  alt="arrow image"
                  width={1}
                  height={1}
                  className="w-2 h-auto"
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <Navbar />
    </main>
  )
}

export default Marketplace;