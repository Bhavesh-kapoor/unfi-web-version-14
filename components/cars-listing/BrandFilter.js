import React, { useEffect, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { CloseIcon } from "@/common/IconsSvg";

const BrandFilter = ({ fields, setFields, setCallClearAll, callClearAll }) => {
  const [BrandAndVarient, setBrandAndVarient] = useState([]);
  const [searchQuerry, setSearchQuerry] = useState("");
  const [brandExpanded, setBrandExpanded] = useState(-1);
  const [expandAll, setExpandAll] = useState(false);

  const router = useRouter();

  const fetchCarBrands = async () => {
    const url = "https://crm.unificars.com/api/webbrands";
    const resdata = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    });
    const jsonData = await resdata.json();
    if (jsonData.code == 200) {
      setBrandAndVarient(jsonData.result[0].brand);
    }
  };

  useEffect(() => {
    fetchCarBrands();
  }, []);

  const HandleBrandClick = (e, index) => {
    BrandAndVarient[index] = {
      ...BrandAndVarient[index],
      checked: !BrandAndVarient[index].checked,
    };
    for (let x in BrandAndVarient[index].model) {
      BrandAndVarient[index].model[x][1] = BrandAndVarient[index].checked;
    }
    // console.log(BrandAndVarient)
    setBrandAndVarient([...BrandAndVarient]);
  };

  const HandleModel = (brandIndex, ModelIndex) => {
    BrandAndVarient[brandIndex].model[ModelIndex] = [
      BrandAndVarient[brandIndex].model[ModelIndex][0],
      !BrandAndVarient[brandIndex].model[ModelIndex][1],
    ];
    if (BrandAndVarient[brandIndex].checked == true) {
      BrandAndVarient[brandIndex] = {
        ...BrandAndVarient[brandIndex],
        checked: !BrandAndVarient[brandIndex].checked,
      };
    }
    // console.log(BrandAndVarient)
    setBrandAndVarient([...BrandAndVarient]);
  };

  useEffect(() => {
    let querry = [];
    if (router.query.model) {
      querry = [router.query.model];
    }
    for (let x in BrandAndVarient) {
      for (let y in BrandAndVarient[x].model) {
        if (BrandAndVarient[x].model[y][1] == true) {
          querry.push(BrandAndVarient[x].model[y][0]);
        }
      }
    }
    setFields({ ...fields, model: querry });
  }, [BrandAndVarient, router.query.model]);

  const HandleSearch = (e) => {
    // console.log(e.target.value)
    setSearchQuerry(e.target.value);
    if (e.target.value === "") {
      setExpandAll(false);
    } else {
      setExpandAll(true);
    }
  };

  const handleRemoveSelected = () => {
    setSearchQuerry("");

    setBrandAndVarient((prev) =>
      prev.map((brand) => ({
        ...brand,
        checked: false,
        model: brand.model.map((model) => [model[0], false]),
      }))
    );
    setFields({ ...fields, model: [] });
    setCallClearAll(false);
  };

  useEffect(() => {
    if (callClearAll) {
      handleRemoveSelected();
    }
  }, [callClearAll]);

  return (
    <>
      <Accordion
        className="shadow overflow-hidden"
        defaultExpanded={true}
        style={{ boxShadow: "0px 0px 1px rgb(0 0 0 / 4%)" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header">
          <h6 className="font-semibold font-sans">Make & Model</h6>
        </AccordionSummary>

        {/* <form className='flex gap-1' onSubmit={(e) => HandleSearch(e)}> */}
        <div className="flex items-center outline-[#f38102] border w-full px-2 text-black/70 border-[#e38102] p-1 rounded justify-between">
          <input
            placeholder="Search Cars..."
            onChange={(e) => {
              HandleSearch(e);
            }}
            value={searchQuerry}
            className="outline-none"
          />

          <div
            onClick={handleRemoveSelected}
            className="cursor-pointer border rounded-md">
            <CloseIcon />
          </div>
        </div>

        {/* </form> */}
        <AccordionDetails>
          <div className="max-h-52 overflow-auto">
            {BrandAndVarient && BrandAndVarient.length > 0 ? (
              BrandAndVarient.map((brand, index) => {
                // console.log(brand.model.some(row=>{return row[0].includes("ave")}))
                if (
                  brand.brand_name
                    .toLowerCase()
                    .includes(searchQuerry.toLowerCase()) ||
                  brand.model.some((row) => {
                    return row[0]
                      .toLowerCase()
                      .includes(searchQuerry.toLowerCase());
                  })
                ) {
                  return (
                    <Accordion
                      className="shadow"
                      key={index}
                      expanded={expandAll ? true : brandExpanded == index}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        className="flex justify-center items-center h-4"
                        onClick={() => {
                          setBrandExpanded((pre) => {
                            if (pre == index) {
                              return -1;
                            } else {
                              return index;
                            }
                          });
                          setExpandAll(false);
                        }}>
                        <p className="text-sm font-medium whitespace-nowrap -ml-2">
                          {brand.brand_name}
                        </p>
                      </AccordionSummary>
                      <div className="flex items-center ml-1">
                        <FormControlLabel
                          control={
                            <Checkbox
                              className="ml-1 text-gray"
                              checked={
                                brand.checked && brand.checked == true
                                  ? true
                                  : false
                              }
                              color="warning"
                              onChange={(e) => {
                                HandleBrandClick(e, index);
                              }}
                            />
                          }
                        />
                        <p className="text-[1rem]">Select All</p>
                      </div>
                      <AccordionDetails>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            ml: 1,
                          }}>
                          {brand && brand.model ? (
                            brand.model.map((model, idx) => {
                              if (
                                model[0]
                                  .toLowerCase()
                                  .includes(searchQuerry.toLowerCase())
                              ) {
                                return (
                                  <div
                                    key={idx}
                                    className="flex items-center h-8">
                                    <FormControlLabel
                                      onChange={(e) => {
                                        HandleModel(index, idx);
                                      }}
                                      control={
                                        <Checkbox
                                          checked={
                                            (brand.checked &&
                                              brand.checked == true) ||
                                            (brand.model[idx][1] &&
                                              brand.model[idx][1] == true)
                                              ? true
                                              : false
                                          }
                                          color="warning"
                                        />
                                      }
                                    />{" "}
                                    <p className="whitespace-nowrap text-sm font-light -ml-3 capitalize overflow-hidden">
                                      {model}
                                    </p>
                                  </div>
                                );
                              } else {
                                return <></>;
                              }
                            })
                          ) : (
                            <></>
                          )}
                        </Box>
                      </AccordionDetails>
                    </Accordion>
                  );
                } else {
                  return <></>;
                }
              })
            ) : (
              <></>
            )}
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default BrandFilter;
