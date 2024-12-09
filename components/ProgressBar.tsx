import { tierimages } from "@/data"

const ProgressBar = ({
  percentageCompletion, 
  tokenAmount, 
  xpAmount, 
  currentIndex} : { 
    percentageCompletion: number, 
    tokenAmount: number, 
    xpAmount: number, 
    currentIndex: number 
  }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="box">
        <div className="w-full space-y-2">
          <div className="w-full flex justify-between">
            <p className="top-text">next tier</p>
            <p className="text-[#2ECC71] montserrat font-bold text-xs">{tierimages[currentIndex].nexttTier}</p>
          </div>
          <div className="w-full flex flex-col space-y-3">
            <div className="w-full flex justify-between items-center">
              <p className="top-text">percentage completion</p>
              <p className="font-bold text-xs text-[#2ECC71] montserrat">{percentageCompletion}%</p>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-green-950 rounded-md overflow-hidden">
              <div
                className="p-1 bg-[#2ECC71] transition-all duration-300"
                style={{ width: `${percentageCompletion}%` }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="w-full space-y-3">
          <div className="w-full flex justify-between">
            <p className="top-text">current partbuy tokens</p>
          </div>
          <div className="w-full flex flex-col gap-1 items-center">
            {/* Progress Bar */}
            <div className="w-full bg-green-950 rounded-md overflow-hidden">
              <div
                className="p-1 bg-[#2ECC71] transition-all duration-300"
                style={{ width: `${tokenAmount}%` }}
              />
            </div>
            <div className="w-full flex justify-between montserrat">
              <p className="ash-text">320,000</p>
              <p className="text-[#2ECC71] text-xs font-bold">500,000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="box">
        <div className="w-full space-y-3">
          <div className="w-full flex justify-between">
            <p className="top-text">current xp</p>
          </div>
          <div className="w-full flex flex-col gap-1 items-center">
            {/* Progress Bar */}
            <div className="w-full bg-green-950 rounded-md overflow-hidden">
              <div
                className="p-1 bg-[#2ECC71] transition-all duration-300"
                style={{ width: `${xpAmount}%` }}
              />
            </div>
            <div className="w-full flex justify-between montserrat">
              <p className="ash-text">3,000</p>
              <p className="text-[#2ECC71] text-xs font-bold">10,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar