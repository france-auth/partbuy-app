/* import ChallengesSvg from "./svgcomponents/ChellengesSvg"
import HomeSvg from "./svgcomponents/HomeSvg"
import MarketplaceSvg from "./svgcomponents/MarketplaceSvg"
import ProfileSvg from "./svgcomponents/ProfileSvg"
import SettingsSvg from "./svgcomponents/SettingsSvg"
import TutorialSvg from "./svgcomponents/TutorialSvg"

const Navbar = () => {
  return (
    <main className="w-screen fixed bg-[#FFFFFF1A] backdrop-blur-[50px] bg-opacity-90 bottom-0 right-0 left-0">
      <div className="z-50 flex items-center justify-evenly montserrat font-bold text-[8px] leading-[8px] p-1">
        <div className="p-2 flex flex-col items-center gap-2 hover:text-[#213CFB] text-[#F5F7FA] text-">
          <HomeSvg />
          <p>
            Home
          </p>
        </div>
        <div className="p-2 flex flex-col items-center gap-2 hover:text-[#213CFB] text-[#F5F7FA] text-">
          <MarketplaceSvg />
          <p>
            Marketplace
          </p>
        </div>
        <div className="p-2 flex flex-col items-center gap-2 hover:text-[#213CFB] text-[#F5F7FA] text-">
          <ChallengesSvg />
          <p>
            Challenges
          </p>
        </div>
        <div className="p-2 flex flex-col items-center gap-2 hover:text-[#213CFB] text-[#F5F7FA] text-">
          <TutorialSvg />
          <p>
            Tutorial
          </p>
        </div>
        <div className="p-2 flex flex-col items-center gap-2 hover:text-[#213CFB] text-[#F5F7FA] text-">
          <ProfileSvg />
          <p>
            Profile
          </p>
        </div>
        <div className="p-2 flex flex-col items-center gap-2 hover:text-[#213CFB] text-[#F5F7FA] text-">
          <SettingsSvg />
          <p>
            Settings
          </p>
        </div>
      </div>
    </main>
  )
}

export default Navbar; */

import HomeSvg from "./svgcomponents/HomeSvg";
import MarketplaceSvg from "./svgcomponents/MarketplaceSvg";
import ChallengesSvg from "./svgcomponents/ChallengesSvg";
import TutorialSvg from "./svgcomponents/TutorialSvg";
import ProfileSvg from "./svgcomponents/ProfileSvg";
import SettingsSvg from "./svgcomponents/SettingsSvg";
import AuctionSvg from "./svgcomponents/AuctionSvg";
import TierSvg from "./svgcomponents/TierSvg";
import ValuationSvg from "./svgcomponents/ValuationSvg";
import ReferralSvg from "./svgcomponents/ReferralSvg";


const navbarItems = [
  { name: "Home", SvgComponent: HomeSvg },
  { name: "Marketplace", SvgComponent: MarketplaceSvg },
  { name: "Challenges", SvgComponent: ChallengesSvg },
  { name: "Tutorial", SvgComponent: TutorialSvg },
  { name: "Profile", SvgComponent: ProfileSvg },
  { name: "Settings", SvgComponent: SettingsSvg },
  { name: "Auction", SvgComponent: AuctionSvg },
  { name: "Tier", SvgComponent: TierSvg },
  { name: "Valuation", SvgComponent: ValuationSvg },
  { name: "Referral", SvgComponent: ReferralSvg },
];

const Navbar = () => {
  return (
    <main className="w-screen fixed bottom-0 right-0 left-0 h-16 bg-[#FFFFFF1A] backdrop-blur-[50px] bg-opacity-90 z-50">
      <div className="flex items-center justify-evenly montserrat font-bold text-[8px] leading-[8px] h-full p-1">
        {navbarItems.map(({ name, SvgComponent }, id) => (
          <div
            key={id}
            className={`${id > 5 ? 'hidden' : 'flex flex-col'} p-2 items-center gap-2 hover:text-[#213CFB] text-[#F5F7FA]`}
          >
            <SvgComponent />
            <p>{name}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Navbar;
