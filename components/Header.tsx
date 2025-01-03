'use client';

import Link from "next/link";
import { useParams } from "next/navigation";

interface HeaderProp {
  name?: string;
  id?: number;
  tutorialIndex?: number; // Tutorial index
  cardIndex?: number; // Card index
  marketplace?: string;
  filter?: string;
  className?: string;
  summary?: boolean; // Determines summary mode
}

const Header: React.FC<HeaderProp> = ({ 
  name, 
  id, 
  tutorialIndex, 
  cardIndex, 
  marketplace, 
  filter, 
  className = '',
  summary 
}) => {
  const params = useParams(); // Access dynamic route parameters
  const dynamicId = params?.id || id; // Use dynamicId if available

  // Conditional header content for summary
  if (summary && tutorialIndex) {
    return (
      <div className="header2 fixed">
        <p className="roboto font-bold text-gradient text-center text-base leading-[18.75px]">
          {`Level ${tutorialIndex} - Summary`}
        </p>
      </div>
    );
  }

  // Default header content
  return (
    <div className={`header fixed ${className}`}>
      {/* Dynamic title logic */}
      <p className="roboto font-bold text-gradient text-base leading-[18.75px]">
        {filter
          ? `Filter By: ${filter}` // Display filter information
          : tutorialIndex !== undefined && cardIndex !== undefined
          ? `Level ${tutorialIndex} - Tutorial ${cardIndex}` // Dynamic tutorial/card title
          : dynamicId
          ? `Buy - Property ${dynamicId}` // Fallback to dynamicId logic
          : name}
      </p>

      {/* Conditional rendering for marketplace or placeholders */}
      {marketplace ? (
        <Link href="/">
          <p className="auction-button underline">{marketplace}</p>
        </Link>
      ) : tutorialIndex && cardIndex ? (
        <div className="w-max flex justify-center items-center">
          <p className="roboto font-bold text-gradient text-xs leading-[14.06px]">
            {cardIndex} of 10
          </p>
        </div>
      ) : (
        <div className="flex gap-2">
          <span className="bg-[#D9D9D9] w-5 h-5 rounded-full" />
          <span className="bg-[#D9D9D9] w-5 h-5 rounded-full" />
        </div>
      )}
    </div>
  );
};

export default Header;
