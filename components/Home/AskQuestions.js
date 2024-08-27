import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AskQuestions = () => {
  return (
    <div className="my-6">
      <div className="text-center items-center flex flex-col mb-8">
        <h2 className="text-4xl text-[#f38102] my-2">
          Frequently Asked Questions
        </h2>
        <img src="/home/title_line.png" />
      </div>
      <div className="w-10/12 mx-auto">
        <Accordion className="">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography className="text-orange-500">
              Q. Does it offer Home inspection as well?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, Most cities have access to it. Please use the convenience of
              your home to arrange an inspection. We'll come over at a time that
              works for you, look over the vehicle, negotiate the best deal for
              you, and move things along. Please plan a home inspection visit at
              Unifi Cars or get in touch with us at www.unificars.com.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header">
            <Typography className="text-orange-500">
              Q. Should I make an appointment in advance?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              In case there might be a wait, we advise you to reserve a time
              slot. Visit www.unificars.com, choose the specifics of your
              vehicle, and schedule an appointment Choose the Request a Home
              Inspection option. You can also call us at www.unificars.com and
              speak to a representative to reserve a space. You are now ready!
              We will examine the vehicle, negotiate the best deal for you, and
              move forward!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header">
            <Typography className="text-orange-500">
              Q. What is car testing?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              In addition to gaining knowledge about the automobile's overall
              condition, the main goal of a car evaluation is to make it
              possible to generate a price quote for the assessed car from the
              market.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header">
            <Typography className="text-orange-500">
              Q. What are the perks of selling your car to Unifi Cars?
            </Typography>
          </AccordionSummary>
          <AccordionDetails className="text-sm font-normal">
            It's a fact that each used automobile is unique, and it's also true
            that not everyone is aware of the extensive paperwork required for a
            car transfer. Include the hassle of visiting various dealers,
            learning the procedure, and then wishing that your choice to sell
            the automobile at a particular price to a particular dealership was
            the right one. Therefore, we are attempting to simplify life. We
            provide the following:
            <ol className="font-normal">
              <li className="font-normal">
                • Visit us once, and we'll give you the best offer we could find
                by simultaneously auctioning off your car via several channels
                throughout India. No fuss of waiting around for many bidders to
                arrive or gathering estimates from various purchasers over the
                course of days
              </li>
              <li className="font-normal">
                • Alternatively, choose Home Inspection, and we will come to
                your door to inspect the vehicle without you having to visit us
                even once.
              </li>
              <li className="font-normal">
                • The best prices: We've been working hard in this business for
                years and have gathered information from all over the nation
                from different sources, including our network of channel{" "}
              </li>
              <li className="font-normal">
                • There is no waiting to receive your money. Without charging
                extra, we provide one of the industry's quickest money
                transfers. The majority of our clients get their money the same
                day! Selling a car requires extensive documentation, possibly
                involving many trips to the RTO, and is not like selling a
                typical transportable item. The most fundamental of these is RC
                transfer.
              </li>
            </ol>
          </AccordionDetails>
        </Accordion>
        <Accordion className="">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header">
            <Typography className="text-orange-500">
              Q. What are the accurate timings?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Typically, our branches are open from 10 am to 6:30 pm.
              Additionally, certain branches observe various weekly off-day
              schedules. You may view the opening and closing times of the
              particular branch while making appointments on the Internet.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default AskQuestions;
