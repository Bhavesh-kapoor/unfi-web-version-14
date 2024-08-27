import VehicleInfo from "@/components/NewComponents/VehicleInfo";
import Image from "next/image";

const Sellcar = () => {
  return (
    <div className="container mx-auto my-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto gap-4">
        <div className="text-4xl w-[50] mx-auto px-6 order-last lg:order-first">
          <div className="md:ml-24 ml-4">
            <h2 className="py-2 font-bold ">
              <span className="text-orange-500 sellheadfont">Sell</span>
              <span className="sellheadfont"> Car </span>
            </h2>
            <p className="text-lg my-2">Select your car brand</p>
            <p className="text-lg text-black my-2 font-semibold">
              ● Instant online quote.
            </p>
            <p className="text-lg text-black my-2 font-semibold">
              ● Free doorstep evaluation.
            </p>
            <p className="text-lg text-black my-2 font-semibold">
              ● Same day payment.
            </p>
          </div>
          <Image
            height={400}
            width={400}
            src={"/selcarimage.png"}
            alt="Sell Car"
            className="w-full"
          />
        </div>
        <div className="text-4xl font-bold w-[100] px-6 order-first lg:order-last">
          <VehicleInfo />
        </div>
      </div>
    </div>
  );
};

export default Sellcar;
