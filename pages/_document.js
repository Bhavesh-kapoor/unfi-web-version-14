import { Html, Head, Main, NextScript } from "next/document";

export default function Document({ title, description, canonicalUrl }) {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" type="image/png" href={"/favicon.png"}></link>
        <link
          rel="icon"
          sizes="any"
          type="image/png"
          href={"/favicon.png"}></link>
        <link
          rel="apple-touch-icon"
          type="image/png"
          href={"/favicon.png"}></link>

        <meta property="og:title" content="Buy and Sell Used Car" />
        <meta property="og:site_name" content="Unifi Cars" />
        <meta property="og:url" content="https://unificars.com" />
        <meta
          property="og:description"
          content="Buy and Sell Used Car Online"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://unificars.com/_next/image?url=%2Flogo.png&w=256&q=75/"
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
