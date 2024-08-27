import Head from "next/head";
import { useState } from "react";
import dynamic from "next/dynamic";

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

  return (
    <>
      <Head>
        <title>Buy Used Car Online with Unifi Cars</title>
        <meta
          name="description"
          content="Buy best quality used car at Unifi Cars. Choose from over 1000+ fully inspected car models with 210 checkpoints at best price in industry."
        />
        <meta
          name="keywords"
          content="Unificars, Unifi Cars, Direct Seller Cars, used cars in moti nagar, 210 Inspected points, Easy finance, Buy use Car in delhi, Buy Unificars Used Car, buy used car in moti nagar, Unificars Certified Cars, used car, used cars, buy used car, buy used cars, buy second hand cars, buy a used car, certified used car, inspected used car, used car in kirti nagar, buy used car online"
        />
        <meta
          name="robots"
          content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
        />
        <link rel="canonical" href="https://unificars.com/buy-used-cars" />
      </Head>
      <div className="p-4 md:p-6 lg:p-0">
        <div className="lg:grid lg:grid-cols-12 gap-10 mt-4">
          <div
            className="bg-slate-50 lg:p-4 min-h-screen hidden lg:block lg:col-span-3"
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
            <AllCars
              carListing={carListing}
              featuredlist={featuredCars}
              gridView={gridView}
              loading={loading}
              imageLink={"button"}
              assured={0}
              folder={"listing"}
            />
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
          max_price: 4000000,
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
