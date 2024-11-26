import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import { analytics } from "@/data";
import Image from "next/image";

const Analytics = () => {
  return (
    <main className="page">
      <Header name="Analytics Overview" />
      <div className="w-full flex flex-col gap-4">
          {analytics.map(({heading, img}, id) => (
            <div key={id} className="box gap-3">
              <p className="top-text">{heading}</p>
              <Image 
                src={img}
                alt={'analytics'}
                width={1}
                height={1}
                className="w-full h-auto"
              />
          </div>
          ))}
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
    </main>
  )
}

export default Analytics;