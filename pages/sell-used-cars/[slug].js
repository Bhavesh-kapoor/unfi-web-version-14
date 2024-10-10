import Head from "next/head";
import { useRouter } from "next/router";
import { sellFaqData } from "@/common/faqData";
import HowToSell from "@/components/Home/Howtosell";
import HomeQuestions from "@/components/Home/HomeQuestions";
import { sellTestimonialData } from "@/common/testimonialData";
import VehicleInfo from "@/components/NewComponents/VehicleInfo2";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HeaderSection from "@/components/sell-used-car/HeaderSection";
import TipsAdviceSection from "@/components/sell-used-car/TipsAdviceSection";
import WhySellToUnifiCarsSection from "@/components/sell-used-car/WhySellToUnifiCarsSection";

const SellUsedCarsPage = () => {
  const router = useRouter();
  const { slug: location } = router.query;
  const canonicalUrl = "http://unificars.com/sell-used-car";
  const title = "Sell Used Cars Online | Unifi Cars";
  const description =
    "Unifi Cars offers a seamless platform to sell your used cars. Choose from a wide range of certified pre-owned vehicles at great prices. Start your car listing today!";
  return (
    <div className="pt-12">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Unifi Cars, buy used cars, sell used cars, used car marketplace, pre-owned vehicles, certified used cars, second-hand cars"
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta
          property="og:title"
          content="Buy & Sell Used Cars Online | Trusted Marketplace - Unifi Cars"
        />
        <meta
          property="og:description"
          content="Unifi Cars offers a seamless platform to buy and sell used cars. Find certified pre-owned vehicles at great prices. Start your car search today!"
        />
        <meta property="og:url" content="https://unificars.com/" />
        <meta property="og:image" content="https://unificars.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Buy & Sell Used Cars Online | Trusted Marketplace - Unifi Cars"
        />
        <meta
          name="twitter:description"
          content="Unifi Cars is the go-to platform for buying and selling used cars. Explore a wide selection of pre-owned vehicles today!"
        />
        <meta name="twitter:image" content="https://unificars.com/logo.png" />

        <link rel="canonical" href={canonicalUrl} />
      </Head>

      <div className="text-center items-center flex flex-col mx-4 md:px-5 lg:px-0">
        <h1 className="text-2xl md:text-4xl text-black my-2 font-black">
          Sell Your Car At Best Price Instantly From Home
        </h1>

        <h3 className="text-lg md:text-2xl uppercase tracking-wide text-blue-950 my-6">
          Let's select your car brand
        </h3>
      </div>

      <div className="container mx-auto lg:w-[70%] mb-6 md:p-5 lg:p-0">
        <VehicleInfo />
      </div>
      <div className="container mx-auto mb-6 text-center">
        <h3 className="text-4xl font-bold mb-5 pt-10">
          The Best Way to Sell Used Car <br />
          Online in <span className="capitalize">{location}</span>
        </h3>
        <p className="text-xl w-full lg:w-4/5 mx-auto">
          Selling your car online gives peace of mind which offers a convenient
          and wide-reaching platform. You can take the help of some online
          websites that give you the instant quote of your car. To sell your car
          you can take the help of Unifi Cars. As we offer free inspections,
          instant price quotes, and handling all necessary paperwork which
          ensures a hassle-free experience.
        </p>
      </div>
      <HowToSell hideText={true} />
      <HeaderSection location={location} />
      <TipsAdviceSection />
      <WhySellToUnifiCarsSection />
      <div className="w-full h-fit">
        <TestimonialCarousel testimonialData={sellTestimonialData} />
      </div>
      <HomeQuestions faqData={sellFaqData} />
    </div>
  );
};

export default SellUsedCarsPage;
