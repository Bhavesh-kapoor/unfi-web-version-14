const HeaderSection = ({ location }) => {
  return (
    <section
      className="bg-cover h-[66vh] md:h-[40vh] lg:h-[66vh] relative bg-left lg:bg-top flex items-center justify-center text-center"
      style={{ backgroundImage: "url('/assets/banner.png')" }}
    >
      <div className="text-white inset-0 flex flex-col justify-center items-center absolute container mx-auto lg:px-20">
        <h4 className="text-4xl lg:text-5xl font-bold mb-4">
          What to Keep in Mind When Selling
          <br /> Used Car in <span className="capitalize">{location}</span>?
        </h4>
        <p className="text-xl w-4/5 pt-5 mx-auto font-light">
          When you are planning to sell a used car in{" "}
          <span className="capitalize">{location}</span>, it's important to have
          all your papers ready, such as the Registration Certificate (RC),
          Insurance, and Pollution Under Control (PUC) certificate. Make sure
          everything is up-to-date. Additionally, consider servicing your car
          and addressing any minor repairs to enhance its appeal to potential
          buyers.
        </p>
      </div>
    </section>
  );
};

export default HeaderSection;
