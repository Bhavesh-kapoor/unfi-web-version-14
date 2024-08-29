import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AddAPhoto } from "@mui/icons-material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Checkbox from "@mui/material/Checkbox";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";

const BuyCarSearchFilter = (props) => {
  const { setCarListing, setLoading } = props;
  const [value, setValue] = useState([100000, 10000000]);
  const [fields, setFields] = useState({ owner: "", year: "", km: "" });

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
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

  const HandleSlider = async (e) => {
    const range = e.target.value;
    if (range[0] < range[1] - 100000 && range[1] > range[0] + 100000) {
      setValue(range);
    }
  };
  const HandleSiderValueChanged = async () => {
    const data = {
      min_price: value[0],
      max_price: value[1],
      owner: fields.owner,
      year: fields.year,
      km: fields.km,
    };
    const url = `https://crm.unificars.com/api/filtersassuredsidebar`;
    setLoading(true);
    const resdata = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
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

  const HandleFilters = async (e) => {
    const { name } = e.target;
    const filterValue = e.target.value;
    const filterData = { ...fields, [name]: filterValue };
    setFields(filterData);
    const data = {
      min_price: value[0],
      max_price: value[1],
      ...filterData,
    };
    // console.log(data, "filtrData")
    const url = `https://crm.unificars.com/api/filtersassuredsidebar`;
    setLoading(true);
    const resdata = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });
    const jsonData = await resdata.json();
    // console.log(jsonData, "jsonData")
    if (jsonData.code == 200) {
      setLoading(false);
      setCarListing(jsonData.data.auction);
    }
  };

  return (
    <>
      <div className="p-4">
        <div>
          <Accordion className="my-2 shadow" defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header">
              <h6 className=" font-semibold">Price</h6>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <div className="justify-between flex">
                  <h2 className="text-xs">{value[0]}</h2>
                  <h2 className="text-xs">{value[1]}</h2>
                </div>
                <Stack spacing={2} direction="row" sx={{ mb: 1 }}>
                  <Slider
                    value={value}
                    step={25000}
                    marks={marks}
                    onChange={(e) => {
                      HandleSlider(e);
                    }}
                    color="warning"
                    min={100000}
                    onChangeCommitted={HandleSiderValueChanged}
                    max={10000000}
                    size="small"
                  />
                </Stack>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion className="my-2 shadow" defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <h6 className=" font-semibold">Ownership</h6>
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="owner"
                onChange={(e) => {
                  HandleFilters(e);
                }}>
                <FormControlLabel
                  value="1"
                  control={<Radio size="small" color="warning" />}
                  label="1st Owner"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio size="small" color="warning" />}
                  label="2nd Owner"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio size="small" color="warning" />}
                  label="3rd Owner"
                />
                <FormControlLabel
                  value="4"
                  control={<Radio size="small" color="warning" />}
                  label="4th Owner"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion className="my-2 shadow" defaultExpanded={true}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <h6 className=" font-semibold">Year</h6>
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="year"
                className="grid grid-cols-2 gap-6 md:gap-2"
                onChange={(e) => {
                  HandleFilters(e);
                }}>
                <FormControlLabel
                  value="2022"
                  control={<Radio size="small" color="warning" />}
                  label="2022"
                />
                <FormControlLabel
                  value="2021"
                  control={<Radio size="small" color="warning" />}
                  label="2021"
                />
                <FormControlLabel
                  value="2020"
                  control={<Radio size="small" color="warning" />}
                  label="2020"
                />
                <FormControlLabel
                  value="2019"
                  control={<Radio size="small" color="warning" />}
                  label="2019"
                />
                <FormControlLabel
                  value="2018"
                  control={<Radio size="small" color="warning" />}
                  label="2018"
                />
                <FormControlLabel
                  value="2017"
                  control={<Radio size="small" color="warning" />}
                  label="2017"
                />
                <FormControlLabel
                  value="2016"
                  control={<Radio size="small" color="warning" />}
                  label="2016"
                />
                <FormControlLabel
                  value="2015"
                  control={<Radio size="small" color="warning" />}
                  label="2015"
                />
                <FormControlLabel
                  value="2014"
                  control={<Radio size="small" color="warning" />}
                  label="2014"
                />
                <FormControlLabel
                  value="2013"
                  control={<Radio size="small" color="warning" />}
                  label="2013"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion className="my-2 shadow">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <h6 className=" font-semibold">KM Driven</h6>
            </AccordionSummary>
            <AccordionDetails>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="km"
                onChange={(e) => {
                  console.log(e.target.value);
                }}>
                <FormControlLabel
                  value="4000"
                  control={<Radio size="small" color="warning" />}
                  label="4000 and less"
                />
                <FormControlLabel
                  value="5000"
                  control={<Radio size="small" color="warning" />}
                  label="5000 and less"
                />
                <FormControlLabel
                  value="6000"
                  control={<Radio size="small" color="warning" />}
                  label="6000 and less"
                />
                <FormControlLabel
                  value="7000"
                  control={<Radio size="small" color="warning" />}
                  label="7000 and less"
                />
                <FormControlLabel
                  value="8000"
                  control={<Radio size="small" color="warning" />}
                  label="8000 and less"
                />
              </RadioGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion className="my-2 shadow">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <h6 className=" font-semibold">Fuel Type</h6>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="fuelType"
                onChange={(e) => {
                  console.log(e.target.value);
                }}>
                <FormControlLabel
                  value="petrol"
                  control={<Checkbox size="small" color="warning" />}
                  label="Petrol"
                />
                <FormControlLabel
                  value="diesel"
                  control={<Checkbox size="small" color="warning" />}
                  label="Diesel"
                />
                <FormControlLabel
                  value="cng"
                  control={<Checkbox size="small" color="warning" />}
                  label="CNG"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
          <Accordion className="my-2 shadow">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <h6 className=" font-semibold">Popular Brands</h6>
            </AccordionSummary>
            <AccordionDetails>
              <FormGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="fuelType"
                onChange={(e) => {
                  console.log(e.target.value);
                }}>
                <FormControlLabel
                  value="Maruti"
                  control={<Checkbox size="small" color="warning" />}
                  label="Maruti"
                />
                <FormControlLabel
                  value="Hyundai"
                  control={<Checkbox size="small" color="warning" />}
                  label="Hyundai"
                />
                <FormControlLabel
                  value="Honda"
                  control={<Checkbox size="small" color="warning" />}
                  label="Honda"
                />
                <FormControlLabel
                  value="Toyota"
                  control={<Checkbox size="small" color="warning" />}
                  label="Toyota"
                />
                <FormControlLabel
                  value="Mahindra"
                  control={<Checkbox size="small" color="warning" />}
                  label="Mahindra"
                />
                <FormControlLabel
                  value="Tata"
                  control={<Checkbox size="small" color="warning" />}
                  label="Tata"
                />
              </FormGroup>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default BuyCarSearchFilter;
