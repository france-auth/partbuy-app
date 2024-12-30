import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Image from "next/image";

const Marketplace = () => {
  return (
    <main className="page">
      <div className="w-screen relative">
      <Header name="Auction Overflow" marketplace="Exit Marketplace" />
      <Image 
        src={'/marketplace/marketplace-bg'}
        alt="marketplace background image" 
        width={1} 
        height={1} 
        className="w-full h-auto"
        />
      </div>
      <Navbar />
    </main>
  )
}

export default Marketplace;