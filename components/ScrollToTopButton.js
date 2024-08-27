import { ArrowUp } from "@/common/IconsSvg";
import Link from "next/link";

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container mx-auto px-2 md:w-[85%]">
      <div
        className="p-4 bg-orange-500 rounded-full m-2 w-fit mb-0 -mt-6 mx-auto cursor-pointer"
        onClick={scrollToTop}>
        <ArrowUp className="text-white text-xl" />
      </div>
      <div className="w-full flex flex-wrap justify-between items-center p-2 pb-4 gap-4">
        <p>© 2024 All Rights Reserved Unifi Wheels Pvt. Ltd.</p>
        <div className="flex gap-4">
          <Link href="/privacy-policy">Privacy Policy </Link>
          <p>|</p>
          <Link href="/term-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  );
};

export default ScrollToTopButton;
