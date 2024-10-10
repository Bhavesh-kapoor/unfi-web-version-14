import Image from "next/image";

const reasons = [
  {
    title: "Choose Your Car & Submit Inquiry:",
    reason:
      "Select your favorite car & raise an inquiry to get the car health report.",
    imageUrl: "/assets/car.png",
  },
  {
    title: "Get Expert Consultation:",
    reason: "Our expert team contacts you for the further assistance.",
    imageUrl: "/assets/consulting.png",
  },
  {
    title: "Deal Closure:",
    reason:
      "Completes the process of payment and documentation to buy your favorite car.",
    imageUrl: "/assets/Closure.png",
  },
];
const reasons2 = [
  {
    title: "Identity Proof:",
    reason: "You can use your Aadhar cards as identity proof.",
    imageUrl: "/assets/Identity.png",
  },
  {
    title: "Residence Proof:",
    reason:
      "You can use your electricity bill and rent agreement as a residential proof.",
    imageUrl: "/assets/Residence.png",
  },
  {
    title: "Nationality Proof:",
    reason:
      "You can use your official documents just like Voter ID Card, school certificates, passports as a nationality proof.",
    imageUrl: "/assets/Nationality.png",
  },
];
const whyChooseUsData = [
  {
    title: "Trusted by 100,000+ Customers:",
    description: "Our transparent process earned trust of 100,000 + customers.",
  },
  {
    title: "210 Quality Checks:",
    description:
      "Each car from our inventory inspected by car experts with 210 check points.",
  },
  {
    title: "Easy Financing Options:",
    description: "We offer various financing options with Low-interest rates.",
  },
  {
    title: "Hassle free Process:",
    description:
      "Convenient online car selection with expert consultation, and secure transactions.",
  },
];
const unifiCarsBenefitsData = [
  {
    title: "30 days /2000 kms warranty:",
    description: "You will get 30 days warranty or 2000 kms which comes first.",
  },
  {
    title: "Free ownership transfer:",
    description: "We offer ownership transfer without any cost.",
  },
  {
    title: "Easy financial services:",
    description: "You will get easy financial services with 0% down payment.",
  },
  {
    title: "Assured benefits up to 9,999:",
    description: "Get benefit up to 9999 on every car purchase.",
  },
];
const unifiCarsBenefitsPreOwnedData = [
  {
    title: "Affordable Prices:",
    description:
      "Purchasing a used car is more cost effective than buying a new car.",
  },
  {
    title: "Low Depreciation Rate:",
    description:
      "Used car have lower depreciation rate as compared to new car.",
  },
  {
    title: "Wide Car Range:",
    description:
      "The used car market offers a huge variety of options that match with your preferences and budget.",
  },
  {
    title: "Financial Advantages:",
    description:
      "Used cars have lower insurance premiums, registration fees and taxes that offers long-term saving benefits.",
  },
];
const carData = [
  {
    make: "Maruti",
    models: ["Baleno", "Ciaz", "Swift", "Celerio", "New Wagon-R", "Alto"],
  },
  {
    make: "Honda",
    models: ["Grand i10", "Creta", "i10", "Elite i20", "VENUE", "Santro"],
  },
  { make: "Tata", models: ["City", "Amaze", "Jazz", "WR-V", "Brio", "Civic"] },
  { make: "Renault", models: ["Kwid", "TRIBER", "Duster", "Kiger", "Captur"] },
  {
    make: "Ford",
    models: ["EcoSport", "Figo", "Aspire", "Endeavour", "Freestyle"],
  },
  {
    make: "Toyota",
    models: ["Innova", "Fortuner", "Etios", "Corolla Altis", "Yaris"],
  },
  {
    make: "Mahindra",
    models: ["Scorpio", "XUV500", "Bolero", "Thar", "XUV300"],
  },
  { make: "Volkswagen", models: ["Polo", "Vento", "Ameo", "Jetta", "Passat"] },
  { make: "Nissan", models: ["Micra", "Sunny", "Terrano", "Kicks", "Magnite"] },
];

const SeoBuyData = () => {
  return (
    <div id="seoData">
      {" "}
      <div className="w-full mx-auto mt-10 pr-10">
        <h2 className="text-2xl font-semibold mb-4">Used cars in Delhi NCR</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-lg">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-2 border border-gray-300">
                  Car makes
                </th>
                <th className="text-left px-4 py-2 border border-gray-300">
                  Top model
                </th>
              </tr>
            </thead>
            <tbody>
              {carData.map((car, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="text-orange-500 font-semibold px-4 py-2 border border-gray-300">
                    {car.make}
                  </td>
                  <td className="px-4 py-2 border border-gray-300">
                    {car.models.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <section className="mt-8 pr-10">
        <h2 className="text-2xl font-bold mb-4">
          Steps To Buy Used Car From Unifi Cars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="mb-3 bg-orange-50/50 shadow-md rounded-xl p-5 text-lg"
            >
              <Image
                width={50}
                height={50}
                alt="Sell Car Png"
                src={reason?.imageUrl}
                className="w-fit mr-auto object-contain"
              />
              <p className="font-bold text-sm">{reason?.title}</p>
              <p className="font-light text-sm mt-2">{reason?.reason}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="w-full mx-auto px-4 pt-2 pb-10 pr-10">
        {/* Why Choose Us Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
          <ul>
            {whyChooseUsData.map((item, index) => (
              <li key={index} className="mb-3">
                <span className="font-bold text-orange-500">{item.title}</span>{" "}
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Unifi Cars Benefits Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Unifi Cars Benefits</h2>
          <ul>
            {unifiCarsBenefitsData.map((item, index) => (
              <li key={index} className="mb-3">
                <span className="font-bold text-orange-500">{item.title}</span>{" "}
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="mb-2 pr-10">
          <h2 className="text-2xl font-bold mb-4">
            Steps To Buy Used Car From Unifi Cars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reasons2.map((reason, index) => (
              <div
                key={index}
                className="mb-3 bg-orange-50/50 shadow-md rounded-xl p-5 text-lg"
              >
                <Image
                  width={50}
                  height={50}
                  alt="Sell Car Png"
                  src={reason?.imageUrl}
                  className="w-fit mr-auto object-contain"
                />
                <p className="font-bold text-sm">{reason?.title}</p>
                <p className="font-light text-sm mt-2">{reason?.reason}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Reasons to buy used car</h2>
          <p>
            Choosing a used car will be a smart decision it offers various
            benefit without compromising their quality. Used car gives an
            opportunity to get the cars at lower prices with lots of features
            and models. It also comes with low depreciation rates, so the
            investment retains more value over time.
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Benefits of buying pre-owned car
          </h2>
          <ul>
            {unifiCarsBenefitsPreOwnedData.map((item, index) => (
              <li key={index} className="mb-3">
                <span className="font-bold text-orange-500">{item.title}</span>{" "}
                <span>{item.description}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Popular used car options in delhi
          </h2>
          <p>
            Delhi has a wide variety of well-known used cars that suit different
            budgets and needs. Its buyers can get reliable models, such as the
            Maruti Swift, which is known for its fuel efficiency, or the Hyundai
            i20, which gives comfortable drives. The Honda City is an optimum
            selection, as it feels more superior and provides great value than
            the Tata Tiago does. Also in the spotlight are the Renault Duster
            and Mahindra Scorpio, which are known to have strong output levels.
            For those wishing to have luxury during their driving experience,
            the Toyota Fortuner and Ford Endeavour could be the best choices.
            With good reputations for quality and resale values in the Delhi
            used car market, these cars remain highly attractive options to
            buyers.
          </p>
        </section>
      </div>
    </div>
  );
};

export default SeoBuyData;
