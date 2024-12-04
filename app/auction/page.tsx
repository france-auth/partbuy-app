"use client"

import Image from "next/image";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { auctions } from "@/data";
import { useState } from "react";

const Auction = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const toggleFilter = () => {
    setOpenFilter((prev) => !prev)
  }
  return (
    <main className="page">
      <div className="">
      <Header name="Auction" marketplace="Exit Marketplace" />
      <div className="flex justify-between header w-screen">
        <p className="text-gradient roboto font-bold leading-[18.75px]">
          Basic Plan
        </p>
        <div className="flex gap-2">
          <Image 
            src="/auction/bronze.svg" 
            alt="bronze" 
            width={1} 
            height={1} 
            className="w-9 h-auto" 
          />
          <Image 
            src="/auction/filter.svg" 
            alt="filter" 
            width={1} 
            height={1} 
            className="w-6 h-auto" 
            onClick={toggleFilter}
          />
        </div>
      </div>
      </div>
      {openFilter ? (
        <div className="box items-center">
          <p className="roboto text-color uppercase font-bold text-xs leading-[14.06px]">
            filter by
          </p>
          <div className="w-full space-y-2">
            <div className=" space-y-2">
              <p className="ash-text">
                Auction Type
              </p>
              <ul className="roboto text-medium">
                <li className="w-max py-[2px] px-2 rounded-full text-[8px] border border-[#3246DA]">First-Click Auction</li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="box gap-3">
        <p className="top-text">
          CURRENT LISTINGS
        </p>
        <div className="w-full space-y-4">
          {auctions.map(({property, price, status, view}, id) => (
            <div key={id} className="grid grid-cols-2 justify-between items-center">
              <div className="flex gap-3 items-center">
                <p className="montserrat font-bold leading-[14.63px] text-xs">{property}</p>
                <p className="font-bold text-[#2ECC71] text-[8px] leading-[9.75px] montserrat">{price}</p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-color text-[8px] leading-[9.75px] font-medium montserrat">
                  {status}
                </p>
                <p className="flex text-[8px] leading-[9.38px] py-1 px-2 border-[#3246DA] rounded-full border border-solid roboto justify-items-center w-max roboto text-color">
                  {view}
                </p>
              </div>
            </div>
          ))}
        </div>
        </div>
      )}
      <Navbar />
    </main>
  )
}

export default Auction;