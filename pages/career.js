import React from "react";

const career = () => {
  return (
    <>
      <div className="h-[300px] relative">
        <div className="bradcump  absolute  translate-x-[6rem] md:translate-x-[37rem]    translate-y-36">
          <h1 className="text-4xl text-[#f38120]"> CARRIER</h1>
          <div className="flex gap-2 mx-6 py-5">
            <div className=""> Home | </div>
            <div className=" text-[#f38120]">Carrier</div>
          </div>
        </div>

        <img src="./career.jpg" className="w-full h-full" />
      </div>
      <div className="md:mx-24 mx-8 my-24">
        <h1 className="font-bold text-xl">Who are we and what do we do?</h1>
        <p className="my-5 italic text-gray-900 text-justify">
          The Company is a company incorporated under the Companies Act, 2013
          and is engaged in the business of trading in pre-owned vehicle(s)and
          providing services incidental and ancillary thereto.
        </p>
        <p className="my-9 italic  text-gray-900 text-justify">
          The Website is owned and managed by the Company. Please read the Terms
          to acquaint yourself of the practices of the Company, with regard to
          your use of the domain and subdomains of our Website, which includes
          only the domains and subdomains being operated by the Company and does
          not include the domains or subdomains licensed out by the Company. It
          is acknowledged by you that upon being redirected to, or opening a
          domain which is not owned or operated by the Company, you are bound by
          the terms of use of that third party domain or subdomain irrespective
          of whether it is licensed by the Company to a third party.
        </p>

        <p className="my-9 italic text-gray-900 text-justify ">
          We endeavor to make the process of trading in pre-owned vehicle(s) an
          amazing and hassle-free experience for our customers. We hereby
          clarify that the Services mentioned on the Website are subject to
          availability. The online valuations of a vehicle provided by the
          Company are only prima facie quotations arrived on the basis of the
          information provided by you and are subject to change on further
          inspection of the vehicle. The Company reserves the right to modify,
          amend and/or alter the said Service(s) based on its sole discretion
          and no such Services shall be deemed to be any offer or acceptance by
          the Company unless the same are accepted by the Company separately in
          writing through its authorized representatives. For specific price
          information, terms applicable, program and product information, please
          contact our customer care helpline at.
        </p>
      </div>
    </>
  );
};

export default career;
