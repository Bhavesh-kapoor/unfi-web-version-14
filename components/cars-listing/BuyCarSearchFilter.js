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

const BuyCarSearchFilter = (props) => {
  const { setCarListing, setLoading, filterUrl } = props;
  const [value, setValue] = useState([100000, 4000000]);
  // use for filters
  const [fields, setFields] = useState({
    min_price: 100000,
    max_price: 4000000,
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
      value: 4000000,
      label: "MAX",
    },
  ]);

  // const HandleSlider = async (e) => {
  //   const range = e.target.value;
  //   if (range[0] < range[1] - 100000 && range[1] > range[0] + 100000) {
  //     setValue(range);
  //   }
  // };

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
    setValue([100000, 4000000]);

    setFields({
      min_price: 100000,
      max_price: 4000000,
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
      <div className="p-2">
        <div className="flex justify-between gap-2">
          <h6>Filters</h6>
          <button
            className="text-sm cursor-pointer border-orange-500 border text-orange-500 hover:text-white hover:bg-orange-500 py-1 px-2 rounded-lg"
            onClick={handleClearAll}>
            Clear All
          </button>
        </div>

        {/* applied filter  */}
        <div className="flex gap-2 flex-wrap mt-2">
          {value[0] !== 100000 ||
            (value[1] !== 4000000 ? (
              <div className="text-xs bg-gray-200 rounded p-2 flex items-center gap-1">
                {value[0].toLocaleString("en-IN")} -{" "}
                {value[1].toLocaleString("en-IN")}
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setValue([100000, 4000000]);
                    setFields({
                      ...fields,
                      min_price: 100000,
                      max_price: 4000000,
                    });
                  }}>
                  <CloseIcon />
                </div>
              </div>
            ) : null)}

          {fields.owner && (
            <div className="text-xs bg-gray-200 rounded p-2 flex items-center gap-1">
              Ownership: {fields.owner}
              <div
                className="cursor-pointer"
                onClick={() => setFields({ ...fields, owner: "" })}>
                <CloseIcon />
              </div>
            </div>
          )}

          {fields.km && (
            <div className="text-xs bg-gray-200 rounded p-2 flex items-center gap-1">
              {fields.km}
              <div
                className="cursor-pointer"
                onClick={() => setFields({ ...fields, km: "" })}>
                <CloseIcon />
              </div>
            </div>
          )}

          {fields.year && (
            <div className="text-xs bg-gray-200 rounded p-2 flex items-center gap-1">
              {fields.year}
              <div
                className="cursor-pointer"
                onClick={() => setFields({ ...fields, year: "" })}>
                <CloseIcon />
              </div>
            </div>
          )}

          {fields.type && (
            <div className="text-xs bg-gray-200 rounded p-2 flex items-center gap-1">
              {fields.type}
              <div
                className="cursor-pointer"
                onClick={() => setFields({ ...fields, type: "" })}>
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

        <div className="text-sm">
          {/* budget */}
          <Accordion
            className=""
            defaultExpanded={true}
            style={{ boxShadow: "0px 0px 1px rgb(0 0 0 / 4%)" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <h6 className="text-sm font-semibold font-sans">₹ Budget</h6>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <div className="justify-between flex items-center">
                  <h2 className="text-xs bg-black/50 text-white/100 p-1 rounded-md font-sans">
                    ₹ {value[0].toLocaleString("en-IN")}
                  </h2>
                  <h2 className="text-xs bg-black/50	text-white/100 p-1 rounded-md font-sans">
                    ₹ {value[1].toLocaleString("en-IN")}
                  </h2>
                </div>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }}>
                  <Slider
                    value={value}
                    step={100000} // Increase step size for faster sliding
                    valueLabelDisplay="auto"
                    marks={marks}
                    onChange={(e, newValue) => {
                      setValue(newValue); // Update state immediately on change
                    }}
                    color="warning"
                    min={100000}
                    max={2500000}
                    onChangeCommitted={HandleSiderValueChanged} // When slider interaction ends
                    size="medium"
                  />
                </Stack>
              </div>
            </AccordionDetails>
          </Accordion>

          {/* ownership */}
          <Accordion
            className=" shadow"
            defaultExpanded={false}
            style={{ boxShadow: "0px 0px 1px rgb(0 0 0 / 4%)" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <h6 className="text-sm font-semibold">Ownership</h6>
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
                    fontSize: "14px !important",
                    fontFamily: "sans-serif",
                  },
                }}>
                <FormControlLabel
                  value="1"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.owner == "1"}
                    />
                  }
                  label="1st Owner"
                />
                <FormControlLabel
                  value="2"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.owner == "2"}
                    />
                  }
                  label="2nd Owner"
                />
                <FormControlLabel
                  value="3"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.owner == "3"}
                    />
                  }
                  label="3rd Owner"
                />
                <FormControlLabel
                  value="4"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.owner == "4"}
                    />
                  }
                  label="4th Owner"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>

          {/* year */}
          <Accordion
            className=" shadow"
            defaultExpanded={false}
            style={{ boxShadow: "0px 0px 1px rgb(0 0 0 / 4%)" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <h6 className="text-sm font-semibold">Year</h6>
            </AccordionSummary>
            <AccordionDetails className="overflow-y-scroll max-h-52">
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="year"
                onChange={(e) => {
                  HandleFilters(e);
                }}
                sx={{
                  ".MuiFormControlLabel-label": {
                    fontSize: "14px !important",
                    fontFamily: "sans-serif",
                  },
                }}>
                <FormControlLabel
                  value="2022"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2022"}
                    />
                  }
                  label="2022"
                />
                <FormControlLabel
                  value="2021"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2021"}
                    />
                  }
                  label="2021"
                />
                <FormControlLabel
                  value="2020"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2020"}
                    />
                  }
                  label="2020"
                />
                <FormControlLabel
                  value="2019"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2019"}
                    />
                  }
                  label="2019"
                />
                <FormControlLabel
                  value="2018"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2018"}
                    />
                  }
                  label="2018"
                />
                <FormControlLabel
                  value="2017"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2017"}
                    />
                  }
                  label="2017"
                />
                <FormControlLabel
                  value="2016"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2016"}
                    />
                  }
                  label="2016"
                />
                <FormControlLabel
                  value="2015"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2015"}
                    />
                  }
                  label="2015"
                />
                <FormControlLabel
                  value="2014"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2014"}
                    />
                  }
                  label="2014"
                />
                <FormControlLabel
                  value="2013"
                  control={
                    <Radio
                      size="small"
                      color="warning"
                      checked={fields.year == "2013"}
                    />
                  }
                  label="2013"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>

          {/* km driven */}
          <Accordion
            className=" shadow"
            defaultExpanded={false}
            style={{ boxShadow: "0px 0px 1px rgb(0 0 0 / 4%)" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <h6 className="text-sm font-semibold">KM Driven</h6>
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
                    fontSize: "14px !important",
                    fontFamily: "sans-serif",
                  },
                }}>
                <FormControlLabel
                  value="below 10000"
                  control={
                    <Radio
                      size="small"
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
                      size="small"
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
                      size="small"
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
                      size="small"
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
                      size="small"
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
                      size="small"
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
                      size="small"
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
            className=" shadow"
            defaultExpanded={false}
            style={{ boxShadow: "0px 0px 1px rgb(0 0 0 / 4%)" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <h6 className="text-sm font-semibold font-sans">Fuel Type</h6>
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
                    fontSize: "14px !important",
                    fontFamily: "sans-serif",
                  },
                }}>
                <FormControlLabel
                  value="petrol"
                  control={
                    <Radio
                      size="small"
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
                      size="small"
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
                      size="small"
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
                      size="small"
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
