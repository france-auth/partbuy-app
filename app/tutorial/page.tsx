import Image from "next/image";
import Link from "next/link";
import { tutorials } from "@/data";
import Navbar from "@/components/Navbar";
import Headers from "@/components/Header";

const Tutorial = () => {
  return (
    <main className="page">
      <Headers name="Tutorials" />
      <div className="box text-color">
        {Array.from({ length: 10 }, (_, tutorialIndex) => {
          // Determine the number of cards for the current tutorial
          const cardCount = (tutorialIndex === 0 || tutorialIndex === 2) ? 9 : 10;
          
          return (
            <div key={tutorialIndex} className="w-full space-y-2 mb-4">
              <p className="roboto font-bold leading-[14.06px] text-sm">
                Tutorial {tutorialIndex + 1}
              </p>
              <div className="grid grid-cols-5 w-full gap-2">
                {tutorials.slice(0, cardCount).map(({ img }, cardIndex) => (
                  <Link
                    key={cardIndex}
                    href={`/tutorial/${tutorialIndex + 1}/level/${cardIndex + 1}`}
                    className="w-full bg-[#D9D9D910] col-span-1"
                  >
                    <Image
                      src={img}
                      alt=""
                      width={1}
                      height={1}
                      quality={100}
                      className="w-full h-auto"
                    />
                  </Link>
                ))}
                {/* Add an empty 10th slot for Tutorial 1 and 3 */}
                {cardCount === 9 && (
                  <div
                    className="w-full bg-[#D9D9D910] col-span-1 h-auto"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
      <Navbar />
    </main>
  );
};

export default Tutorial;
