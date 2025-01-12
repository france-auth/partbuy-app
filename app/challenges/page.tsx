"use client";

import Link from "next/link";
import Image from "next/image"; 
import { challenges } from "@/data";
import Navbar from "@/components/Navbar";
import Headers from "@/components/Header";

const Challenges = () => {
  return (
    <main className="page">
      <Headers name="Challenges" />
      <div className="box text-color grid grid-cols-2 gap-6 mt-16">
        {Array.from({ length: 10 }, (_, challengeIndex) => {
          return (
            <div 
              key={challengeIndex} 
              className="flex flex-col items-center p-4 pb-2 bg-[#D9D9D910] rounded-lg shadow-md"
            >
              {/* Tutorial Title */}
              <p className="roboto font-bold leading-[14.06px] text-sm">
                Challenge {challengeIndex + 1}
              </p>
              {/* Tutorial Image */}
              <Link href={`/challenges/${challengeIndex + 1}/task/1`} 
                className="grid justify-items-center pt-2 pb-2 w-full mx-auto cursor-pointer">
                <Image
                  src={challenges[challengeIndex].img}
                  alt={`Challenge ${challengeIndex + 1}`}
                  width={80}
                  height={80}
                  className="w-36 h-auto place-self-center"
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

export default Challenges;