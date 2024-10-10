import Image from "next/image";

const reasons = [
  {
    reason:
      "We provide you with a transparent and fair price based on the market value of your car.",
    imageUrl: "/assets/logo1.png",
  },
  {
    reason:
      "From start to finish just like inspection to paperwork, we handle all the process to provide you the smooth and hassle free experience.",
    imageUrl: "/assets/logo2.png",
  },
  {
    reason:
      "Join over 1 Lakh+ satisfied customers who had sold their cars with ease and confidence with Unifi Cars.",
    imageUrl: "/assets/logo3.png",
  },
];

const WhySellToUnifiCarsSection = () => {
  return (
    <section className="container mx-auto my-14 md:px-5 lg:px-32">
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-8">
        Why Sell to Unifi Cars?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 lg:gap-20">
        {reasons.map((reason, index) => (
          <div key={index} className="mb-3 text-lg">
            <Image
              width={200}
              height={200}
              unoptimized
              priority
              alt="Sell Car Png"
              src={reason?.imageUrl}
              className="w-fit mx-auto object-contain"
            />
            <p className="text-center">{reason?.reason}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySellToUnifiCarsSection;
