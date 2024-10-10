import Head from "next/head";
import { useState } from "react";
import dynamic from "next/dynamic";
import HomeQuestions from "@/components/Home/HomeQuestions";
import { BuyFaqData } from "@/common/faqData";
import SeoBuyData from "@/components/sell-used-car/SeoBuyData";

// Lazy loading components
const FilterCars = dynamic(
  () => import("@/components/cars-listing/FilterCars"),
  { ssr: true }
);
const AllCars = dynamic(() => import("@/components/cars-listing/AllCars"), {
  ssr: true,
});
const BuyCarSearchFilter = dynamic(
  () => import("@/components/cars-listing/BuyCarSearchFilter"),
  { ssr: true }
);

const BuyUsedCars = ({ initialCars, initialTotalItems, featuredCars }) => {
  const [carListing, setCarListing] = useState(initialCars || []);
  const [loading, setLoading] = useState(false);
  const [gridView, setGridView] = useState(true);

  const handleScroll = () => {
    const element = document.getElementById("seoData");
    if (element) {
      const offset = element.offsetTop;
      window.scrollTo({ top: offset - 150, behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>Buy Used Cars Online | Certified Pre-Owned Vehicles</title>
        <meta
          name="description"
          content="Explore a wide range of certified used cars at Unifi Cars. Buy used cars online with confidence, competitive pricing, and quality assurance."
        />
        <meta
          name="keywords"
          content="buy used cars, buy pre-owned cars, certified used cars, online car buying, affordable used cars, Unifi Cars"
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <meta
          property="og:title"
          content="Buy Used Cars Online | Certified Pre-Owned Vehicles - Unifi Cars"
        />
        <meta
          property="og:description"
          content="Discover a vast selection of certified used cars at Unifi Cars. Enjoy a reliable and convenient online car buying experience. Start browsing today!"
        />
        <meta property="og:url" content="https://unificars.com/buy-used-cars" />
        <meta property="og:image" content="https://unificars.com/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Buy Used Cars Online | Certified Pre-Owned - Unifi Cars"
        />
        <meta
          name="twitter:description"
          content="Find your next car at Unifi Cars. We offer certified pre-owned vehicles with competitive pricing and a seamless online buying process."
        />
        <meta name="twitter:image" content="https://unificars.com/logo.png" />
        <link rel="canonical" href="https://unificars.com/buy-used-cars" />
      </Head>
      <div className="p-4 md:p-6 lg:p-0">
        <div className="lg:grid lg:grid-cols-12 gap-10 mt-4">
          <div
            className="overflow-y-scroll h-[80vh] lg:p-4 min-h-screen hidden lg:block lg:col-span-3"
            id="filter"
          >
            <BuyCarSearchFilter
              setCarListing={setCarListing}
              setLoading={setLoading}
              filterUrl={`https://crm.unificars.com/api/filtersassuredsidebar`}
            />
          </div>
          <div className="lg:col-span-9 min-h-screen">
            <FilterCars
              model={""}
              gridView={gridView}
              setGridView={setGridView}
              setCarListing={setCarListing}
              setLoading={setLoading}
              filterUrl={`https://crm.unificars.com/api/filtersassuredsidebar`}
            />
            <h2 className="mt-5 mb-2 text-orange-500 text-lg font-bold">
              2500+ used cars in Delhi
            </h2>
            <p className="text-sm pb-5 lg:pb-0">
              Unifi Cars offers you a wide selection of 2500+ used cars in Delhi
              at affordable prices, including popular brands like Maruti,
              Hyundai, Honda, Toyota, Mahindra, and more{" "}
              <span
                onClick={handleScroll}
                className="underline cursor-pointer underline-offset-1 text-blue-400 font-semibold"
              >
                Learn More...
              </span>
            </p>
            <AllCars
              carListing={carListing}
              featuredlist={featuredCars}
              gridView={gridView}
              loading={loading}
              imageLink={"button"}
              assured={0}
              folder={"listing"}
            />
            <SeoBuyData />
            <HomeQuestions faqData={BuyFaqData} />
          </div>
        </div>
      </div>
    </>
  );
};

// Server-side function to fetch initial data
export async function getStaticProps() {
  let initialCars = [];
  let initialTotalItems = 0;
  let featuredCars = [];

  try {
    // Fetch initial cars data
    const res = await fetch(
      `https://crm.unificars.com/api/filtersassuredsidebar?page=1&limit=10`,
      {
        method: "POST",
        body: JSON.stringify({
          min_price: 100000,
          max_price: 10000000,
          owner: "",
          year: "",
          km: "",
          type: "",
          model: [],
        }),
        headers: { "Content-type": "application/json" },
      }
    );
    const jsonData = await res.json();

    if (jsonData.code === 200) {
      initialCars = jsonData.data.auction || [];
      initialTotalItems = jsonData.data.total || 0;
    } else {
      console.error("Failed to fetch initial car data:", jsonData.message);
    }

    // Fetch featured cars
    const featuredRes = await fetch(
      "https://crm.unificars.com/api/featuredcars",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
      }
    );

    if (featuredRes.ok) {
      const featuredJson = await featuredRes.json();

      if (featuredJson.code === 200) {
        featuredCars = featuredJson.data || [];
      } else {
        console.error("Failed to fetch featured cars:", featuredJson.message);
      }
    } else {
      console.error(
        "Failed to fetch featured cars:",
        featuredRes.status,
        featuredRes.statusText
      );
    }
  } catch (error) {
    console.error("Error fetching initial car data:", error);
  }

  return {
    props: {
      initialCars,
      initialTotalItems,
      featuredCars,
    },
  };
}

export default BuyUsedCars;
