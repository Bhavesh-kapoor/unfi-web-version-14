import { Mail, PhoneCall } from "@/common/IconsSvg";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

function TopBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <Marquee
        speed={50}
        gradient={false}
        pauseOnHover={true}
        className="bg-orange-500">
        <div className="w-screen mx-auto text-white px-4 lg:px-28 py-2 flex justify-evenly md:justify-end items-center gap-8 md:gap-8 sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <PhoneCall />
            <span className="md:block hidden">Toll Free : </span>
            <span className="whitespace-nowrap">+91-9911771977</span>
          </div>
          <Link
            href="mailto:info@unificars.com"
            className="flex items-center gap-2">
            <Mail />
            <span>info@unificars.com</span>
          </Link>
        </div>
      </Marquee>
    );
  } else {
    return (
      <div className="bg-orange-500 text-white px-4 lg:px-28 py-2 flex  justify-end items-center gap-4 md:gap-8 sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <PhoneCall />
          <span className="md:block hidden">Toll Free : </span>
          <span>+91-9911771977</span>
        </div>
        <Link
          href="mailto:info@unificars.com"
          className="flex items-center gap-2">
          <Mail />
          <span>info@unificars.com</span>
        </Link>
      </div>
    );
  }
}

export default TopBar;

// working code

// import { Mail, PhoneCall } from "@/common/IconsSvg";
// import Link from "next/link";

// function TopBar() {
//   return (
//     <div className="w-full bg-orange-500 text-white sticky top-0 z-20">
//       <div className="overflow-x-auto w-full px-2 lg:px-28 py-2 flex justify-between md:justify-end items-center gap-4 md:gap-8 text-sm md:text-base">
//         <div className="flex items-center gap-2">
//           <PhoneCall className="md:w-6 w-4" />
//           <span className="md:block hidden">Toll Free : </span>
//           <span className="whitespace-nowrap">+91-9911771977</span>
//         </div>

//         <div>
//           <Link
//             href="mailto:info@unificars.com"
//             className="flex items-center gap-2">
//             <Mail className="md:w-6 w-4" />
//             <span>info@unificars.com</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TopBar;
