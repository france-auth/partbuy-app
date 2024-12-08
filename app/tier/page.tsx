"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { bronzebenefits, bronzefeatures, tierimages } from "@/data";
import Image from "next/image";
import Button from "@/components/ui/Button";

const Tier = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current index
  const percentageCompletion = 60; // Example progress variable (1-100)
  const tokenAmount: number = 64;
  const xpAmount: number = 30;

  // Navigate to the next item
  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  // Navigate to the previous item
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <main className="page">
      <Header name="Tiers" marketplace="Exit Marketplace" />
      <div className="flex flex-col w-full gap-5">
        {/* Current Tier Section */}
        <div className="box items-center gap-4">
          <p className="top-text">your current tier</p>
          <div className="relative w-full overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {tierimages.map(({ img, tier }, id) => (
                <div
                  key={id}
                  className="flex-shrink-0 w-full h-auto flex flex-col items-center"
                >
                  <Image
                    src={img}
                    alt={`${tier} tier image`}
                    width={1}
                    height={1}
                    quality={100}
                    className="w-52 h-auto"
                  />
                  <p className="top-text text-center">{tier}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {currentIndex !== 0 ? "" : (
          <>
            {/* Next Tier Section */}
            <div className="box">
              <div className="w-full space-y-2">
                <div className="w-full flex justify-between">
                  <p className="top-text">next tier</p>
                  <p className="text-[#2ECC71] montserrat font-bold text-xs">Bronze</p>
                </div>
                <div className="w-full flex flex-col">
                  <div className="w-full flex justify-between items-center">
                    <p className="top-text">percentage completion</p>
                    <p className="font-bold text-xs text-[#2ECC71] montserrat">{percentageCompletion}%</p>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full bg-green-950 rounded-md overflow-hidden">
                    <div
                      className="p-1 bg-[#2ECC71] transition-all duration-300"
                      style={{ width: `${percentageCompletion}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="w-full space-y-3">
                <div className="w-full flex justify-between">
                  <p className="top-text">current partbuy tokens</p>
                </div>
                <div className="w-full flex flex-col gap-1 items-center">
                  {/* Progress Bar */}
                  <div className="w-full bg-green-950 rounded-md overflow-hidden">
                    <div
                      className="p-1 bg-[#2ECC71] transition-all duration-300"
                      style={{ width: `${tokenAmount}%` }}
                    />
                  </div>
                  <div className="w-full flex justify-between montserrat">
                    <p className="ash-text">320,000</p>
                    <p className="text-[#2ECC71] text-xs font-bold">500,000</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="w-full space-y-3">
                <div className="w-full flex justify-between">
                  <p className="top-text">current xp</p>
                </div>
                <div className="w-full flex flex-col gap-1 items-center">
                  {/* Progress Bar */}
                  <div className="w-full bg-green-950 rounded-md overflow-hidden">
                    <div
                      className="p-1 bg-[#2ECC71] transition-all duration-300"
                      style={{ width: `${xpAmount}%` }}
                    />
                  </div>
                  <div className="w-full flex justify-between montserrat">
                    <p className="ash-text">3,000</p>
                    <p className="text-[#2ECC71] text-xs font-bold">10,000</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/** FEATURES */}
        <div className="box">
          <p className="top-text">features</p>
          <div className="ash-text">
            {bronzefeatures.features.map((features: string, id: number) => (
              <p key={id}>{features}</p>
            ))}
          </div>
        </div>
        {/** BENEFITS */}
        <div className="box">
          <p className="top-text">rewards & benefits</p>
          <div className="ash-text">
            {bronzebenefits.benefits.map((features: string, id: number) => (
              <p key={id}>{features}</p>
            ))}
          </div>
        </div>
        {/* Buttons */}
        <div className="w-full grid grid-cols-2 justify-items-center gap-3 mt-4">
            {/* Previous Button */}
            {currentIndex > 0 && (
              <Button
              name="Previous"
                onClick={handlePrevious}
                className={`${currentIndex === tierimages.length - 1 ? 'col-span-2' : 'col-span-1' }  transition-all duration-1000 w-full grid tier-button shadow`}
              />
            )}
            {/* Next Button */}
            {currentIndex < tierimages.length - 1 && (
              <Button
              name="Next"
                onClick={handleNext}
                className={`${currentIndex === 0 ? 'col-span-2' : 'col-span-1'} transition-all duration-1000 w-full grid tier-button shadow"`}
              />
            )}
          </div>
      </div>
      <Navbar />
    </main>
  );
};

export default Tier;
