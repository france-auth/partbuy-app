'use client'

import Image from "next/image";
import Header from "@/components/Header";
import Button from "@/components/ui/Button";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";

const PropertyDetails = () => {
  const params = useParams(); // { id: '1' }
  const propertyId = params?.id;

  return (
    <main className="page  fade-in">
      <Header id={Number(propertyId)} />
      <div className="box w-full gap-3 mb-3">
        <p className="top-text">
          property overview
        </p>
        <Image 
          src={'/properties/property-overview.svg'} 
          alt="property overvieww" 
          width={1}
          height={1}
          className="w-full h-auto"
        />
        <div className="w-full space-y-2">
          <div className="w-full justify-start montserrat space-y-1">
            <p className="property-overview-head">
              address
            </p>
            <p className="property-overview-desc">
              123 Main St, Virtual City, Virtual State.
            </p>
          </div>
          <div className="w-full grid grid-cols-2">
            <div className="w-full grid col-span-1 justify-start montserrat space-y-1">
              <p className="property-overview-head">
                purchase date
              </p>
              <p className="property-overview-desc">
                January 1, 2020
              </p>
            </div>
            <div className="place-self-end w-max grid col-span-1 justify-start montserrat space-y-1">
              <p className="property-overview-head">
                last updated
              </p>
              <p className="property-overview-desc">
                September 1, 2024
              </p>
            </div>
          </div>
          <div className="w-full grid grid-cols-2">
            <div className="w-full grid col-span-1 justify-start montserrat space-y-1">
              <p className="property-overview-head">
                type
              </p>
              <p className="property-overview-desc text-nowrap">
                Virtual Residential Property
              </p>
            </div>
            <div className="place-self-end w-max grid col-span-1 justify-start montserrat space-y-1">
              <p className="property-overview-head">
                size
              </p>
              <p className="property-overview-desc">
                1500 sq ft.
              </p>
            </div>
          </div>
          <div className="w-full grid col-span-1 justify-start montserrat space-y-1">
            <p className="property-overview-head">
              current status
            </p>
            <p className="property-overview-desc">
              Available for Rent
            </p>
          </div>
          <div className="w-full grid col-span-1 justify-start montserrat space-y-1">
            <p className="property-overview-head">
              virtual features
            </p>
            <div className="property-overview-desc pl-4">
              <ol className="list-decimal">
                <li>3 Bedrooms</li>
                <li>2 Bathrooms</li>
                <li>Modern Kitchen with Virtual Appliances</li>
                <li>Backyard and Virtual Garden</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-3 mb-3 montserrat">
        <Button
          name="buy property"
          src={'/dashboard/buy-property.svg'}
          alt={'dashboard button'}
          width={15}
          height={15}
          link={`/properties/${propertyId}`}
          className={`property-overview-button`}
          reverse
        />
        <Button
          name="bid in auction"
          src={'/dashboard/join-auction.svg'}
          alt={'dashboard button'}
          width={15}
          height={15}
          link="/"
          className={`property-overview-button`}
        />
      </div>
      <div className="box w-full gap-3">
        <p className="top-text">property trends</p>
        <Image 
          src={'/dashboard/analytics.svg'} 
          alt="analytics" 
          width={1}
          height={1}
          className="w-full h-auto"
        />
      </div>
      <div className="box w-full gap-3 montserrat">
        <p className="top-text">recommendations</p>
        <div className="w-full text-[10px] leading-[12.19px] text-[#B0B0B0] text-nowrap">
          <p className="">
            Consider enhancing features to increase value.
          </p>
          <p className="">
            Monitor virtual market trends for potential sale opportunities.
          </p>
        </div>
      </div>
      <Navbar />
    </main>
  )
}

export default PropertyDetails;