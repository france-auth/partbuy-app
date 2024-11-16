import { dashbordcards } from "@/data";
import Button from "./ui/Button";

const Dashboard = () => {
  return (
    <main className="flex flex-col w-full min-h-screen relative p-5 items-center gap-3">
      <div className="px-4 py-2 w-full bg-[#121212]">
        <p className="roboto font-bold text-gradient text-base leading-[18.75px]">
          Dashboard
        </p>
      </div>
      <div className="bg-[#121212] flex flex-col w-full p-3 mt- gap-4">
        <div className="w-full flex justify-between items-center">
          <p className="roboto uppercase font-bold text-xs leading-[14.06px]">
            portfolio summary
          </p>
          <Button
            name="view analytics"
            className="text-[8px] leading-[9.75px] p-[5px] rounded-full border border-solid border-gradient montserrat"
          />
        </div>
        <div className="grid grid-cols-2 w-full montserrat gap-2 p-2">
          {dashbordcards.map(({text, value}, id) => (
            <div 
              key={id} 
              className={`space-y-1 justify-items-center rounded-xl py-7 px-2 bg-[#FFFFFF1A] 
              ${id === 0 ? 'col-span-2' : ''}`}
            >
              {id !== 0 ? null : (
                <p className="text-xs text-[#2ECC71] leading-[12.19px] font-semibold mb-3">+10% increase</p>
              )}
              <p className="text-xs leading-[12.19px] font-semibold">{text}</p>
              <p className="text-2xl leading-[24.38px] font-extrabold">{value}</p>
            </div>
          ))}
        </div>
        <div>
          
        </div>
      </div>
    </main>
  )
};

export default Dashboard;