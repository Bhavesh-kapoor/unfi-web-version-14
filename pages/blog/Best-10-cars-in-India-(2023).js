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
          src="../blogs/b17.png"
        />
      </div>
      <div>
        <div className="text-gray-600 text-sm">
          <h1 className="text-4xl text-[#003d79] my-4">
            Best 10 cars in India (2023)
          </h1>
        </div>
        <div className="blogdetailpara mt-3">
          <p>
            As we all know that day by day automobiles market are increased and
            most of the people focus on entering in the market of cars and
            joining in the car market is their primary choice. There are many
            brands which we know that are belongs from international market but
            now most of them car manufactures try to make car in India and try
            to promote their brand in India.
          </p>
          <h1 className="text-xl text-[#003d79] my-4">
            Which one is best launches in 2023
          </h1>
          <p className="my-3">
            There are so many car launches in year 2023 with their innovative
            and advanced technology. Some Companies just like Maruti Suzuki,
            Hyundai, Mahindra, BMW, Tata, Mahindra etc. launches their new
            models with upgrading their technology.
          </p>

          <p className="my-3">
            <p className="text-2xl">Which one is right one for us: </p>
            <br />
            Still so many people confused in car buying process. This blog helps
            you to finds the right car according to your needs. Some best models
            of 2023 are :
          </p>

          <ol>
            <li>1. Mahindra XUV700</li>
            <li>2. Tata Nexon</li>
            <li>3. Mahindra Scorpio</li>
            <li>4. Mahindra Thar</li>
            <li>5. Mahindra Brezza</li>
            <li>6. Volkswagen Virtus</li>
            <li>7. Tata Tiago</li>
            <li>8. Tata Harrier</li>
            <li>9. Hyundai Verna</li>
            <li>10. Maruti Suzuki Jimny</li>
          </ol>

          <br />
          <h2 className="text-2xl">Lets help you to find right car for you.</h2>
          {/* <p>Are there any benefits of buying a used car?</p> */}

          <ol class="">
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold text-xl">1. Mahindra XUV700 : </span> In
                upper blog we were talked about made cars in India and Mahindra
                XUV700 continues their grip in the car market. Based on a brand
                monocoque platform this model is 80% stiffer than XUV500. New
                Mahindra XUV700 is offered with a premium and upmarket cabin
                with extensive features list.
              </p>
              <p>Key Specifications are:</p>
              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell></TableCell>
                      <TableCell align="left">
                        <p className="text-white font-bold text-lg">
                          Mahindra XUV700
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
                        Engine
                      </TableCell>
                      <TableCell align="left">
                        2.0L TGDi Petrol, 2.2L CRDi Diesel
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
                        Maximum Power
                      </TableCell>
                      <TableCell align="left">
                        197 bhp (Petrol), 152 bhp (Diesel), 182 bhp (Diesel)
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
                        Peak Torque
                      </TableCell>
                      <TableCell align="left">
                        380 Nm (Petrol), 360 Nm (Diesel), 420 Nm (Diesel MT),
                        450 Nm (Diesel AT)
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Transmission
                      </TableCell>
                      <TableCell align="left">
                        6-Speed Manual, 6-Speed Automatic
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Efficiency
                      </TableCell>
                      <TableCell align="left">Not Available</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Tank
                      </TableCell>
                      <TableCell align="left">60L</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell>What's Good</TableCell>
                      <TableCell align="left">What's Bad</TableCell>
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
                        Feature rich and premium cabin
                      </TableCell>
                      <TableCell align="left">
                        Less boot space and small seat area in last row.
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
                        Strong road presence
                      </TableCell>
                      <TableCell align="left">
                        After sales support may be hit or mess.
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
                        Power packed performance
                      </TableCell>
                      <TableCell align="left">Poor fuel economy</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </li>
            <br />

            <li class="mb-2">
              <p>
                <span class="font-bold text-xl">2. Tata Nexon : </span>Tata
                Nexon is also one of the few cars in market that scores perfects
                and ratings. Nexon is also known for its quality and safety
                equipment list. Tata Nexon offers both type of fuels options- 2L
                Revotron turbo petrol and 1.5L Revotorq diesel. While the petrol
                engine delivers a peak power and torque output of 118 bhp and
                170 Nm respectively, the diesel on the other hand boasts a
                maximum power output of 113 bhp and 260 Nm of maximum torque.
                Both these engines are offered with either a 5-speed manual or
                an AMT gearbox.
              </p>
              <p>Key Specifications are:</p>
              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell></TableCell>
                      <TableCell align="left">
                        <p className="text-white font-bold text-lg">
                          Tata Nexon
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
                        Engine
                      </TableCell>
                      <TableCell align="left">
                        1.2 L turbo Revotron, 1.5 L turbo Revotron Diesel
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
                        Maximum Power
                      </TableCell>
                      <TableCell align="left">118bhp, 113 bhp</TableCell>
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
                        Peak Torque
                      </TableCell>
                      <TableCell align="left">170nm, 260nm</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Transmission
                      </TableCell>
                      <TableCell align="left">
                        5- speed manual, 5- speed AMT
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Efficiency
                      </TableCell>
                      <TableCell align="left">
                        17.33 km/l (P MT), 17.05 km/l (P AT); 23.22 km/l (D MT),
                        24.07 km/l D AT)
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Tank
                      </TableCell>
                      <TableCell align="left">44L</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell>What's Good</TableCell>
                      <TableCell align="left">What's Bad</TableCell>
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
                        Powerful and fuel efficient options
                      </TableCell>
                      <TableCell align="left">AMT is slow</TableCell>
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
                        Comfortable Cabin
                      </TableCell>
                      <TableCell align="left">Work on finish levels.</TableCell>
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
                        5 star safety rating
                      </TableCell>
                      <TableCell align="left">
                        Some features are missing
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </li>

            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold text-xl">3. Mahindra Scorpio : </span>
                Mahindra Scorpio is one of the most popular names in Indian
                market on the launch of new Scorpio N in the market, the Indian
                SUV offers reliability and strong performance and this time it
                is more comfortable than before. SUV is made in India with dual
                fuel options, Diesel and Petrol. While petrol is only offered
                with a RWD drive train as standard, diesel is also offered with
                an AWD addition to standard RWD. SUV is offered both manual and
                auto gearboxes making it a great choice for anyone looking for
                capable car.
              </p>
              <p>Key Specifications are:</p>
              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell></TableCell>
                      <TableCell align="left">
                        <p className="text-white font-bold text-lg">
                          Mahindra Scorpio
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
                        Engine
                      </TableCell>
                      <TableCell align="left">
                        2.0 L TGDi Petrol, 2.2L CRDi Diesel
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
                        Maximum Power
                      </TableCell>
                      <TableCell align="left">
                        200 bhp (petrol), 130 bhp(diesel),172 bhp (Diesel)
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
                        Peak Torque
                      </TableCell>
                      <TableCell align="left">
                        370 Nm (P MT), 380 Nm (P AT), 300 Nm (D MT), 370 Nm (D
                        MT), 400 Nm (D AT)
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Transmission
                      </TableCell>
                      <TableCell align="left">
                        6-Speed Manual, 6-Speed Automatic
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Efficiency
                      </TableCell>
                      <TableCell align="left">
                        Fuel Efficiency 14.44 km/l (D)
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Tank
                      </TableCell>
                      <TableCell align="left">57L</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell>What's Good</TableCell>
                      <TableCell align="left">What's Bad</TableCell>
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
                        Muscular Styling
                      </TableCell>
                      <TableCell align="left">Poor distribution</TableCell>
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
                        Practical feature rich cabin
                      </TableCell>
                      <TableCell align="left">Not great fuel economy</TableCell>
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
                        Robust ladder on frame construction
                      </TableCell>
                      <TableCell align="left">
                        6-seater only available in top spec variant.
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </li>

            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold text-xl">4. Mahindra Thar : </span>The
                Mahindra thar, is the cheapest 4X4 SUV in the country and loved
                for its muscular styling that helps in command a strong road
                presence. Thar is offered a 150 bhp, 2.0L TGDI turbo petrol
                motor or a 130 bhp, 2.2L CRDi mHawk engine. Both engines are
                offered with a 4X4 drivetrain as standard and can be coupled
                with either a manual or an automatic gearbox.
              </p>
              <p>Key Specifications are:</p>
              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell></TableCell>
                      <TableCell align="left">
                        <p className="text-white font-bold text-lg">
                          Mahindra Thar
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
                        Engine
                      </TableCell>
                      <TableCell align="left">
                        2.0L TGDi Petrol, 1.5L CRDe Diesel, 2.2L CRDi Diesel
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
                        Maximum Power
                      </TableCell>
                      <TableCell align="left">
                        150 bhp (Petrol), 117 bhp (Diesel), 130 bhp (Diesel)
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
                        Peak Torque
                      </TableCell>
                      <TableCell align="left">
                        300 Nm (P MT), 320 Nm (P AT), 300 Nm (D)
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Transmission
                      </TableCell>
                      <TableCell align="left">
                        6-Speed Manual, 6-Speed Automatic
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Efficiency
                      </TableCell>
                      <TableCell align="left">15.2 km/l (D)</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Tank
                      </TableCell>
                      <TableCell align="left">57L</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell>What's Good</TableCell>
                      <TableCell align="left">What's Bad</TableCell>
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
                        Attractive Performance
                      </TableCell>
                      <TableCell align="left">No diesel options</TableCell>
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
                        Elegant styling
                      </TableCell>
                      <TableCell align="left">Interior is not good</TableCell>
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
                        Comfortable
                      </TableCell>
                      <TableCell align="left">
                        Not so great after sales support
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </li>

            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold text-xl">
                  5. Maruti Suzuki Brezza :{" "}
                </span>
                The Maruti Suzuki Breeza is the is the most demanded in 2023 and
                offers a non-sense package for the buyers who looking reliable
                and feature rich car. The present generation of the breeza only
                gets a smart boxy styling and appreciated for its comfort
                features.
              </p>
              <p>Key Specifications are:</p>
              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell></TableCell>
                      <TableCell align="left">
                        <p className="text-white font-bold text-lg">
                          Maruti Suzuki Breeza
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
                        Engine
                      </TableCell>
                      <TableCell align="left">1.5L K15 C</TableCell>
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
                        Maximum Power
                      </TableCell>
                      <TableCell align="left">
                        101 bhp (petrol), 87 bhp (CNG)
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
                        Peak Torque
                      </TableCell>
                      <TableCell align="left">
                        136 Nm (Petrol), 121 Nm (CNG)
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Transmission
                      </TableCell>
                      <TableCell align="left">5-Speed MT, 6-Speed AT</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Efficiency
                      </TableCell>
                      <TableCell align="left">
                        Fuel Efficiency 17.38 km/l (P MT), 19.80 km/l (P AT),
                        25.51 km/kg (CNG)
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Tank
                      </TableCell>
                      <TableCell align="left">
                        48L (Petrol), 55L (CNG)
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell>What's Good</TableCell>
                      <TableCell align="left">What's Bad</TableCell>
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
                        Reliable and efficient options
                      </TableCell>
                      <TableCell align="left">No diesel options</TableCell>
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
                        Dependable after sales support
                      </TableCell>
                      <TableCell align="left">
                        Automatic variants command
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
                        Attractive exterior styling
                      </TableCell>
                      <TableCell align="left">
                        Some features are missing
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </li>

            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold text-xl">6. Volkswagen Virtus : </span>
                The The Volkswagen Virtus not only boast powerful and refined
                engine options, the features are also elegant and timeless
                styling which is appreciate by some buyers. This is the first
                car who scores 5-star ratings.
              </p>
              <p>Key Specifications are:</p>
              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell></TableCell>
                      <TableCell align="left">
                        <p className="text-white font-bold text-lg">
                          Volkswagen Virtus
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
                        Engine
                      </TableCell>
                      <TableCell align="left">1.0L TSI, 1.5L TSI</TableCell>
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
                        Maximum Power
                      </TableCell>
                      <TableCell align="left">114 bhp, 147 bhp</TableCell>
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
                        Peak Torque
                      </TableCell>
                      <TableCell align="left">178 Nm, 250 Nm</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Transmission
                      </TableCell>
                      <TableCell align="left">
                        6-Speed MT, 6-Speed AT, 7-Speed DSG
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Efficiency
                      </TableCell>
                      <TableCell align="left">
                        20.08 km/l (1L P MT), 18.45 km/l (1L P AT), 18.88 km/l
                        (1.5L P MT), 19.62 km/l (1.5L P AT)
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Tank
                      </TableCell>
                      <TableCell align="left">45L</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell>What's Good</TableCell>
                      <TableCell align="left">What's Bad</TableCell>
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
                        Reliable and efficient options
                      </TableCell>
                      <TableCell align="left">No diesel options</TableCell>
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
                        Dependable after sales support
                      </TableCell>
                      <TableCell align="left">
                        Automatic variants command
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
                        Attractive exterior styling
                      </TableCell>
                      <TableCell align="left">
                        Some features are missing
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </li>

            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold text-xl">7. Tata Tiago : </span>The Tata
                Tiago is the cheapest tata car in India, the Tata Tiago comes in
                multiple features.
              </p>
              <p>Key Specifications are:</p>
              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell></TableCell>
                      <TableCell align="left">
                        <p className="text-white font-bold text-lg">
                          Tata Tiago
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
                        Engine
                      </TableCell>
                      <TableCell align="left">1.2L Revotron</TableCell>
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
                        Maximum Power
                      </TableCell>
                      <TableCell align="left">1.2L Revotron</TableCell>
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
                        Peak Torque
                      </TableCell>
                      <TableCell align="left">
                        113 Nm (Petrol), 95 Nm (CNG)
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Transmission
                      </TableCell>
                      <TableCell align="left">
                        5-Speed Manual, 5-Speed AMT
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Efficiency
                      </TableCell>
                      <TableCell align="left">
                        20.01 km/l (P MT), 19.43 km/l (P AT); 26.49 km/kg (CNG)
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Tank
                      </TableCell>
                      <TableCell align="left">
                        35L (Petrol), 60L (CNG)
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell>What's Good</TableCell>
                      <TableCell align="left">What's Bad</TableCell>
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
                        Excellent Quality
                      </TableCell>
                      <TableCell align="left">Jerky AMT gear box</TableCell>
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
                        Comfortable cabin
                      </TableCell>
                      <TableCell align="left">
                        Unreliable sales support
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
                        High speed Stability
                      </TableCell>
                      <TableCell align="left"></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </li>

            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold text-xl">8. Tata Harier : </span>The Tata
                Harrier is one of the strongest opponents in Indian Market and
                bold for its styling and designing with features. Tata Harrier
                is the same 2.0L turbo diesel engine which we also get with
                other SUVs like the Hector and the Compass. This engine delivers
                167 bhp and 350 Nm of maximum torque. The buyers can either opt
                for a 6-speed manual or a Hyundai-sourced 6-speed AT gearbox
                with this engine.
              </p>
              <p>Key Specifications are:</p>
              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell></TableCell>
                      <TableCell align="left">
                        <p className="text-white font-bold text-lg">
                          Tata Harrier
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
                        Engine
                      </TableCell>
                      <TableCell align="left">
                        2.0L Kryotec Turbo Diesel
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
                        Maximum Power
                      </TableCell>
                      <TableCell align="left">167 bhp</TableCell>
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
                        Peak Torque
                      </TableCell>
                      <TableCell align="left">350 Nm</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Transmission
                      </TableCell>
                      <TableCell align="left">6-Speed MT, 6-Speed AT</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Efficiency
                      </TableCell>
                      <TableCell align="left">
                        16.35 km/l (D MT), 14.6 km/l (D AT)
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Tank
                      </TableCell>
                      <TableCell align="left">50L</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell>What's Good</TableCell>
                      <TableCell align="left">What's Bad</TableCell>
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
                        Feature rich Cabin
                      </TableCell>
                      <TableCell align="left">Only diesel</TableCell>
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
                        Bold exterior quality
                      </TableCell>
                      <TableCell align="left">Not fit finish levels</TableCell>
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
                        Good Performance
                      </TableCell>
                      <TableCell align="left">
                        Laggy infotainment screen
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </li>

            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold text-xl">9. Hyundai Verna : </span>
                Hyundai Verna always a featured rich and powerful and
                comfortable. This latest generation car gives the best setting
                experience, better power train options. the new Verna is now
                offered with an all-new 147 bhp, 1.5L TGDi turbo petrol engine
                in addition to the 1.5L naturally aspirated engine. Both these
                engines not only offer impressive performance but in addition to
                this are always loved for their smoothness and refinement
                levels. Needless to say, both manual as well as automatic
                gearbox options are on offer for buyers.
              </p>
              <p>Key Specifications are:</p>
              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell></TableCell>
                      <TableCell align="left">
                        <p className="text-white font-bold text-lg">
                          Hyundai Verna
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
                        Engine
                      </TableCell>
                      <TableCell align="left">
                        1.5L NA MPi Petrol, 1.5L TGDi Turbo Petrol
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
                        Maximum Power
                      </TableCell>
                      <TableCell align="left">113 bhp, 157 bhp</TableCell>
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
                        Peak Torque
                      </TableCell>
                      <TableCell align="left">143.8 Nm, 253 Nm</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Transmission
                      </TableCell>
                      <TableCell align="left">
                        6-Speed MT, IVT, 7-Speed DCT
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Efficiency
                      </TableCell>
                      <TableCell align="left">
                        18.60 km/l (P MT), 19.60 km/l (P IVT), 20 km/l (TGDI P
                        MT), 20.60 km/l (TGDI P AT)
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Tank
                      </TableCell>
                      <TableCell align="left">45L</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell>What's Good</TableCell>
                      <TableCell align="left">What's Bad</TableCell>
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
                        All Rounder product
                      </TableCell>
                      <TableCell align="left">No options of diesel</TableCell>
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
                        Premium cabin
                      </TableCell>
                      <TableCell align="left">
                        People don’t like the cabins{" "}
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
                        7 years extended warranty
                      </TableCell>
                      <TableCell align="left"></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </li>

            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold text-xl">
                  10. Maruti Suzuki Jimmy :{" "}
                </span>
                Maruti Suzuki Jimny made in India version of the SUV made its
                debut with the five-color layout. Jimny is always appreciated
                for its legendary off roading capabilities and robust mechanical
                setup which ensures you can take it anywhere without any issues.
                Maruti Suzuki jimny is only petrol offered car, this 1.5L K15B
                motor delivers a claimed power output of 103 bhp and 134 Nm of
                maximum torque. This motor is offered with either a 5-speed
                manual or a 6-speed AT gearbox.
              </p>
              <p>Key Specifications are:</p>
              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell></TableCell>
                      <TableCell align="left">
                        <p className="text-white font-bold text-lg">
                          Maruti Suzuki Jimmy
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
                        Engine
                      </TableCell>
                      <TableCell align="left">1.5L K15B</TableCell>
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
                        Maximum Power
                      </TableCell>
                      <TableCell align="left">103 bhp</TableCell>
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
                        Peak Torque
                      </TableCell>
                      <TableCell align="left">134.2 Nm (Petrol)</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Transmission
                      </TableCell>
                      <TableCell align="left">5-Speed MT, 6-Speed AT</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Efficiency
                      </TableCell>
                      <TableCell align="left">
                        16.94 km/l (P MT), 16.39 km/l (P AT)
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell component="th" scope="row">
                        Fuel Tank
                      </TableCell>
                      <TableCell align="left">40L</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <br />
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{ backgroundColor: "#607274" }}
                      className="font-bold text-[white]"
                    >
                      <TableCell>What's Good</TableCell>
                      <TableCell align="left">What's Bad</TableCell>
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
                        Retro modern styling looks attractive
                      </TableCell>
                      <TableCell align="left">Not great performance</TableCell>
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
                        Capable hardware
                      </TableCell>
                      <TableCell align="left">Speed is slow</TableCell>
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
                        Extensive features and safety equipment
                      </TableCell>
                      <TableCell align="left">
                        Small dimensions don’t give premier looks
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </li>
          </ol>

          <br />
          <p>
            There are so many cars launches in India in 2023 but only 10 cars
            ranked in top 10. There are so many cars made in India but most of
            the people is still confused which car is good for their family. The
            cars like the Harrier, XUV700, and Verna appeal to those looking for
            a premium package with an up-market cabin and powerful powertrain
            options. The newly introduced Mahindra Scorpio-N and the Maruti
            Jimny dominate their segments with robust, capable, and practical
            packages, thus enjoying strong demand. But most of the car made in
            India are comfortable cabins, the looks are also amazing. In all,
            most of these Indian-origin cars have come a long way and are
            dominating the global cars and practical package.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintainPreownedCar;
