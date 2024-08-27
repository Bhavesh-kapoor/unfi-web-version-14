import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';

export default function BasicAccordion() {
  return (
    <div className='bg-white py-8 my-6'>
      <div className='w-5/6 mx-auto text-xl'>
        <h3 className='text-4xl text-blue-900 my-4'>Frequently Asked Questions</h3>
        <Accordion className=''>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Q. How many second hand cars are available in New Delhi?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              9 used cars are available in New Delhi of popular brands like Maruti Suzuki, Hyundai,
              Honda, Volkwagan, Tata, Mahindra, Kia, Renault, Nissan & more.

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className=''>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Q What are the most popular brands available for 2nd hand cars in New Delhi? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Unifi Cars has a wide inventory of all brands including Maruti Suzuki, Hyundai, Honda &
              more. Find the best second hand car in New Delhi of your choice on Unifi Cars.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className=''>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Q What will be the starting price of an old car in New Delhi? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The starting price of a used car in New Delhi is Rs. ₹1,00,000 at Unifi Cars.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className=''>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Q What body types are available for 2nd hand cars in New Delhi?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Used cars in New Delhi are available from every segment, be it Hatchback, Sedan, SUV.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className=''>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Q Can I buy used cars online at Unifi Cars in New Delhi? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Of Course yes, you can buy used cars online in New Delhi from Unifi Cars. You can find
              thousands of quality second hand cars for sale on our website/app that can be bought
              at the click of a button & delivered to your doorstep anywhere in New Delhi.

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className=''>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Q What to check before buying a second hand car in New Delhi? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography className='pb-2'>Important things to check before buying a second hand car in New Delhi are:</Typography>
              <Typography> ● Source: Buying a car from a trusted source is important to make sure the car is in
                the exact condition as stated & also to deal with any post sale related issues.</Typography>
              <Typography> ● Condition: Ensure the car is non-accidental & does not have any structural
                damage. We use a 150 point check to make sure every car we sell is in top
                condition.</Typography>
              <Typography> ● Age: Buying a used car that is very old can lead to problems like expensive
                maintenance costs and scarcity of spare parts. A three to five year old car should
                be an ideal buy,</Typography>
              <Typography> ● Car Documents: Verification of vehicle documents like Registration Certificate
                (RC), Insurance & PUC is very important. Also ensure the car is not under loan
                (hypothecated), there are no traffic challans or any legal issues with it.</Typography>
              <Typography> ● Certified or Not: Certified used cars come with warranty and are refurbished to as
                good as new to protect buyers from unforeseen repair & maintenance cost.</Typography>

            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className=''>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Q Where can I buy used cars in New Delhi?  </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can buy used cars in New Delhi from Unifi Cars. Visit our website, book the car of
              your choice & get it.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}



{/* <div class="text-center">



</button>
</h2>
</div>
<div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
<div class="card-body">

</div>
</div>
</div>
<div class="faq-card card">
<div class="card-header" id="headingFive">
<h2 class="mb-0">
<button class="faqbtn btn btn-link btn-block text-left d-block position-relative collapsible-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">

</button>
</h2>
</div>
<div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample" style="">
<div class="card-body">

</div>
</div>
</div>
</div>
<div>
<button class="btn"><a class=" text-light" href="https://api.unificars.com/contact"> Connect with Us</a></button>
</div>
</div> */}