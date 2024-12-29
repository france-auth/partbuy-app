import Image from "next/image";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Button from "@/components/ui/Button";

const profilecards = [
  {percent: "+10% increase", value: "Total Asset Value", amount: "$300,000"},
  {percent: "+10% increase", value: "Total Asset Value", amount: "$300,000"},
  {percent: "+10% increase", value: "Total Asset Value", amount: "$300,000"},
]
const profileoverview = [
  {head: "profile name", desc: "John Doe"},
  {head: "total revenue", desc: "$45,907,900"},
  {head: "total assets owned", desc: "59"},
  {head: "total assets owned", desc: "$230,700,890"},
]

const Profile = () => {
  return (
    <main className="page fade-in">
      <Header name="Profile" />
      <div className="box w-full mx-auto space-y-3 mt-16">
        <Image 
          src={'/profile/pfp.svg'} alt="pfp" 
          width={1} 
          height={1} 
          className="w-full h-auto rounded-full  opacity-45" 
        />
        <div className="w-full text-center roboto font-bold leading-[23.44px] space-y-1">
          <p className="text-gradient uppercase text-xl leading-[23.44px]">
            john doe
          </p>
          <p className="text-[#B0B0B0] montserrat text-[10px] leading-[12.19px]">
          John Doe is a Real estate investor in the Real world who wants to use his knowledge of real world real estate to dominate the Virtual World, His plans is to have an estimated valuated property of $1.5million and he’s currently putting in the work.
          </p>
        </div>
      </div>
      <div className="box space-y-2 w-full mt-2">
        <div className="w-full flex justify-between">
          <p className="top-text">
            profile summary
          </p>
          <Button
            name="view analytics"
            link="/analytics-overview"
            className="property-button border-[#3246DA]"
          />
        </div>
        <div className="grid grid-cols-3 w-full justify-center montserrat gap-2">
          {profilecards.map(({percent, value, amount}, id) => (
            <div key={id} className="grid justify-items-center text-center rounded-xl py-3 px-1 bg-[#FFFFFF1A]">
              <p className="text-[9px] text-[#2ECC71] leading-[10.97px] font-semibold mb-2">
                {percent}
              </p>
              <p className="text-[7px] leading-[8.53px] font-semibold">
                {value}
              </p>
              <p className="text-base leading-[19.5px] font-extrabold">
                {amount}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="box w-full space-y-2">
        <div className="w-full flex justify-between">
          <p className="top-text">
            profile overview
          </p>
          <Button
            name="edit profile"
            link="/settings"
            className="property-button border-[#3246DA]"
          />
        </div>
        <div className="w-full space-y-2">
          {profileoverview.map(({head, desc}, id) => (
            <div key={id} className="w-full justify-start montserrat space-y-1">
            <p className="property-overview-head">
              {head}
            </p>
            <p className="property-overview-desc">
              {desc}
            </p>
          </div>
          ))}
        </div>
      </div>
      <Navbar />
    </main>
  )
}

export default Profile;