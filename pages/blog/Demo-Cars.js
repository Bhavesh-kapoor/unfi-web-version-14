import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MaintainPreownedCar = () => {
  return (
    <div className="w-11/12 mx-auto py-4">
      <div>
        <img
          className="object-contain w-full lg:h-[100vh]"
          src="../blogs/b16.png"
        />
      </div>
      <div>
        <div className="text-gray-600 text-sm">
          <h1 className="text-4xl text-[#003d79] my-4">Demo Cars</h1>
        </div>
        <div className="blogdetailpara mt-3">
          <p>
            Demo cars and preowned cars are trending in the market of auto
            mobiles. Everyone was thinking that used cars are not in condition
            to buy it again but these cars are best option for those who want to
            buy a car but their budget is tight and the car is necessary for
            them. This blog gives you a detailed explanation of a preowned car
            and clear your thinking regarding to preowned car.
          </p>

          <p className="my-3">
            <p className="text-2xl">
              <p className="text-2xl">What are Preowned cars? </p>{" "}
            </p>
            Preowned vehicles are those vehicles who are previously owned by
            someone and now they are thinking to sell it again, in simple words
            preowned cars are usually called as “used cars”.
          </p>

          <p className="my-3">
            <p className="text-2xl">Which one is right for us </p>
            <br />
            Most of the people thinking and still confused in a car buying
            process. As we all knew that car is the investment so, we have to
            think clearly before buying a car. Let’s make it easy your car
            searching process.
          </p>
          <br />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{ backgroundColor: "#607274" }}
                  className="font-bold text-[white]"
                >
                  <TableCell>
                    {" "}
                    <p className="text-white font-bold text-lg">New Car</p>
                  </TableCell>
                  <TableCell align="left">
                    <p className="text-white font-bold text-lg">
                      Pre-owned car
                    </p>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
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
                    Latest features and technology
                  </TableCell>
                  <TableCell align="left">
                    Get modern features but not latest
                  </TableCell>
                </TableRow>

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
                    Warranty coverage
                  </TableCell>
                  <TableCell align="left">Cost savings</TableCell>
                </TableRow>
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
                    Customization options
                  </TableCell>
                  <TableCell align="left">Wider options available</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">
                    Advance fuel efficiency
                  </TableCell>
                  <TableCell align="left">
                    Fuel efficiency is less than new
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">
                    No previous owner history
                  </TableCell>
                  <TableCell align="left">Secured ownership history</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">
                    Long term ownership
                  </TableCell>
                  <TableCell align="left">Long term investment</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell component="th" scope="row">
                    Paying car fees
                  </TableCell>
                  <TableCell align="left">Less car fees</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <br />
          <h2 className="text-2xl">
            Is it difficult or easy to buy a used car
          </h2>
          <p>
            Car buying is easy but sometimes first-time car buying users still
            confused which one is right for us. You have to think and research
            properly before car buying here are some simple steps that helps you
            to clear doubts in your car buying journey
          </p>
          <p>
            Here are some tips that you will keep in your mind while buying a
            preowned car:
          </p>
          <ol class="">
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">1. Budget:</span> Budget is the most
                important role player in the process of car buying because
                increasing of car price day by day can empty your bank balance.
                So, if you try to buy a car firstly focus on your budget and
                searching according to your needs, and remember to consider the
                additional cost of the car just like maintenance, insurance and
                registration
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">2. Research and needs : </span> Car
                buying is not difficult as you think but firstly you have to
                research what kind of car is good for you and your family, and
                for that you have to get the detailed research according to your
                needs and do not try to stuck on a single car company search the
                various company prices cars according to your budget.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">
                  3. Right market place for your car :{" "}
                </span>{" "}
                Car price is an important part for you to buy a car and each
                company has their own price so you have to find that one price
                for your car. Start searching on various companies’ price and
                choose the price according to your price and for better you have
                to write down the prices on a single paper for checking again.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">4. Comparing Prices : </span> Comparing
                price is must before buying a car but in comparing process don’t
                forget to think about the history of the car. After finalizing
                the perfect car for you Don’t, forget to check their history.
                Comparing is must also because every company shows their own
                price so it depends on you from which company you buy your car.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">5. Inspect the car : </span> Before
                finalizing the car try to inspect the car and check the each and
                every thing properly and try to coordinate with company for
                arranging a test drive for checking the condition of the car.
              </p>
            </li>
            <br />
          </ol>

          <br />
          <p className="text-2xl">
            Is there easy or difficult to buy a preowned car
          </p>

          <ol class="">
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">1. Search for cacr model:</span> Before
                buying a car make sure you completely search the car model and
                their specifications with the model year.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">2. Visit and search dealership : </span>{" "}
                Buying a cat is the great choice and before buying a car search
                and clear all the doubts related to car buy and choose the best
                dealership price and compare the prices of all the dealers, and
                don’t forget to choose certified dealers to buy a car.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">
                  3. Enquiry car model availability:{" "}
                </span>{" "}
                : First check the availability of the model you are thinking of
                buying and enquire it with the various dealers.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">4. Check vehicle history : </span>Before
                buying a car request dealer to give the vehicle history and
                check the maintenance or repairs of the car.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">
                  5. Examine the condition and take test drive :{" "}
                </span>{" "}
                Examine the car at each and every corner and side of the car and
                try to focus on dents, scratches and interior damage.
              </p>
            </li>
            <br />

            <li class="mb-2">
              <p>
                <span class="font-bold">6. Verify the warranty: </span> Before
                buying the car confirms and verify the warranty period of the
                car and covers all the potential issue.
              </p>
            </li>
            <li class="mb-2">
              <p>
                <span class="font-bold">7. Negotiate the price: </span> Before
                Confirming the car negotiate the price and make sure the price
                is reasonable and according to the cars condition but make sure
                do not down the too much price of the car.
              </p>
            </li>
            <br />
          </ol>

          <p>
            We know that everyone in the world has different choice and it
            depends on our opinion whether we want a pre-owned car or a new one.
            Here we are sharing some advantages and disadvantages of preowned
            cars to clear your view regarding the preowned car.
          </p>
          <br />
          <p className="text-2xl">Advantages of Preowned cars:</p>
          <br />
          <ol class="">
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">1. Price difference:</span> : Preowned
                cars price is less than the price of new car and it’s a good
                option for those whose budget is less.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">2. Warranty coverage : </span> Every car
                has the warranty period before buying a preowned car check the
                warranty period of the car and some benefits that are left in a
                car time period.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">3. Fully Equipped: </span> Many of the
                cars are fully equipped and in a good condition so check it
                before buying the car.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">4. Immediate ownership : </span>When the
                new car launches and we have to wait for the car and for the
                premium cars you have to pay the amount as well but in preowned
                cars the situation the situation is different you don’t have to
                wait for the car. When you pay amount, you can take the car with
                us.
              </p>
            </li>
            <br />
          </ol>

          <br />
          <p className="text-2xl">Disadvantages of Preowned cars:</p>
          <br />
          <ol class="">
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">1. Limited Model Choice : </span> In
                preowned cars the models are limited and some models are also
                lined up.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">2. Wear and tear condition : </span>{" "}
                Some cars are in condition of dents, scratches. So, check it
                properly while buying a car.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">3. Old Models: </span> Sometimes cars
                are in old models compared to new launches are different.
              </p>
            </li>
          </ol>
          <br />
          <p>
            In the world of demo car India offers various opportunities to
            buyers. As we all know preowned cars are budget friendly, feature
            packed. In advantages, there are many benefits just like immediate
            ownership. Just for your decision demo cars provide an enticing
            gateway to owning a high-quality car. So, as you draw a blueprint of
            your car-buying journey, consider the demo car option—it might just
            be the smartest move you make on the road to ownership.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintainPreownedCar;
