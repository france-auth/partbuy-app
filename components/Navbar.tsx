
"use client";

import { usePathname, useRouter } from "next/navigation";
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

interface NavbarItem {
  name: string;
  SvgComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  path: string; // Define the path for navigation
}

const navbarItems: NavbarItem[] = [
  { name: "Home", SvgComponent: HomeSvg, path: "/" },
  { name: "Marketplace", SvgComponent: MarketplaceSvg, path: "/marketplace" },
  { name: "Challenges", SvgComponent: ChallengesSvg, path: "/challenges" },
  { name: "Tutorial", SvgComponent: TutorialSvg, path: "/tutorial" },
  { name: "Profile", SvgComponent: ProfileSvg, path: "/profile" },
  { name: "Settings", SvgComponent: SettingsSvg, path: "/settings" },
  { name: "Auction", SvgComponent: AuctionSvg, path: "/auction" },
  { name: "Tier", SvgComponent: TierSvg, path: "/tier" },
  { name: "Valuation", SvgComponent: ValuationSvg, path: "/valuation" },
  { name: "Referral", SvgComponent: ReferralSvg, path: "/referral" },
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <main className="w-screen fixed bottom-0 right-0 left-0 bg-[#FFFFFF1A] backdrop-blur-[50px] bg-opacity-90 z-50">
      <div className="flex items-center justify-evenly montserrat font-bold text-[8px] leading-[8px] h-full p-2 px-3">
        {navbarItems.map(({ name, SvgComponent, path }, id) => {
          const isActive = pathname === path;
          // Conditional visibility logic
          if (pathname === "/marketplace" && id <= 5 && path !== "/marketplace") return null; // Hide items with id <= 5 on Marketplace
          if (pathname !== "/marketplace" && id > 5) return null; // Hide items with id > 5 on other pages
          return (
            <div
              key={id}
              onClick={() => router.push(path)}
              className={`flex flex-col items-center gap-2 p-2 cursor-pointer ${
                isActive ? "text-[#213CFB]" : "text-[#F5F7FA]"
              } hover:text-[#213CFB]`}
            >
              <SvgComponent />
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Navbar;
