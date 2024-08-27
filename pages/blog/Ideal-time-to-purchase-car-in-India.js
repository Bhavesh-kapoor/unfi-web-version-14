import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MaintainPreownedCar = () => {
  const rows = [
    {
      title: "Price",
      preowned: "The price rate is less than new car.",
      new: "	High price rate",
    },
    {
      title: "Depreciation",
      preowned: "Slower depreciation, less value.",
      new: "Steeper initial depreciation",
    },
    {
      title: "Variety",
      preowned: "Many options available and make your selection easy",
      new: "Limited latest models of current year.",
    },
    {
      title: "Customization",
      preowned: "Modifications and upgradations available",
      new: "Limited customisation options.",
    },
    {
      title: "Reliability",
      preowned: "Certified pre-owned car options.",
      new: "New car generally has less issues..",
    },
    {
      title: "Ownership Cost",
      preowned: "The owner ship cost is less than the new one.",
      new: "The owner ship cost is high.",
    },
    {
      title: "Maintenance",
      preowned: "Certified pre-owned car not need maintenance right now.",
      new: "New car may require less maintenance.",
    },
    {
      title: "Availability",
      preowned: "Waiting for the car launch and pre booking is must.",
      new: "Waiting for the car launch and pre booking is must.",
    },
    {
      title: "Technology",
      preowned: "Get advance features at lower cost.",
      new: "Cutting edge technology in new models.",
    },
    {
      title: "Insurance Rates",
      preowned: "Higher insurance rates for premium cars.",
      new: "Insurance rates are low than new cars",
    },
  ];
  return (
    <div className="w-11/12 mx-auto py-4">
      <div>
        <img
          className="object-contain w-full lg:h-[100vh]"
          src="../blogs/b15.png"
        />
      </div>
      <div>
        <div className="text-gray-600 text-sm">
          <h1 className="text-4xl text-[#003d79] my-4">
            Ideal time to purchase car in India
          </h1>
        </div>
        <div className="blogdetailpara mt-3">
          <p>
            As we all know that car is a significant that requires lot of
            researching and planning before buying. In India there are lots of
            factors like season, festivals and economics condition that plays a
            crucial role on the decision of buyers for buying something just
            like vehicles. So, we have to search the best time to buy something
            just like car. Buying car is not easy as we listen for the
            first-time users, here this blog helps you to buy a car at right
            time for secured your financial savings.
          </p>
          <p className="my-3">
            As we all know that car is a significant that requires lot of
            researching and planning before buying. In India there are lots of
            factors like season, festivals and economics condition that plays a
            crucial role on the decision of buyers for buying something just
            like vehicles. So, we have to search the best time to buy something
            just like car. Buying car is not easy as we listen for the
            first-time users, here this blog helps you to buy a car at right
            time for secured your financial savings.
          </p>
          <p className="text-2xl">Which month is best for buying a car? </p>
            <br />

          <p className="my-3">
           
            Now the question remains same which month is good for buying a car.
            Is car buying good for us in month ending or year ending. Let’s
            explain you in a detailed way that which month is good for buying a
            car.
          </p>

          {/* <br />
          <h2 className="text-2xl">
            Are there any benefits of buying a used car?
          </h2>
          <p>Are there any benefits of buying a used car?</p> */}

          <ol class="">
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">1. January:</span> At the beginning year
                “January” presents the bold opportunity for car buyers and
                dealers are eagerly waiting for the clearing your old stock and
                it was the right time to buy a car because you get the discounts
                as the year end passes recently and most of the buyers seeking
                to buy a previous year’s car model.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">2. February:</span> In month of
                “February” auto mobile expo held in India. In this expo there
                are many new cars launched at the time of expo and at that time
                you will buy the old model’s car on affordable price and in the
                month of February you unveil the new models of cars and get some
                offers.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">3. March:</span> As we all know the
                march is the closing month of financial year, and in the end
                month of year you will get the huge discounts on cars and its
                time to closing the financial years all of them have to complete
                the targets. So, at that time buyers can take the advantages of
                these discounts to find good deals.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">4. April and May:</span> Unifi discounts
                on cars and its time to closing the financial years all of them
                have to complete the targets. So, at that time buyers can take
                the advantages of these discounts to find good deals.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">5. June and July:</span> discounts on
                cars and its time to closing the financial years all of them
                have to complete the targets. So, at that time buyers can take
                the advantages of these discounts to find good deals.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">6. August:</span> August is the month of
                starting festivals. Many of the company introduce and launching
                festival season offers. All the buyers planning their purchase
                and wait for the right time for attractive and greatest deals.
              </p>
            </li>
            <br />
            <li>
              <p>
                <span class="font-bold">7. September and October:</span> The
                beginning of festivals. As we all know that these months are
                full of festivals with lots of celebrations just like Diwali,
                Dusshera. On these days the demands of cars are increasing just
                because of special discounts, exchanged offers and most of the
                people thinking to buy in this month is the symbol of
                prosperity.
              </p>
            </li>

            <br />
            <li>
              <p>
                <span class="font-bold">8. November:</span> In November, buyers
                often hold their purchases and expecting year end offers and
                manufactures plan their clearance sales and making time for
                those looking for clear previous year models.
              </p>
            </li>

            <br />
            <li>
              <p>
                <span class="font-bold">9. December:</span> As the year comes to
                end, dealers make a final push to complete the target. In the
                year end clearance sale offering unbeatable discounts to buyers.
                It is the last chance to buy a car with significant year-end
                savings.
              </p>
            </li>
          </ol>

          <br />
          <div className="text-gray-600 text-sm">
            <h1 className="text-4xl text-[#003d79] my-4">
              Right one for you: New car v/s Preowned car
            </h1>
            <p>
              A question remains same and the story still continued which one is
              best against new car v/s Preowned car. So, we will help you to
              clear your confusion against preowned car or new car by showing
              some factors to make you choice easy between them.
            </p>
          </div>
          <br />
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow
                    sx={{ backgroundColor: "#607274" }}
                    className="font-bold text-[white]"
                  >
                    <TableCell>Factors</TableCell>
                    <TableCell align="left">Preowned cars</TableCell>
                    <TableCell align="left">New Car</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        "&:nth-of-type(odd)": {
                          backgroundColor: "#EEEDEB",
                        },
                        // hide last border
                        "&:last-child td, &:last-child th": {
                          border: 0,
                        },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.title}
                      </TableCell>
                      <TableCell align="left">{row.preowned}</TableCell>
                      <TableCell align="left">{row.new}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <br />
            <p>
              In the field of cars, now you can select and buy a preowned car or
              new car according to your choices. This blog helps you to give the
              right time to buy a car according to each month with their
              benefits. Securing deals with your car choose the right time to
              buy car just like year end sale, festivals time and launching of
              new cars. Buy car in India is when its suits your needs,
              preferences and budget.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintainPreownedCar;
