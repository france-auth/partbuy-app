"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { benefits, features, tierimages, tokens, xp } from "@/data";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ProgressBar from "@/components/ProgressBar";

const Tier = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current tier index
  const [tierIndex, setTierIndex] = useState<number>(-1);
  const percentageCompletion: number = 80; // Example progress variable (1-100)
  const tokenAmount: number = 64;
  const xpAmount: number = 30;
  const [isFading, setIsFading] = useState(false); // Track fade animation

  // Navigate to the next item
  const handleNext = () => {
    setIsFading(true); // Start fade-out animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tierimages.length); // Loop to first item
      setIsFading(false); // Reset fade after transition
    }, 300); // Match fade duration
  };

  // Navigate to the previous item
  const handlePrevious = () => {setIsFading(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? tierimages.length - 1 : prevIndex - 1
      );
      setIsFading(false);
    }, 300);
  };

  const viewProperties = () => {
    setTierIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <main className="page fade-in">
      <Header name="Tiers" marketplace="Exit Marketplace" />
      <div className="flex flex-col w-full gap-4 mt-16">
        {/* Current Tier Section */}
        {tierIndex >= 0 ? (<div className="box items-center gap-4">
          <p className="top-text">{tierIndex === -1 && 'your current tier'}</p>
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
                    width={100}
                    height={100}
                    quality={100}
                    className="w-52 h-auto"
                  />
                  <p className="top-text text-center">{tier}</p>
                </div>
              ))}
            </div>
          </div>
        </div>) : (<div className="box items-center gap-4">
          <p className="top-text">your current tier</p>
          <div className="relative w-full overflow-hidden">
            <div className="flex transition-transform duration-500">
                <div
                  className="flex-shrink-0 w-full h-auto flex flex-col items-center"
                >
                  <Image
                    src={tierimages[currentIndex].img}
                    alt={`${tierimages[currentIndex].tier} tier image`}
                    width={100}
                    height={100}
                    quality={100}
                    className="w-52 h-auto"
                  />
                  <p className="top-text text-center">{tierimages[currentIndex].tier}</p>
                </div>
            </div>
          </div>
        </div>)}
        {/* Next Tier Section */}
        {tierIndex === -1 && (
          <ProgressBar 
          tokenAmount={tokenAmount} 
          percentageCompletion={percentageCompletion} 
          xpAmount={xpAmount} 
          currentIndex={currentIndex} 
          />
        )}
        {/** REQUIREMENTS */}
        {tierIndex > -1 && (
          <div className="box gap-[5px]">
          <p className="top-text">requirements section</p>
          <div className="w-full overflow-hidden relative">
            <div className={`transition-opacity duration-700 ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}>
              <div className="flex flex-col w-full">
                <div className="w-full flex justify-between">
                  <p className="ash-text">PartBuy Tokens</p>
                  <p className="green-text">{tokens[currentIndex]}</p>
                </div>
                <div className="w-full flex justify-between">
                  <p className="ash-text">XP Requirements</p>
                  <p className="green-text">{xp[currentIndex]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        )}
        {/** FEATURES */}
        <div className="box gap-[5px]">
          <p className="top-text">features</p>
          <div className="w-full overflow-hidden relative">
            <div className={`transition-opacity duration-700 ${
                  isFading ? "opacity-0" : "opacity-100"
                }`}>
              <div className="ash-text flex flex-col">
                <p className="block">{features[currentIndex]}</p>
              </div>
            </div>
          </div>
        </div>
        {/** BENEFITS */}
        <div className="box gap-[5px]">
          <p className="top-text">rewards & benefits</p>
          <div className="w-full overflow-hidden relative">
            <div className={`transition-opacity duration-700 ${
              isFading ? "opacity-0" : "opacity-100"
            }`}>
              <div className="ash-text flex flex-col">
                <p className="block">{benefits[currentIndex]}</p>
              </div>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="w-full grid grid-cols-2 justify-items-center gap-3 mt-4">
          {/* Tiers Button */}
          {tierIndex === -1 ? (
            <Button
            name="View All Properties"
            onClick={viewProperties}
            className={`col-span-2 transition-all duration-1000 w-full grid tier-button shadow`}
          />) : (
            <>
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
          </>)}
        </div>
      </div>
      <Navbar />
    </main>
  );
};

export default Tier;
