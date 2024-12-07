"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { auctions, auctiontypes, propertytypes, tieraccess, upcomingauctions } from "@/data";
import { useState } from "react";

const Auction = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [selectedFilterHead, setSelectedFilterHead] = useState<string>("CURRENT LISTINGS"); // State for the header filter
  const [selectedFilterDesc, setSelectedFilterDesc] = useState<string>(""); // State for the top text name

  const toggleFilter = () => {
    setOpenFilter((prev) => !prev);
  };

  const handleFilterClick = (filterHead: string, filterDesc: string) => {
    setSelectedFilterHead(filterHead); // Update the header name
    setSelectedFilterDesc(filterDesc); // Update the top text name
    setOpenFilter(false); // Optionally close the filter dropdown
  };

  return (
    <main className="page">
      <div className="">
        {/* Pass the selected filter to the Header */}
        <Header name="Auction" filter={selectedFilterHead} marketplace="Exit Marketplace" />
        <div className="flex justify-between header w-screen">
          <p className="text-gradient roboto font-bold leading-[18.75px]">Basic Plan</p>
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
          <p className="roboto text-color uppercase font-bold text-xs leading-[14.06px]">filter by</p>
          <div className="w-full space-y-3">
            {/* Auction Type Filters */}
            <div className="space-y-2">
              <p className="ash-text">Auction Type</p>
              <ul className="roboto text-medium space-y-[6px]">
                {auctiontypes.map(({ type }, id) => (
                  <li
                    key={id}
                    className="filter-button cursor-pointer"
                    onClick={() => handleFilterClick("Auction Type", type)}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>
            {/* Property Type Filters */}
            <div className="space-y-2">
              <p className="ash-text">Property Type</p>
              <ul className="roboto text-medium space-y-[6px]">
                {propertytypes.map(({ type }, id) => (
                  <li
                    key={id}
                    className="filter-button cursor-pointer"
                    onClick={() => handleFilterClick("Property Type", type)}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>
            {/* Tier Access Filters */}
            <div className="space-y-2">
              <p className="ash-text">Tier Access</p>
              <ul className="roboto text-medium space-y-[6px]">
                {tieraccess.map(({ type }, id) => (
                  <li
                    key={id}
                    className="filter-button cursor-pointer"
                    onClick={() => handleFilterClick("Tier Access", type)}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>
            {/* Upcoming Auctions Filters */}
            <div className="space-y-2">
              <p className="ash-text">Upcoming Auctions</p>
              <ul className="roboto text-medium space-y-[6px]">
                {upcomingauctions.map(({ type }, id) => (
                  <li
                    key={id}
                    className="filter-button cursor-pointer"
                    onClick={() => handleFilterClick("Upcoming Auctions", type)}
                  >
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="box gap-3">
          <p className="top-text">{selectedFilterDesc}</p>
          <div className="w-full space-y-5">
            {auctions.map(({ property, price, status, view }, id) => (
              <div
                key={id}
                className="grid grid-cols-2 justify-between items-center"
              >
                <div className="flex gap-3 items-center">
                  <p className="montserrat font-bold leading-[15.63px] text-[13.5px]">
                    {property}
                  </p>
                  <p className="font-bold text-[#2ECC71] text-[9px] leading-[10.75px] montserrat">
                    {price}
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <p className="text-color text-[8px] leading-[9.75px] font-medium montserrat">
                    {status}
                  </p>
                  <p className="flex text-[9px] leading-[9.38px] py-1 px-2 border-[#3246DA] rounded-full border border-solid roboto justify-items-center w-max roboto text-color">
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
  );
};

export default Auction;
