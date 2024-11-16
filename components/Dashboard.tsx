import { dashboardButtons, dashbordcards } from "@/data";
import Button from "./ui/Button";

const Dashboard = () => {
  return (
    <main className="flex flex-col w-full min-h-screen relative p-5 items-center gap-3">
      <div className="px-4 py-2 w-screen bg-[#121212]">
        <p className="roboto font-bold text-gradient text-base leading-[18.75px]">
          Dashboard
        </p>
      </div>
      <div className="bg-[#121212] flex flex-col justify-center items-center w-full p-3 mt- gap-4">
        <div className="w-full flex justify-between items-center">
          <p className="roboto uppercase font-bold text-xs leading-[14.06px]">
            portfolio summary
          </p>
          <Button
            name="view analytics"
            link="/"
            className="text-[8px] leading-[9.75px] p-[5px] rounded-full border border-solid border-gradient montserrat"
          />
        </div>
        <div className="grid grid-cols-2 w-full justify-center montserrat gap-2 p-2">
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
        <div className="w-full justify-center items-center grid grid-cols-2 montserrat gap-3">
          {dashboardButtons.map(({name, img}, id) => (
            <div key={id} className={`w-full justify-items-center ${id > 1 ? 'col-span-2' : ''}`}>
              <Button 
                name={name}
                src={img}
                alt={name}
                width={id === 1 ? 9 : 15}
                height={id === 1 ? 9 : 15}
                link=""
                className="w-full px-3 py-2 rounded-full hover:border hover:border-[#3246DA] bg-[#3246DA] hover:bg-[#FFFFFF1A] text-[10px] leading-[12.19px] uppercase font-bold"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
};

export default Dashboard;