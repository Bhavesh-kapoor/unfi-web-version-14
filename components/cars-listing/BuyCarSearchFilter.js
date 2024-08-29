import React, { useEffect, useState } from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BrandFilter from "./BrandFilter";
import { CloseIcon } from "@/common/IconsSvg";
import { FilterIcon } from "lucide-react";

const BuyCarSearchFilter = (props) => {
  const { setCarListing, setLoading, filterUrl } = props;
  const [value, setValue] = useState([100000, 10000000]);
  // use for filters
  const [fields, setFields] = useState({
    min_price: 100000,
    max_price: 10000000,
    owner: "",
    year: "",
    km: "",
    type: "",
    model: [],
  });

  // const handleChange = (panel) => (event, isExpanded) => {
  //     setExpanded(isExpanded ? panel : false);
  // };

  const [marks, setMarks] = useState([
    {
      value: 200000,
      label: "MIN",
    },
    {
      value: 10000000,
      label: "MAX",
    },
  ]);

  // const HandleSlider = async (e) => {
  //   const range = e.target.value;
  //   if (range[0] < range[1] - 100000 && range[1] > range[0] + 100000) {
  //     setValue(range);
  //   }
  // };

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func.apply(context, args);
      }, wait);
    };
  }

  const fetchFilter = async () => {
    setLoading(true);
    const resdata = await fetch(filterUrl, {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        "Content-type": "application/json",
      },
    });

    const jsonData = await resdata.json();

    if (jsonData.code == 200) {
      setLoading(false);
      setCarListing(jsonData.data.auction);
    }
  };

  useEffect(() => {
    fetchFilter();
  }, [fields]);

  let timeoutId = null;

  const HandleSiderValueChanged = () => {
    if (timeoutId) {
      clearTimeout(timeoutId); // Clear any existing timeout
    }
    // Set a new timeout for 2 seconds to fetch filter results
    timeoutId = setTimeout(() => {
      setFields({ ...fields, min_price: value[0], max_price: value[1] });
    }, 2000);
  };

  const HandleFilters = async (e) => {
    const { name } = e.target;
    const filterValue = e.target.value;
    const filterData = { ...fields, [name]: filterValue };
    setFields(filterData);
  };

  const [callClearAll, setCallClearAll] = useState(false);

  const handleClearAll = () => {
    setValue([100000, 10000000]);

    setFields({
      min_price: 100000,
      max_price: 10000000,
      owner: "",
      year: "",
      km: "",
      type: "",
      model: [],
    });
    setCallClearAll(true);
  };

  return (
    <>
      <div>
        <div className="flex justify-between gap-2">
          <h6 className="text-lg font-semibold inline-flex items-center gap-1 text-gray-500">
            <FilterIcon className="text-gray-500" /> Filter
          </h6>
          <button
            className="text-sm cursor-pointer border-gray-500 border text-gray-500 hover:text-white hover:bg-gray-500 py-1 px-2 rounded-md"
            onClick={handleClearAll}
          >
            Clear All
          </button>
        </div>

        {/* applied filter  */}
        <div className="flex gap-2 flex-wrap mt-2">
          {value[0] !== 100000 ||
            (value[1] !== 10000000 ? (
              <div className="text-xs bg-gray-200 rounded p-2 flex items-center gap-1">
                {value[0].toLocaleString("en-IN")} -{" "}
                {value[1].toLocaleString("en-IN")}
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setValue([100000, 10000000]);
                    setFields({
                      ...fields,
                      min_price: 100000,
                      max_price: 10000000,
                    });
                  }}
                >
                  <CloseIcon />
                </div>
              </div>
            ) : null)}

          {fields.owner && (
            <div className="text-xs bg-gray-200 rounded p-2 flex items-center gap-1">
              Ownership: {fields.owner}
              <div
                className="cursor-pointer"
                onClick={() => setFields({ ...fields, owner: "" })}
              >
                <CloseIcon />
              </div>
            </div>
          )}

          {fields.km && (
            <div className="text-xs bg-gray-200 rounded p-2 flex items-center gap-1">
              {fields.km}
              <div
                className="cursor-pointer"
                onClick={() => setFields({ ...fields, km: "" })}
              >
                <CloseIcon />
              </div>
            </div>
          )}

          {fields.year && (
            <div className="text-xs bg-gray-200 rounded p-2 flex items-center gap-1">
              {fields.year}
              <div
                className="cursor-pointer"
                onClick={() => setFields({ ...fields, year: "" })}
              >
                <CloseIcon />
              </div>
            </div>
          )}

          {fields.type && (
            <div className="text-xs bg-gray-200 rounded p-2 flex items-center gap-1">
              {fields.type}
              <div
                className="cursor-pointer"
                onClick={() => setFields({ ...fields, type: "" })}
              >
                <CloseIcon />
              </div>
            </div>
          )}
        </div>

        {/* brand filter, make and model */}
        <BrandFilter
          setFields={setFields}
          fields={fields}
          setCallClearAll={setCallClearAll}
          callClearAll={callClearAll}
        />

        <div className="text-sm space-y-2 mt-2">
          {/* budget */}
          <Accordion
            className="!rounded-lg"
            defaultExpanded={true}
            style={{ boxShadow: "0px 0px 1px rgb(0 0 0 / 4%)" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <h6 className="font-semibold uppercase font-sans">
                Budget (in ₹)
              </h6>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <div className="justify-between flex items-center pb-2">
                  <h2 className="text-[10px] bg-blue-500 text-white/100 py-px px-2 rounded-[4px] font-sans">
                    ₹ {value[0].toLocaleString("en-IN")}
                  </h2>
                  <h2 className="text-[10px] bg-blue-500	text-white/100 py-px px-2 rounded-[4px] font-sans">
                    ₹ {value[1].toLocaleString("en-IN")}
                  </h2>
                </div>
                <div className="px-6">
                  <Stack spacing={2} direction="row" sx={{ mb: 1 }}>
                    <Slider
                      value={value}
                      step={100000} // Increase step size for faster sliding
                      valueLabelDisplay="auto"
                      marks={marks}
                      onChange={(e, newValue) => {
                        setValue(newValue); // Update state immediately on change
                      }}
                      color="info"
                      min={100000}
                      max={10000000}
                      onChangeCommitted={HandleSiderValueChanged} // When slider interaction ends
                      size="medium"
                    />
                  </Stack>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>

          {/* ownership */}
          <Accordion
            className="shadow rounded-lg"
            defaultExpanded={false}
            style={{ boxShadow: "0px 0px 1px rgb(0 0 0 / 4%)" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h6 className="font-semibold uppercase">Ownership</h6>
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="owner"
                onChange={(e) => {
                  HandleFilters(e);
                }}
                className="text-xs"
                sx={{
                  ".MuiFormControlLabel-label": {
                    fontSize: "16px !important",
                    fontFamily: "sans-serif",
                  },
                }}
              >
                {["1", "2", "3", "4"].map((owner, idx) => {
                  return (
                    <FormControlLabel
                      key={idx}
                      value={owner}
                      control={
                        <Radio
                          size="medium"
                          color="warning"
                          checked={fields.owner == owner}
                        />
                      }
                      label={`${
                        owner === "1"
                          ? "1st"
                          : owner === "2"
                          ? "2nd"
                          : owner === "3"
                          ? "3rd"
                          : "4th"
                      } Owner`}
                    />
                  );
                })}{" "}
              </RadioGroup>
            </AccordionDetails>
          </Accordion>

          {/* year */}
          <Accordion
            className="shadow rounded-lg"
            defaultExpanded={false}
            style={{ boxShadow: "0px 0px 1px rgb(0 0 0 / 4%)" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h6 className="font-semibold uppercase">Year</h6>
            </AccordionSummary>
            <AccordionDetails className="overflow-y-scroll">
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="year"
                onChange={(e) => {
                  HandleFilters(e);
                }}
                sx={{
                  ".MuiFormControlLabel-label": {
                    fontSize: "16px !important",
                    fontFamily: "sans-serif",
                  },
                }}
              >
                {[
                  "2024",
                  "2023",
                  "2022",
                  "2021",
                  "2020",
                  "2019",
                  "2018",
                  "2017",
                  "2016",
                  "2015",
                  "2014",
                  "2013",
                ].map((year) => {
                  return (
                    <FormControlLabel
                      value={year}
                      control={
                        <Radio
                          size="medium"
                          color="warning"
                          checked={fields.year == year}
                        />
                      }
                      label={year}
                    />
                  );
                })}
              </RadioGroup>
            </AccordionDetails>
          </Accordion>

          {/* km driven */}
          <Accordion
            className="rounded-lg shadow"
            defaultExpanded={false}
            style={{ boxShadow: "0px 0px 1px rgb(0 0 0 / 4%)" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h6 className="font-semibold uppercase">KM Driven</h6>
            </AccordionSummary>
            <AccordionDetails className="overflow-y-scroll max-h-52">
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="km"
                onChange={(e) => {
                  HandleFilters(e);
                }}
                sx={{
                  ".MuiFormControlLabel-label": {
                    fontSize: "16px !important",
                    fontFamily: "sans-serif",
                  },
                }}
              >
                <FormControlLabel
                  value="below 10000"
                  control={
                    <Radio
                      size="medium"
                      color="warning"
                      checked={fields.km == "below 10000"}
                    />
                  }
                  label="below 10,000km"
                />
                <FormControlLabel
                  value="10000 - 20000"
                  control={
                    <Radio
                      size="medium"
                      color="warning"
                      checked={fields.km == "10000 - 20000"}
                    />
                  }
                  label="10,000 - 20,000km"
                />
                <FormControlLabel
                  value="20000 - 40000"
                  control={
                    <Radio
                      size="medium"
                      color="warning"
                      checked={fields.km == "20000 - 40000"}
                    />
                  }
                  label="20,000 - 40,000km"
                />
                <FormControlLabel
                  value="40000 - 70000"
                  control={
                    <Radio
                      size="medium"
                      color="warning"
                      checked={fields.km == "40000 - 70000"}
                    />
                  }
                  label="40,000 - 70,000km"
                />
                <FormControlLabel
                  value="70000 - 120000"
                  control={
                    <Radio
                      size="medium"
                      color="warning"
                      checked={fields.km == "70000 - 120000"}
                    />
                  }
                  label="70,000 - 1,20,000km"
                />
                <FormControlLabel
                  value="120000 - 140000"
                  control={
                    <Radio
                      size="medium"
                      color="warning"
                      checked={fields.km == "120000 - 140000"}
                    />
                  }
                  label="1,20,000 - 1,40,000km"
                />
                <FormControlLabel
                  value="above 140000"
                  control={
                    <Radio
                      size="medium"
                      color="warning"
                      checked={fields.km == "above 140000"}
                    />
                  }
                  label="above 1,40,000km"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>

          {/* fule type */}
          <Accordion
            className="rounded-lg shadow"
            defaultExpanded={false}
            style={{ boxShadow: "0px 0px 1px rgb(0 0 0 / 4%)" }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <h6 className="font-semibold uppercase font-sans">Fuel Type</h6>
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="type"
                onChange={(e) => {
                  HandleFilters(e);
                }}
                sx={{
                  ".MuiFormControlLabel-label": {
                    fontSize: "16px !important",
                    fontFamily: "sans-serif",
                  },
                }}
              >
                <FormControlLabel
                  value="petrol"
                  control={
                    <Radio
                      size="medium"
                      color="warning"
                      checked={fields.type == "petrol"}
                    />
                  }
                  label="Petrol"
                />
                <FormControlLabel
                  value="diesel"
                  control={
                    <Radio
                      size="medium"
                      color="warning"
                      checked={fields.type == "diesel"}
                    />
                  }
                  label="Diesel"
                />
                <FormControlLabel
                  value="cng"
                  control={
                    <Radio
                      size="medium"
                      color="warning"
                      checked={fields.type == "cng"}
                    />
                  }
                  label="CNG"
                />
                {/* <FormControlLabel
                  value="petrol_cng"
                  control={
                    <Radio
                      size="medium"
                      color="warning"
                      checked={fields.type == "petrol_cng"}
                    />
                  }
                  label="Petrol + CNG"
                /> */}
              </RadioGroup>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default BuyCarSearchFilter;
