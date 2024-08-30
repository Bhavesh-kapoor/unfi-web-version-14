import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import dynamic from "next/dynamic";
import Script from "next/script";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "../ReduxStore/Store";

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });
const WhatsappSupport = dynamic(() => import("@/components/WhatsappSupport"), {
  ssr: true,
});

export default function App({ Component, pageProps }) {
  console.warn = () => {};
  console.error = () => {};
  console.clear();

  return (
    <>
      <Provider store={store}>
        <Head>
          <meta
            name="google-site-verification"
            content="B_rDvi4eBjWtzt-OgbGPtsw81mBO65QXvvTDuNIn7-o"
          />

          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-Q1VXLGSLZE"
            strategy="afterInteractive"
          />

          {/* Google Analytics script */}
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-D9PMBN6V80"
            strategy="afterInteractive"
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-D9PMBN6V80');
        `,
            }}
          />

          <Script
            strategy="afterInteractive"
            id="google_gtm"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-5Q94F56Q');
                   `,
            }}
          />

          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5Q94F56Q"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>

          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-16482210051"
            strategy="afterInteractive"
          />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16482210051');
            `,
            }}
          />
        </Head>

        <div className="max-w-[1920px] mx-auto">
          <NextTopLoader
            color="#3b82f6"
            initialPosition={0.2}
            crawlSpeed={200}
            crawl={true}
            showSpinner={false}
            easing="ease"
            speed={200}
            shadow="0 0 10px #3b82f6,0 0 5px #3b82f6"
            zIndex={1600}
          />

          <Navbar />
          <div className="pt-[110px] max-w-[1920px] mx-auto">
            <Component {...pageProps} />

            <WhatsappSupport />
          </div>
          <Footer />
        </div>

        {/* <AllCarParts /> */}
      </Provider>

      {/* Google tag (gtag.js) */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-D9PMBN6V80"
      />
      <Script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-D9PMBN6V80');
        `,
        }}
      />
    </>
  );
}
