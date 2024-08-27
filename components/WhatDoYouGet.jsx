import React, { useState } from "react";

function WhatDoYouGet() {
  const data = [
    {
      name: "Engine & Transmission",
      items: [
        "Engine Health",
        "Battery Life",
        "Engine Oil Level Dipsticks",
        "Coolant",
        "Exhaust Smoke",
        "Gear Shifting",
        "Clutch",
      ],
    },
    {
      name: "Steering, Suspension & Brake",
      items: ["Steering Condition", "Suspension", "Brakes"],
    },
    {
      name: "Air Conditioning",
      items: ["AC Cooling", "Heater", "AC Climate Control"],
    },
    {
      name: "Electrical & Interior",
      items: [
        "Interior Condition",
        "No. of Power Windows",
        "No. of Airbags",
        "Electrical Components",
        "Music System",
        "Leather/Fabric Seat",
        "Sunroof/ Moonroof",
        "Steering Mounted Audio Control",
        "ABS",
        "Parking Sensor",
      ],
    },
    {
      name: "Exteriors & Tyres",
      items: [
        "Car Roof Condition",
        "Structural Damages (Pillars)",
        "Dicky/Boot Condition",
        "Head Lamp & Tail Light",
        "Tire Life",
        "Car Doors",
        "Running Borders",
        "Bonnet & Bumper",
        "OVRM",
      ],
    },
    {
      name: "Fuel & Performance",
      items: ["Power & Torque", "Fuel Type", "Emission Standard"],
    },
  ];

  const [currentItems, setCurrentItems] = useState(0);

  return (
    <div className="rounded-xl md:p-8 my-1 flex gap-2 md:gap-4 carousel-item h-fit border">
      <div className="flex flex-col gap-2 md:w-[500px]">
        {data.map((item, index) => (
          <button
            className={`${
              currentItems === index && "bg-blue-100 font-black"
            } p-2 md:px-8 text-start rounded-lg transition-all`}
            onClick={() => setCurrentItems(index)}>
            {item.name}
          </button>
        ))}
      </div>

      <div className="w-full h-full flex flex-col bg-gray-50 gap-1 rounded-md">
        <div className="flex flex-col gap-1 w-full p-2 overflow-auto md:h-[280px] border rounded-md">
          {data[currentItems].items.map((item, index) => (
            <button className="border-b-2 p-2 md:px-8 text-start rounded last:border-none">
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatDoYouGet;
