interface HeaderProp {
  name: string
}

const Header: React.FC<HeaderProp> = ({ name }) => {
  return (
    <div className="header">
        <p className="roboto font-bold text-gradient text-base leading-[18.75px]">
          {name}
        </p>
        <div className="flex gap-2">
          <span className="bg-[#D9D9D9] w-5 h-5 rounded-full"  />
          <span className="bg-[#D9D9D9] w-5 h-5 rounded-full"  />
        </div>
      </div>
  )
}

export default Header;