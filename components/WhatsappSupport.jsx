import { WhatsAppIcon } from "@/common/IconsSvg";
import Link from "next/link";
import React from "react";

function WhatsappSupport() {
  return (
    <div className="fixed bottom-0 right-0 m-12 z-50 drop-shadow-xl">
      <Link
        href="https://api.whatsapp.com/send?phone=919911771977&text=Hi, I want to chat"
        target="_blank"
        rel="noreferrer">
        <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
          <WhatsAppIcon className="text-6xl text-green-500 -m-0.5" />
        </div>
      </Link>
    </div>
  );
}

export default WhatsappSupport;
