import Image from "next/image";

const tips = [
  "Registration Certificate (RC):  RC is the most crucial document offered by the RTO that shows the valid ownership and registration of the vehicle.",
  "Insurance Papers: The insurance policy is the other crucial document required while selling your car. This shows that the car is insured, and the buyer will be covered in case of any damage to the car.",
  "Registered owner KYC: KYC is a important car selling document that verifies buyer identity, meets legal requirements and builds trust on the time of selling.",
  "Any other Relevant document: If you are selling your car in a different state, you need some significant documents like a No Objection Certificate (NOC) from the RTO.",
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
              <li key={index} className="mb-4 text-base">
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
