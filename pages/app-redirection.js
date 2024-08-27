import { useEffect } from "react";

const RedirectPage = () => {
  useEffect(() => {
    redirectByMobileOS();
  }, []);

  const redirectByMobileOS = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // For Android
    if (/android/i.test(userAgent)) {
      window.location.href =
        "intent://scan/#Intent;scheme=unificarsliveauction;package=com.unificarsliveauction;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.unificarsliveauction;end;";
    }

    // For iPhone / iPad / iPod (iOS)
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      const appScheme = "unificarsliveauction://";
      const appStoreUrl =
        "https://apps.apple.com/in/app/unifi-cars-live-auction/id6469327106";

      const iframe = document.createElement("iframe");
      iframe.style.border = "none";
      iframe.style.width = "1px";
      iframe.style.height = "1px";
      document.body.appendChild(iframe);

      setTimeout(() => {
        window.location.href = appStoreUrl;
      }, 2000); // Redirect to App Store after 2 seconds if the app is not opened

      iframe.src = appScheme;
    }
  };

  return null; // This component doesn't render anything
};

export default RedirectPage;
