'use client'

import { useParams } from "next/navigation";
interface HeaderProp {
  name?: string;
  id?: number;
}

const Header: React.FC<HeaderProp> = ({ name, id }) => {
  const params = useParams(); // Access the dynamic route parameter
  const dynamicId = params?.id || id;
  return (
    <div className="header">
        <p className="roboto font-bold text-gradient text-base leading-[18.75px]">
          {dynamicId ? `Buy - Property ${dynamicId}` : name}
        </p>
        <div className="flex gap-2">
          <span className="bg-[#D9D9D9] w-5 h-5 rounded-full"  />
          <span className="bg-[#D9D9D9] w-5 h-5 rounded-full"  />
        </div>
      </div>
  )
}

export default Header;