import React, { useState } from "react";
import BuyCarSearchFilter from "./BuyCarSearchFilter";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { CloseIcon, ListIcon } from "@/common/IconsSvg";

const FilterCars = (props) => {
  const { setCarListing, setLoading, gridView, setGridView, filterUrl } = props;
  const [filterSection, setFilterSection] = useState(false);
  const [sortSectiion, setSortSectiion] = useState(false);
  const [model, setModel] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setModel(router.query.model);
  }, [router.query.model]);

  return (
    <>
      <div className="flex items-center justify-between px-2 py-4 md:px-6">
        {/* filter and sort by section */}
        <div className="flex gap-2">
          <div
            className="lg:hidden flex cursor-pointer items-center group/filter hover:bg-[#f38102] hover:text-white hover:border-white transition-all duration-200 active:bg-orange-600 active:text-white gap-1 text-sm border-[1px] p-1 rounded border-[#f38102]/20 text-gray-600 mt-4"
            onClick={() => {
              setFilterSection(!filterSection);
            }}
          >
            <ListIcon className="p-1 text-[#f38102] group-hover/filter:text-white active:text-white" />
            <p>Filters</p>
          </div>
          {/* <div className='flex items-center cursor-pointer group/sort hover:bg-[#f38102] hover:text-white hover:border-white transition-all duration-200 active:bg-orange-600 active:text-white gap-1 text-sm border-[1px] p-1 rounded border-[#f38102]/20 text-gray-600' onClick={() => { setSortSectiion(!sortSectiion) }} >
                        <p>Sort By</p>
                        <BsChevronCompactDown className='text-[#f38102] group-hover/sort:text-white active:text-white' />
                    </div> */}
        </div>

        {/* block listing or detailed listing  */}
        {/* <div className='flex text-lg items-center justify-between'>
                {model!=""? <h1 className='px-2 text-base text-gray-500'>Showing {model}</h1>:<></>}
                    <div className={`p-2 hover:text-[#f38102] active:text-orange-700 cursor-pointer transition-all duration-800 ${gridView ? "" : "text-[#f38102]"}`} onClick={() => setGridView(false)}>
                        <AiOutlineBars />
                    </div>
                    <div className={`p-2 hover:text-[#f38102] active:text-orange-700 cursor-pointer transition-all duration-800 ${gridView ? "text-[#f38102]" : ""}`} onClick={() => setGridView(true)}>
                        <AiTwotoneAppstore />
                    </div>
                </div> */}
      </div>

      {/* filter section  */}
      <div
        className={`fixed bg-black/40 bottom-0 w-full overflow-hidden z-50 transition-all duration-500 ease-in-out ${
          filterSection ? "h-full" : "h-0"
        }`}
      >
        <div className="w-screen bg-white h-full overflow-y-scroll">
          <div className="pt-10 p-8 pb-4 border-b-2 text-xl relative">
            <h6>Filters</h6>
            <div
              className="absolute right-2 text-2xl top-6 p-4 flex items-center gap-2 cursor-pointer"
              onClick={() => setFilterSection(false)}
            >
              <span className="border text-base px-2 rounded-md">Save</span>
              <CloseIcon />
            </div>
          </div>
          <BuyCarSearchFilter
            setLoading={setLoading}
            setCarListing={setCarListing}
            filterUrl={filterUrl}
          />
        </div>
      </div>

      {/* sort by section */}
      {/* <div className={`absolute bg-black/10 lg:bg-transparent bottom-0 w-full flex overflow-hidden items-end z-50 justify-center md:justify-start transition-all duration-500 ease-in-out  ${sortSectiion ? "h-[100%]" : "h-0"}`} onClick={() => { setSortSectiion(!sortSectiion) }} >

                <div className='bg-white min-h-[14rem] w-full md:w-1/3 rounded-t-xl'>
                    <div className='border-b-2 p-2 text-black/40 font-medium tracking-wider border-black/10'>
                        <h6>SORT BY</h6>
                    </div>
                    <div className='font-medium flex flex-col justify-between gap-2 text-black/80 divide-y'>
                        <label htmlFor='sort' className='p-2 px-6 flex items-center justify-between accent-[#da7808f9]'>Relevance <input type='radio' name='sort' /> </label>
                        <label htmlFor='sort' className='p-2 px-6 flex items-center justify-between accent-[#da7808f9]'>Popularity <input type='radio' name='sort' /> </label>
                        <label htmlFor='sort' className='p-2 px-6 flex items-center justify-between accent-[#da7808f9]'>Price -- Low to High <input type='radio' name='sort' /> </label>
                        <label htmlFor='sort' className='p-2 px-6 flex items-center justify-between accent-[#da7808f9]'>Price -- High to Low <input type='radio' name='sort' /> </label>
                        <label htmlFor='sort' className='p-2 px-6 flex items-center justify-between accent-[#da7808f9]'>Newest First <input type='radio' name='sort' /> </label>
                    </div>
                </div>

            </div> */}
    </>
  );
};

export default FilterCars;
