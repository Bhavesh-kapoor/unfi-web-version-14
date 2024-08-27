import React, { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";

function CookiesSection() {
  const [showConsent, setShowConsent] = useState(true);
  const [stateReady, setStateReady] = useState(false);

  useEffect(() => {
    const consent = hasCookie("localConsent");
    setStateReady(true);
    setShowConsent(!consent);
  }, []);

  const acceptCookie = () => {
    setShowConsent(false);
    setCookie("localConsent", "true", {});
  };

  const rejectCookie = () => {
    setShowConsent(false);
    setCookie("localConsent", "false", {});
  };

  return (
    <>
      {showConsent && stateReady && (
        <div className="fixed bottom-2 left-0 right-0 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 md:px-6 p-4 bg-gray-100/50 500 rounded-xl backdrop-blur-lg border-2 z-[100] w-[95%] max-w-fit m-auto">
          <span className="md:text-base w-fit text-sm hidden md:block">
            This website uses cookies to improve user experience. By using our
            website you consent to all cookies in accordance with our cookie
            policy.
          </span>
          <span className="md:text-base w-fit text-sm md:hidden block">
            This website uses cookies to improve user experience.
          </span>

          <div className="flex w-full md:w-fit gap-2 justify-center items-center">
            <button
              className="border-red-500 border p-2 md:px-4 rounded text-red-500 ml-auto md:text-base text-sm w-full md:w-fit"
              onClick={rejectCookie}
            >
              Reject
            </button>
            <button
              className="bg-green-500 p-2 md:px-4 rounded text-white ml-auto md:text-base text-sm w-full md:w-fit"
              onClick={acceptCookie}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CookiesSection;
