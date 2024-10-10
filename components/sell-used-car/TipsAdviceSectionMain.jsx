import Image from "next/image";

const tips = [
  "Complete Documentation: When you are planning to sell your car you have to keep all your documents including RC, insurance, and PUC. If your car has financed you have to share the original No-Objection Certificate (NOC) from the lender.",
  "Service Your Car: As you know a well-maintained car gets a higher price. To get the best price of your car ensure that your car is serviced and free from any mechanical issues.",
  "Determine Your Car's Value: You have to research the current market value of your car based on the make, model, year, and condition. You can take the help of some online platforms like Unifi Cars to get the estimated value of your car.",
  "Secure Payment: You have to always prefer the secured payment methods like online method and offline method.",
];

const TipsAdviceSection = () => {
  return (
    <section className="container mx-auto my-14 md:px-5 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold leading-snug text-center">
        Documents Required to Sell a Used Car
      </h2>
      <p className="lg:w-2/3 mx-auto text-center mt-4">
        Selling your used car involves several steps, including gathering the
        necessary documents. Here&apos;s what you&apos;ll need:
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 lg:gap-10">
        <div className="lg:w-1/2">
          <ul className="">
            {tips.map((tip, index) => (
              <li key={index} className="mb-4 text-lg">
                <strong>{tip.split(":")[0]}</strong>: {tip.split(":")[1]}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2">
          <Image
            width={400}
            height={400}
            alt="Sell Car Png"
            src={"/assets/sellcar.png"}
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default TipsAdviceSection;
