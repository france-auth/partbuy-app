'use client'

import { dashboardButtons, dashbordcards } from "@/data";
import Button from "./ui/Button";
import Image from "next/image";
import { useState } from "react";

const Dashboard = () => {
  const [toggleIcon, setToggleIcon] = useState<string>('list');
  const toggle = () => {
    setToggleIcon((prevIcon) => (prevIcon === 'list' ? 'grid' : 'list'));
  };
  
  return (
    <main className="flex flex-col w-full min-h-screen relative p-5 items-center gap-3">
      <div className="px-4 py-2 w-screen bg-[#121212]">
        <p className="roboto font-bold text-gradient text-base leading-[18.75px]">
          Dashboard
        </p>
      </div>
      <div className="bg-[#121212] flex flex-col justify-center items-center w-full py-5 px-3 gap-4 gap-y-0">
        <div className="w-full flex justify-between items-center px-2 xr:p-3">
          <p className="roboto uppercase font-bold text-xs leading-[14.06px]">
            portfolio summary
          </p>
          <Button
            name="view analytics"
            link="/"
            className="flex xx:text-[8px] xr:text-[10px] leading-[9.75px] p-[6px] rounded-full border border-solid border-gradient montserrat justify-items-center w-max"
          />
        </div>
        <div className="grid grid-cols-2 w-full justify-center montserrat gap-2 p-2 xr:p-3">
          {dashbordcards.map(({text, value}, id) => (
            <div 
              key={id} 
              className={`space-y-1 justify-items-center rounded-xl py-7 px-2 bg-[#FFFFFF1A] 
              ${id === 0 ? 'col-span-2' : ''}`}
            >
              {id !== 0 ? null : (
                <p className="xx:text-[10px] xr:text-xs text-[#2ECC71] leading-[12.19px] font-semibold mb-3">+10% increase</p>
              )}
              <p className="xx:text-[10px] xr:text-xs leading-[12.19px] font-semibold">{text}</p>
              <p className="xx:text-[22px] xr:text-2xl leading-[24.38px] font-extrabold">{value}</p>
            </div>
          ))}
        </div>
        <div className="w-full grid grid-cols-2 gap-3 px-2 xr:px-3 montserrat mt-2">
          {dashboardButtons.map(({ name, img }, id) => (
            <Button
              key={id}
              name={name}
              src={img}
              alt={name}
              width={id === 1 ? 9 : 15}
              height={id === 1 ? 9 : 15}
              link=""
              className={`px-3 py-[10px] rounded-full hover:border hover:border-[#3246DA] bg-[#3246DA] hover:bg-[#FFFFFF1A] xx:text-[8px] xr:text-[10px] leading-[12.19px] uppercase font-bold ${
                id === 2 ? 'col-span-2' : ''
              }`}
            />
          ))}
        </div>
      </div>
      <div className="box roboto mt-2">
          <div className="flex items-center justify-between">
            <p className="uppercase xx:text-[10px] xr:text-xs font-bold text-color">
              top properties
            </p>
            <div className="flex gap-1 justify-between">
              <Button
                name="view all properties"
                link="/"
                className="flex xx:text-[8px] xr:text-[10px] leading-[9.75px] p-[6px] rounded-full border border-solid border-gradient montserrat justify-items-center w-max"
              />
              <div className='w-6 h-6 flex justify-end items-center'>
                <Image 
                  src={toggleIcon === 'list' ? '/dashboard/list.svg' 
                        : toggleIcon === 'grid' ? '/dashboard/grid.svg' 
                        : '/dashboard/list.svg'
                      } 
                  alt='' 
                  width={1}
                  height={1}
                  className={`${toggleIcon === 'list' ? 'w-full h-auto' : toggleIcon === 'grid' ? 'w-5 h-auto' : 'w-full h-auto'}`}
                  onClick={toggle}
                />
              </div>
            </div>
          </div>
          <div>
            
          </div>
        </div>
    </main>
  )
};

export default Dashboard;