import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AskQuestions = () => {
    return (
        <div className='my-6'>
            <div className='text-center items-center flex flex-col mb-8'>
                <h2 className='text-4xl text-[#f38102] my-2'>Frequently Asked Questions</h2>
                <img src='/home/title_line.png' />
            </div>
            <div className='w-10/12 mx-auto'>
                <Accordion className=''>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography className='text-orange-500' >Q. What are the benefits of buying a certified used cars?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography >
                            Buying a certified used car means getting a car that experts have checked, and you will get a good and new car at a lower price. It is more innovative and easy to save money and get a new car.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className=''>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className='text-orange-500'>Q. How many used cars are available to you?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        Our car collection hub has many cars available of different kinds, colors, and sizes. In our car hub, you can easily find the car that suits you and your family.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className=''>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className='text-orange-500'>Q. What are the popular second-hand car brands available you have?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography >
                        We have many second-hand car brands, including Tata Nexon, Nissan, Chevrolet, and many more. These brands have good market value, and most people love to buy that car
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className=''>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className='text-orange-500'>Q. What are the benefits of buying a certified luxury used car?</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='text-sm font-normal'>

                    Buying a certified luxury car has several benefits. First, you will get premium-quality cars at a lower price, and second, your used cars are inspected by our senior car experts to ensure a good car.

                    </AccordionDetails>
                </Accordion>
                <Accordion className=''>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className='text-orange-500'>Q. Is there any specific city in which you can buy a used car?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography >
                        Yes, there are many cities in India where you can get a used car, including, Delhi, Haryana, Uttar Pradesh and Punjab.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className=''>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className='text-orange-500'>Q. How can we safely buy a second-hand car?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography >
                        You can safely buy a second-hand car using various social sites, and for better prices, you have to check the Unifi Cars official website to get the correct fare price that suits you.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className=''>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography className='text-orange-500'>Q. Are there any negotiation features available in old cars?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography >
                        YES, you can negotiate the price, but stop your negotiation on the car's fair value.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default AskQuestions