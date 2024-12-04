"use client";

import React from "react";
import HomeSvg from "./svgcomponents/HomeSvg";
import TierSvg from "./svgcomponents/TierSvg";
import ProfileSvg from "./svgcomponents/ProfileSvg";
import AuctionSvg from "./svgcomponents/AuctionSvg";
import TutorialSvg from "./svgcomponents/TutorialSvg";
import SettingsSvg from "./svgcomponents/SettingsSvg";
import ReferralSvg from "./svgcomponents/ReferralSvg";
import ValuationSvg from "./svgcomponents/ValuationSvg";
import { usePathname, useRouter } from "next/navigation";
import ChallengesSvg from "./svgcomponents/ChallengesSvg";
import MarketplaceSvg from "./svgcomponents/MarketplaceSvg";

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
];

const navbarItems2: NavbarItem[] = [
  { name: "Marketplace", SvgComponent: MarketplaceSvg, path: "/marketplace" },
  { name: "Auction", SvgComponent: AuctionSvg, path: "/auction" },
  { name: "Tier", SvgComponent: TierSvg, path: "/tier" },
  { name: "Valuation", SvgComponent: ValuationSvg, path: "/valuation" },
  { name: "Referral", SvgComponent: ReferralSvg, path: "/referral" },
];

const FirstNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {navbarItems.map(({ name, SvgComponent, path }, id) => {
        const isActive = pathname === path;
        if (pathname === '/marketplace' && id < 6 ) return null
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
    </>
  );
};

const SecondNav = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {navbarItems2.map(({ name, SvgComponent, path }, id) => {
        const isActive = pathname === path;
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
    </>
  );
};

const Navbar: React.FC = () => {
  const pathname = usePathname();
  return (
    <main className="w-screen fixed bottom-0 right-0 left-0 bg-[#FFFFFF1A] backdrop-blur-[50px] bg-opacity-90 z-50">
      <div className="flex items-center justify-evenly montserrat font-bold text-[8px] leading-[8px] h-full p-2 px-3">
        {/* Conditional visibility logic */}
        {pathname === "/marketplace"/*  || "/auction" || "tier" || "valuation" || "/referral "" */ 
          ? <SecondNav /> 
          : pathname === "/" || "/challenges" || "tutorial" || "settings" || "/profile" 
          ? <FirstNav /> : <FirstNav /> }
      </div>
    </main>
  );
};

export default Navbar;
