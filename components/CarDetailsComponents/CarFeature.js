import * as React from "react";
import { TiTick } from "react-icons/ti";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CarDetailTable = (props) => {
  const { CarFeature } = props;
  return (
    <div>
      {CarFeature && CarFeature.length > 0 ? (
        <>
          <div className="border bg-white rounded-xl shadow">
            <h2 className="p-4 text-2xl font-extrabold">Features</h2>

            <div className="grid grid-cols-2 gap-4 w-full px-3 md:grid-cols-3 text-xs md:text-sm font-normal">
              <div className="flex gap-2 items-center font-semibold ">
                <p className="flex-none text-lg text-green-500 md:text-xl">
                  <TiTick />
                </p>
                <p>
                  {CarFeature && CarFeature[0]?.comfort_and_convenience[0]?.name
                    ? CarFeature[0]?.comfort_and_convenience[0]?.name
                    : ""}
                </p>
              </div>
              <div className="flex gap-2 items-center font-semibold ">
                <p className="flex-none text-lg text-green-500 md:text-xl">
                  <TiTick />
                </p>
                <p>
                  {CarFeature && CarFeature[0]?.comfort_and_convenience[1].name
                    ? CarFeature[0]?.comfort_and_convenience[1].name
                    : ""}
                </p>
              </div>
              <div className="flex gap-2 items-center font-semibold ">
                <p className="flex-none text-lg text-green-500 md:text-xl">
                  <TiTick />
                </p>
                <p>
                  {CarFeature && CarFeature[0]?.comfort_and_convenience[2].name
                    ? CarFeature[0]?.comfort_and_convenience[2].name
                    : ""}
                </p>
              </div>
              <div className="flex gap-2 items-center font-semibold ">
                <p className="flex-none text-lg text-green-500 md:text-xl">
                  <TiTick />
                </p>
                <p>
                  {CarFeature && CarFeature[0]?.interior[0]?.name
                    ? CarFeature[0]?.interior[0]?.name
                    : ""}
                </p>
              </div>
              <div className="flex gap-2 items-center font-semibold ">
                <p className="flex-none text-lg text-green-500 md:text-xl">
                  <TiTick />
                </p>
                <p>
                  {CarFeature && CarFeature[0]?.interior[1].name
                    ? CarFeature[0]?.interior[1].name
                    : ""}
                </p>
              </div>
              <div className="flex gap-2 items-center font-semibold ">
                <p className="flex-none text-lg text-green-500 md:text-xl">
                  <TiTick />
                </p>
                <p>
                  {CarFeature && CarFeature[0]?.exterior[0]?.name
                    ? CarFeature[0]?.exterior[0]?.name
                    : ""}
                </p>
              </div>
              <div className="flex gap-2 items-center font-semibold ">
                <p className="flex-none text-lg text-green-500 md:text-xl">
                  <TiTick />
                </p>
                <p>
                  {CarFeature && CarFeature[0]?.exterior[1].name
                    ? CarFeature[0]?.exterior[1].name
                    : ""}
                </p>
              </div>
              <div className="flex gap-2 items-center font-semibold ">
                <p className="flex-none text-lg text-green-500 md:text-xl">
                  <TiTick />
                </p>
                <p>
                  {CarFeature && CarFeature[0]?.safety[0]?.name
                    ? CarFeature[0]?.safety[0]?.name
                    : ""}
                </p>
              </div>

              <div className="flex gap-2 items-center font-semibold">
                <p className="flex-none text-lg text-green-500 md:text-xl">
                  <TiTick />
                </p>
                <p>
                  {CarFeature && CarFeature[0]?.safety[1].name
                    ? CarFeature[0]?.safety[1].name
                    : ""}
                </p>
              </div>
            </div>

            <Accordion className="p-2 mt-5">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h3 className="text-black font-bold">View all Features</h3>
              </AccordionSummary>
              <div className="px-2 mb-2">
                {CarFeature[0]?.car_details?.name && (
                  <Accordion className="">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <h3>Comfort and Convenience</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="grid grid-cols-2 gap-4 w-full md:grid-cols-3 text-xs md:text-sm font-normal pb-4">
                        {CarFeature && CarFeature.length > 0 ? (
                          CarFeature[0]?.car_details?.name?.map((e, index) => {
                            return (
                              <div
                                className="flex gap-2 items-center font-semibold "
                                key={index}
                              >
                                <p className="flex-none text-lg text-green-500 md:text-xl">
                                  <TiTick />
                                </p>
                                <p>{e.name}</p>
                              </div>
                            );
                          })
                        ) : (
                          <></>
                        )}
                      </div>
                    </AccordionDetails>
                  </Accordion>
                )}
                {CarFeature[0]?.exterior && (
                  <Accordion className="">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <h3>Exterior</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="grid grid-cols-2 gap-4 w-full md:grid-cols-3 text-xs md:text-sm font-normal pb-4">
                        {CarFeature && CarFeature.length > 0 ? (
                          CarFeature[0]?.exterior?.map((e, index) => {
                            return (
                              <div
                                className="flex gap-2 items-center font-semibold "
                                key={index}
                              >
                                <p className="flex-none text-lg text-green-500 md:text-xl">
                                  <TiTick />
                                </p>
                                <p>{e.name}</p>
                              </div>
                            );
                          })
                        ) : (
                          <></>
                        )}
                      </div>
                    </AccordionDetails>
                  </Accordion>
                )}
                {CarFeature[0]?.interior && (
                  <Accordion className="">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <h3>Interior</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="grid grid-cols-2 gap-4 w-full md:grid-cols-3 text-xs md:text-sm font-normal pb-4">
                        {CarFeature && CarFeature.length > 0 ? (
                          CarFeature[0]?.interior?.map((e, index) => {
                            return (
                              <div
                                className="flex gap-2 items-center font-semibold "
                                key={index}
                              >
                                <p className="flex-none text-lg text-green-500 md:text-xl">
                                  <TiTick />
                                </p>
                                <p>{e.name}</p>
                              </div>
                            );
                          })
                        ) : (
                          <></>
                        )}
                      </div>
                    </AccordionDetails>
                  </Accordion>
                )}
                {CarFeature[0]?.safety && (
                  <Accordion className="">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <h3>Safety</h3>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="grid grid-cols-2 gap-4 w-full md:grid-cols-3 text-xs md:text-sm font-normal pb-4">
                        {CarFeature && CarFeature.length > 0 ? (
                          CarFeature[0]?.safety?.map((e, index) => {
                            return (
                              <div
                                className="flex gap-2 items-center font-semibold "
                                key={index}
                              >
                                <p className="flex-none text-lg text-green-500 md:text-xl">
                                  <TiTick />
                                </p>
                                <p>{e.name}</p>
                              </div>
                            );
                          })
                        ) : (
                          <></>
                        )}
                      </div>
                    </AccordionDetails>
                  </Accordion>
                )}
              </div>
            </Accordion>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CarDetailTable;
