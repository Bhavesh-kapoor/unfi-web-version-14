const HeaderSection = () => {
  return (
    <section
      className="bg-cover h-[75vh] md:h-[48vh] lg:h-[75vh] relative bg-left lg:bg-top flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/assets/banner.png')" }}
    >
      <div className="text-white inset-0 flex flex-col justify-center items-center absolute container mx-auto lg:px-20">
        <h4 className="text-4xl lg:text-5xl font-bold mb-4">
          Why to Sell Your Car to Unifi Cars?
        </h4>
        <p className="text-lg w-4/5 pt-5 mx-auto font-light">
          Unifi Cars offer instant valuation of your car. They help you to
          connect with a large network of dealers and ensure that your
          car-selling journey is hassle-free. Unifi Cars offer free inspection
          and maintain transparency. In today&apos;s time, selling a car has
          become difficult due to privacy issues, fake profiles, and fraud
          calls. As a solution, sell your car with Unifi Cars, which offers
          convenience and home pickup.
        </p>
        <p className="pt-5">
          Selling your car with Unifi Cars means you can sit back and relax
          while we handle everything from inspection to paperwork. Our
          transparent process ensures you get the best value for your car
          without any hidden charges. Get started with Unifi Cars today for a
          hassle-free car-selling experience!
        </p>
      </div>
    </section>
  );
};

export default HeaderSection;
