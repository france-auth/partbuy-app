'use client'

import { useParams } from "next/navigation";
import Header from "@/components/Header";

const PropertyDetails = () => {
  const params = useParams(); // { id: '1' }
  const propertyId = params?.id;

  return (
    <main className="page">
      <Header id={Number(propertyId)} />
      <div className="box w-full">
      </div>
    </main>
  )
}

export default PropertyDetails;