import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { HomeFaqData } from "@/common/faqData";

const HomeQuestions = ({ faqData }) => {
  const [expanded, setExpanded] = useState({});

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [panel]: isExpanded ? panel : false,
    }));
  };

  const panels = faqData || HomeFaqData;

  // JSON-LD structured data for FAQ
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: panels.map((panel, index) => ({
      "@type": "Question",
      name: panel.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: panel.details,
      },
    })),
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schemaData);

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [schemaData]);

  return (
    <div className="my-12 md:flex">
      <div className="w-full md:w-5/12 mx-auto">
        <div className="text-center items-center flex flex-col">
          <h2 className="text-4xl text-[#000] my-2 text-left font-black sellheadfont">
            Common <br />
            Questions
          </h2>
        </div>
      </div>
      <div className="w-full md:w-7/12 mx-auto">
        {panels.map((panel) => (
          <Accordion
            key={panel.panel}
            className="md:w-4/5"
            expanded={expanded[panel.panel]}
            onChange={handleAccordionChange(panel.panel)}
            style={{ boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={expanded[panel.panel] ? <RemoveIcon /> : <AddIcon />}
              aria-controls={`${panel.panel}a-content`}
              id={`${panel.panel}a-header`}>
              <Typography
                className={`${
                  expanded[panel.panel] ? "text-orange-500" : "text-black"
                } font-bold text-xl font-sans`}>
                <span className="font-sans">{panel.title}</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="text-sm changehomwq font-sans">
                <span className="font-sans">{panel.details}</span>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default HomeQuestions;
