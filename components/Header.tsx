'use client'

import Link from "next/link";
import { useParams } from "next/navigation";
interface HeaderProp {
  name?: string;
  id?: number;
  marketplace?: string;
  filter?: string;
}

const Header: React.FC<HeaderProp> = ({ name, id, marketplace, filter }) => {
  const params = useParams(); // Access the dynamic route parameter
  const dynamicId = params?.id || id;
  const marketplaceProp = marketplace;
  
  return (
    <div className="header">
        <p className="roboto font-bold text-gradient text-base leading-[18.75px]">
          {filter ? `Filter By: ${filter}` : dynamicId ? `Buy - Property ${dynamicId}` : name}
        </p>
        {marketplaceProp ? (<Link href="/">
            <p className="auction-button underline">
              {marketplace}
            </p>
          </Link>) : (
          <div className="flex gap-2">
            <span className="bg-[#D9D9D9] w-5 h-5 rounded-full"  />
            <span className="bg-[#D9D9D9] w-5 h-5 rounded-full"  />
        </div>
        )}
      </div>
  )
}

export default Header;