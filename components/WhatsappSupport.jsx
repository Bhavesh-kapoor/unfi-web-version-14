import Link from "next/link";
import { PhoneCall, WhatsAppIcon } from "@/common/IconsSvg";

function WhatsappSupport() {
  return (
    <>
      <div className="fixed bottom-0 right-0 m-8 z-50 drop-shadow-xl">
        <Link
          href="https://api.whatsapp.com/send?phone=919911771977&text=Hi, I want to chat"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
            <WhatsAppIcon className="text-6xl text-green-500 -m-0.5" />
          </div>
        </Link>
      </div>
      <div className="fixed bottom-0 left-0 m-8 z-50 drop-shadow-xl">
        <Link href="tel:+919911771977">
          <div className="bg-white rounded-full shadow-2xl border-4 border-gray-300 w-12 h-12 flex items-center justify-center">
            <PhoneCall className="text-6xl text-green-500 -m-0.5" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default WhatsappSupport;
