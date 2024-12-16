"use client";

import Link from "next/link";
import Image from "next/image"; 
import { tutorials } from "@/data";
import Navbar from "@/components/Navbar";
import Headers from "@/components/Header";

const Tutorial = () => {
  return (
    <main className="page">
      <Headers name="Tutorials" />
      <div className="box text-color grid grid-cols-2 gap-6">
        {Array.from({ length: 10 }, (_, tutorialIndex) => {
          return (
            <div 
              key={tutorialIndex} 
              className="flex flex-col items-center p-4 pb-2 bg-[#D9D9D910] rounded-lg shadow-md"
            >
              {/* Tutorial Title */}
              <p className="roboto font-bold leading-[14.06px] text-sm">
                Tutorial {tutorialIndex + 1}
              </p>
              {/* Tutorial Image */}
              <Link href={`/tutorial/${tutorialIndex + 1}/level/1`} 
                className="grid justify-items-center pt-2 pb-2 w-full mx-auto cursor-pointer">
                <Image
                  src={tutorials[tutorialIndex].img}
                  alt={`Tutorial ${tutorialIndex + 1}`}
                  width={80}
                  height={80}
                  className="w-24 h-auto place-self-center"
                />
              </Link>
            </div>
          );
        })}
      </div>
      <Navbar />
    </main>
  );
};

export default Tutorial;