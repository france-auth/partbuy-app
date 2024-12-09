"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { benefits, features, tierimages } from "@/data";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ProgressBar from "@/components/ProgressBar";

const Tier = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current tier index
  const [tierIndex, setTierIndex] = useState<number>(-1);
  const percentageCompletion: number = 60; // Example progress variable (1-100)
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

  const viewProperties = () => {
    setTierIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <main className="page">
      <Header name="Tiers" marketplace="Exit Marketplace" />
      <div className="flex flex-col w-full gap-5">
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
                    width={1}
                    height={1}
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
        {/** FEATURES */}
        <div className="box gap-1">
          <p className="top-text">features</p>
          <div className="ash-text">
            <p>{features[currentIndex]}</p>
          </div>
        </div>
        {/** BENEFITS */}
        <div className="box gap-1">
          <p className="top-text">rewards & benefits</p>
          <div className="ash-text">
            {benefits[currentIndex]}
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
              {/* Next Button */}
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
