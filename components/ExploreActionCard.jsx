import Image from "next/image";
import Link from "next/link";
import React from "react";

function ExploreActionCard() {
  return (
    <div className="flex flex-wrap w-full items-center justify-center gap-6 px-4 py-6">
      <div className="h-full">
        <Link href="/scrap-cars">
          <Image
            width={300}
            height={300}
            src="/scrap-explore.png"
            className="max-h-[300px] h-full object-cover"
            alt="Scrap Cars"
          />
        </Link>
      </div>
      <div className="h-full">
        <Link href="/challan-check">
          <Image
            width={300}
            height={300}
            src="/challan-explore.png"
            className="max-h-[300px] object-cover h-full"
            alt="Challan Check"
          />
        </Link>
      </div>
      <div className=" h-full">
        <Link href="/car-health-report">
          <Image
            width={300}
            height={300}
            src="/pdi-explore.png"
            className="max-h-[300px] object-cover h-full"
            alt="Pre-Delivery Inspection"
          />
        </Link>
      </div>
      <div className=" h-full">
        <Link href="/sell-used-cars">
          <Image
            width={300}
            height={300}
            src="/resale-explore.png"
            className="max-h-[300px] object-cover h-full"
            alt="Resale Cars"
          />
        </Link>
      </div>
    </div>
  );
}

export default ExploreActionCard;
