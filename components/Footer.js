import Link from "next/link";
import React from "react";
import ScrollToTopButton from "./ScrollToTopButton";

import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  LocationIcon,
  Mail,
  PhoneCall,
  TwitterIcon,
} from "@/common/IconsSvg";

const Footer = () => {
  return (
    <div>
      <footer
        className="min-h-[400px] body-font bg-white border-t-2 border-black/10 text-sm font-light"
        style={{
          backgroundImage: `url('/footer-image.png')`,
          backgroundSize: "cover",
        }}>
        <div className="px-2 py-8 grid grid-cols-1 md:grid-cols-3 text-white container mx-auto md:w-[90%]">
          <div className="px-5 flex flex-col">
            <Link
              href={"/"}
              className="flex title-font font-medium items-center"
              target="_blank"
              rel="noreferrer">
              <Image
                src={"/whitelogo.png"}
                alt="logo"
                width={200}
                height={100}
                // className="border"
              />
            </Link>
            <p className="text-left  text-sm max-w-[300px]">
              Unifi Cars is a trusted partner for buying or selling pre-owned
              cars. You can choose from 1000+ inspected used car models. We make
              your car-finding journey easy and convenient. Enjoy peace of mind
              on every purchase with us. As a complementary offer, you will get
              the first car service free and an engine warranty for 2000 km.
            </p>

            {/* <div className="cursor-pointer flex rounded font-bold  p-2 my-4 text-xl">
              <a href="tel:9911771977" className=" flex">
                <BsFillTelephoneFill className="ml-2 my-1" />&nbsp;&nbsp;
                +91 9911771977
              </a>
            </div> */}

            <div className="flex gap-2 my-6">
              <a
                target="_blank"
                rel="noreferrer"
                className=" cursor-pointer hover:text-blue-500 transition-all duration-150"
                href="https://www.facebook.com/UnifiCars/">
                <FacebookIcon className="text-2xl" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="ml-3 cursor-pointer hover:text-red-500 transition-all duration-150"
                href="https://www.instagram.com/unificars/">
                <InstagramIcon className="text-2xl" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="ml-3 cursor-pointer hover:text-blue-500 transition-all duration-150"
                href="https://www.linkedin.com/company/unificars">
                <LinkedInIcon className="text-2xl" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="ml-3 cursor-pointer hover:text-blue-500 transition-all duration-150"
                href="https://twitter.com/UnifiCars/">
                <TwitterIcon className="text-2xl" />
              </a>
            </div>
            {/* <p className="text-sm">
              Copyright © 2023. All rights reserved. by Unifi Cars
            </p> */}
          </div>

          <div className="my-4 mt-6">
            <div className="px-2 grid grid-cols-2 gap-3">
              <div>
                <h4 className="text-xl mb-4 font-bold">
                  <b>Services</b>
                </h4>
                <ul className="flex gap-2 flex-col">
                  <li className="transition-all duration-150">
                    <Link
                      href="/buy-used-cars"
                      target="_blank"
                      rel="noreferrer">
                      Buy Car
                    </Link>
                  </li>
                  <li className="transition-all duration-150">
                    <Link
                      href="/sell-used-cars"
                      target="_blank"
                      rel="noreferrer">
                      Sell Car
                    </Link>
                  </li>
                  <li className="transition-all duration-150">
                    <Link
                      href={"/car-health-report"}
                      target="_blank"
                      rel="noreferrer">
                      Car Health Report
                    </Link>
                  </li>

                  <li className="transition-all duration-150">
                    <Link href={"/scrap-cars"} target="_blank" rel="noreferrer">
                      Scrap Car
                    </Link>
                  </li>

                  <li className="transition-all duration-150">
                    <Link
                      href="/challan-check"
                      target="_blank"
                      rel="noreferrer">
                      Challan Check
                    </Link>
                  </li>
                  {/* <li className="transition-all duration-150">
                    <Link href="/assured-cars" target="_blank">
                      Assured Fix
                    </Link>
                  </li> */}
                  <li className="transition-all duration-150">
                    <Link
                      href="/become-our-partner"
                      target="_blank"
                      rel="noreferrer">
                      Become our Partner
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl mb-4 font-bold">
                  <b>Company</b>
                </h4>
                <ul className="flex gap-2 flex-col ">
                  <li className="transition-all duration-150 ">
                    <Link href="/" target="_blank" rel="noreferrer">
                      Home
                    </Link>
                  </li>
                  <li className="transition-all duration-150 ">
                    <Link href="/about" target="_blank" rel="noreferrer">
                      About Us
                    </Link>
                  </li>
                  <li className="transition-all duration-150 ">
                    <Link href="/contact" target="_blank" rel="noreferrer">
                      Contact Us
                    </Link>
                  </li>
                  <li className="transition-all duration-150">
                    <Link href="/blogs" target="_blank" rel="noreferrer">
                      Blogs
                    </Link>
                  </li>
                  <li className="transition-all duration-150 ">
                    <Link
                      href="/term-conditions"
                      target="_blank"
                      rel="noreferrer">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="transition-all duration-150">
                    <Link
                      href="/privacy-policy"
                      target="_blank"
                      rel="noreferrer">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="transition-all duration-150">
                    <Link href="/sitemap.xml" target="_blank" rel="noreferrer">
                      Sitemap
                    </Link>
                  </li>
                  {/* <li className="transition-all duration-150">
                  <div className="bg-blue-200 cursor-pointer flex rounded hover:bg-orange-400 font-bold shadow-lg text-blue-950 p-2 whitespace-nowrap" style={{ width: 'max-content' }}>
                    <a href={"/become-our-partner"} className=" flex">
                      Become our partner
                    </a>
                  </div> 
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="flex gap-10"></div>
          </div>
          <div className="flex flex-col mr-4 pl-3 mt-6 gap-2">
            <h4 className=" font-bold text-xl  mb-2">Contact us at</h4>

            <Link
              href="mailto:info@unificars.com"
              className="flex items-center gap-2"
              target="_blank">
              <Mail className="p-1" />
              <span className="text-left  text-sm">info@unificars.com</span>
            </Link>

            <div className="text-left  text-sm flex items-center gap-2">
              <PhoneCall className="p-1" />
              <span>+91-9911771977</span>
            </div>

            <div className="text-left text-sm flex items-center gap-2">
              <LocationIcon className="p-1" />
              <span>
                Building No. 1A, 2nd, 3rd, 4th Floor, DLF, Moti Nagar, New
                Delhi-110015.
              </span>
            </div>

            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d520.4317849897567!2d77.14558207733664!3d28.658707230234807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03dcf6e36613%3A0x771518fcd5684a90!2sUnifi%20Cars!5e0!3m2!1sen!2sin!4v1719559987027!5m2!1sen!2sin"
                className="w-full rounded-xl"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
};

export default Footer;
