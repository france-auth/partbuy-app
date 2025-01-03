'use client'

import Image from "next/image";
import React, { useState } from "react";
import { properties } from "@/data";
import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const AllProperties = () => {
  const [toggleIcon, setToggleIcon] = useState<string>('list');
  const toggle = () => {
    setToggleIcon((prevIcon) => (prevIcon === 'list' ? 'grid' : 'list'));
  };

  const router = useRouter(); // Call unconditionally
  const handleCardClick = (id: number) => {
    router.push(`/properties/${id}`); // Navigate to the property details page
  };

  return (
    <main className="page fade-in">
        <Header name="Available Properties" />
        <div className="box roboto mt-16 gap-2">
          <div className="flex items-center justify-between">
            <p className="top-text">
              all available properties
            </p>
            <div className="flex gap-1 justify-between">
              <div className='w-6 h-6 flex justify-end items-center'>
                <Image 
                  src={toggleIcon === 'list' ? '/dashboard/list.svg' 
                    : toggleIcon === 'grid' ? '/dashboard/grid.svg' 
                    : '/dashboard/list.svg'
                  } 
                  alt='' 
                  width={1}
                  height={1}
                  className={`${toggleIcon === 'list' ? 'w-full h-auto' 
                    : toggleIcon === 'grid' ? 'w-5 h-auto' 
                    : 'w-full h-auto'}`}
                  onClick={toggle}
                />
              </div>
            </div>
          </div>
          <div 
            className={`${toggleIcon === 'list' 
              ? 'grid grid-cols-2' 
              : toggleIcon === 'grid' 
                ? 'flex flex-col w-full px-3' 
                : 'grid grid-cols-2'} 
              gap-3 roboto text-color`
          }>
            {properties.map(({name, value, price, listImg, gridImg}, id) => (
              <div 
                key={id} 
                onClick={() => handleCardClick(id + 1)}
                className={`${toggleIcon === 'list' 
                  ? 'grid col-span-1 gap-2' 
                  : toggleIcon === 'grid' 
                    ? 'flex gap-2 items-center' 
                    : 'grid col-span-1 gap-2'}`}>
                <Image 
                  src={toggleIcon === 'list' ? gridImg 
                    : toggleIcon === 'grid' ? listImg 
                    : gridImg} 
                  alt="name"
                  width={1} 
                  height={1} 
                  className={`${toggleIcon === 'list' ? 'w-full h-auto' 
                    : toggleIcon === 'grid' ? 'w-24 h-auto' 
                    : 'w-full h-auto'}`}
                />
                <div className={`${toggleIcon === 'list' ? 'flex flex-col gap-2 items-center justify-center' 
                  : toggleIcon === 'grid' ? 'flex w-full justify-between' 
                  : 'flex flex-col gap-2 items-center justify-center'}`
                }>
                  <p className="font-bold xx:text-[14px] xr:text-[15px] leading-[17.58px]">
                    {name}
                  </p>
                  <div className={`${toggleIcon === 'list' ? 'flex gap-1' 
                    : toggleIcon === 'grid' ? 'flex flex-col items-end' 
                    : 'flex gap-1'} 
                    xx:text-[9px] xr:text-[10px] leading-[11.72px]
                  `}>
                    <p className="">{value}</p>
                    <p className="justify-end text-[#2ECC71]">{price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          name="back to dashboard"
          src={'/dashboard/join-auction.svg'}
          alt={'dashboard button'}
          width={15}
          height={15}
          link="/"
          className={`mt-5 roboto px-3 py-3 rounded-full hover:border hover:border-[#3246DA] bg-[#3246DA] hover:bg-[#FFFFFF1A] xx:text-[8px] xr:text-[10px] leading-[12.19px] uppercase font-bold`}
        />
      <Navbar />
    </main>
  )
}

export default AllProperties;