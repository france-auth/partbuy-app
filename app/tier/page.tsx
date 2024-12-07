import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { tierimages } from "@/data";
import Image from "next/image";

const Tier = () => {
  return (
    <main className="page">
      <Header name="Tiers" marketplace="Exit Marketplace" />
      <div className="flex flex-col w-full gap-5">
        <div className="box items-center gap-4">
          <p className="top-text">your current tier</p>
          <div className="">
            {tierimages.map(({img, tier}, id) => (
              <div key={id} className="flex flex-col gap-2 items-center w-full">
                <Image 
                  src={img} 
                  alt={`${img} tier image`} 
                />
                <p className="top-text">{tier}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="box">
          <div className="w-full space-y-2">
            <p  className="top-text">next tier</p>
            <div className="w-full flex flex-col">
              <div className="w-full flex justify-between items-center">
                <p  className="top-text">percentage completion</p>
                <p>60%</p>
              </div>
              <span className="text-green-600">
                <span className="text-green-800" />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </main>
  )
}

export default Tier;