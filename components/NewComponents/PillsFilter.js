const PillsFilter = () => {
  const filters = [
    "Petrol",
    "CNG",
    "Diesel",
    "2020+",
    "2015+",
    "Sedan",
    "SUV",
    "HatchBag",
    "1st Owner",
    "2nd Owner",
    "Automatic",
    "Manual",
  ];
  return (
    <div>
      <div className="m-2 flex items-center justify-center gap-2 grid grid-cols-6 ">
        {filters.map((filter, index) => {
          return (
            <div
              style={index==0 || index==8 ?{background:"#f38102",color:"white"} : {background:""}}
              key={index}
              className="p-1 col-span-1 border  border-[#f38102] flex justify-center items-center "
            >
              {filter}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PillsFilter;
