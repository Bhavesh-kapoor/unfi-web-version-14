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
          src="../blogs/b18.png"
        />
      </div>
      <div>
        <div className="text-gray-600 text-sm">
          <h1 className="text-4xl text-[#003d79] my-4">
            Decoding car Chassis: Types, Advantages and disadvantages.
          </h1>
        </div>
        <div className="blogdetailpara mt-3">
          <p>
            Exploring the journey of cars through auto mobiles intricacy, now we
            are exploring the amazing topic in car journey that is “CAR
            CHASSIS”. In this Blog we will learn about car chassis and explore
            the different types of car chassis and we will tell the journey and
            difference between ladder frame chassis and auto motive frames. Most
            of them listen this name for the first time or most of them listen
            but didn’t try to focus on it.
          </p>
          <p className="my-3">
            What is Car Chassis? A car chassis is a frame work of a vehicle,
            that attached in a system engine, transmission, suspension system,
            steering mechanism and body. Chassis plays a crucial role in the car
            integrity, stability and strength to the overall vehicle. The car
            chassis is typically constructed using the material like steel,
            aluminum and it depending on the model of car. It designs varies
            among different cars models with primary types just like ladder
            frame, backbone, space frame chassis and monocoque.
          </p>

          <p className="my-3">
            <br />
            <p className="text-2xl">
              Is buying a preowned car is a right choice?{" "}
            </p>
            <br />
            Of course, “YES” preowned car is the best option for those whose
            budget is tight but car becomes the necessary part of their life or
            for those whose dream to buy a car. So, don’t take tension your one
            stop solution is Unifi cars for buying or selling your car at your
            doorstep by just spending 30 minutes. The car chassis no. is the
            unique vehicle identification no. just like the biography of the car
            but the matter is Car Chassis no. is important or not? Car chassis
            no. is the unique 17-digit no. and this 17-digit no. tell you
            everything just like car model, manufacturer year. This no. plays a
            more important purpose identification and records a car history.
          </p>

          <br />
          <h2 className="text-2xl">Components of car Chassis</h2>
          <p>
            The car chassis is a complex yet essential assembly that includes
            various components working together to ensure your vehicle
            stability, safety and performance. It is a crucial component for car
            owners as it highlights on your vehicle inner working model that
            ensures a safe and comfortable ride in diverse road conditions.
          </p>

          <ol class="">
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">1. Frame :</span> The chassis’
                foundation, supporting the entire vehicle. The chosen frame type
                affects how sturdy the vehicle is (e.g., body-on-frame,
                monocoque).
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">2. Suspension System : </span> Manages
                ride comfort and stability by using components like shock
                absorbers, struts, and springs to absorb shocks from the road.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">3. Axles :</span> Connects wheels to the
                chassis, distributing weight and transferring power from the
                engine. Vehicles may have front, rear, or all-wheel-drive
                setups.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">4. Steering System:</span> Allows the
                driver to control the vehicle's direction. Power steering
                enhances maneuverability and includes components like the
                steering column and gearbox.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">5. Brake System :</span> Responsible for
                slowing down and stopping the vehicle using components such as
                brake calipers, rotors, and brake pads. Anti-lock Brake Systems
                (ABS) enhance safety.
              </p>
            </li>
            <br />
            <li class="mb-2">
              <p>
                <span class="font-bold">6. Wheels and Tires :</span> Crucial for
                traction, handling, and overall performance. Different tire
                types and sizes suit various driving conditions.
              </p>
            </li>
            <br />
            <li>
              <p>
                <span class="font-bold">7. Chassis Bushings :</span> Act as
                isolators between chassis components, reducing vibrations and
                ensuring a smoother ride. They contribute to comfort and
                durability.
              </p>
            </li>

            <br />
            <li>
              <p>
                <span class="font-bold">7. Chassis Monuts :</span> Secure
                components like the engine and transmission to the frame,
                preventing excess movement and maintaining stability. Proper
                mounting is essential for balanced performance
              </p>
            </li>
          </ol>

          <br />
          <p className="text-2xl">
            What are the advantages and disadvantages of car chassis
          </p>
          <br />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow
                  sx={{ backgroundColor: "#607274" }}
                  className="font-bold text-[white]"
                >
                  <TableCell>Name</TableCell>
                  <TableCell align="left">Advantages</TableCell>
                  <TableCell align="left">Disadvantages</TableCell>
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
                    Ladder Frame Chassis
                  </TableCell>
                  <TableCell align="left">
                    <ol>
                      <li>1. They carry heavy loads</li>
                      <li>
                        2. This is good for SUV’s and Trucks and off-road
                        vehicles.
                      </li>
                    </ol>
                  </TableCell>
                  <TableCell align="left">
                    <ol>
                      <li>1. Reduce stability during high speed.</li>
                      <li>
                        2. These kinds of vehicles have limited space for
                        passengers.
                      </li>
                    </ol>
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
                    Monocoque Chassis
                  </TableCell>
                  <TableCell align="left">
                    <ol>
                      <li>
                        1. They are light weight and enhancing fuel efficiency{" "}
                      </li>
                      <li>2. Suitable for all passengers.</li>
                    </ol>
                  </TableCell>
                  <TableCell align="left">
                    <ol>
                      <li>1. Monocoque chassis are results costly..</li>
                      <li>
                      2. They have limited capacity compared to ladder frames, with the limiting heavy-duty applications.
                      </li>
                    </ol>
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
                    Back bone Chassis
                  </TableCell>
                  <TableCell align="left">
                    <ol>
                      <li>
                        1.	Backbone chassis contributing to balance and handling stability on the road.
                      </li>
                      <li>2.	These designs allow to easier access to vehicle components.</li>
                    </ol>
                  </TableCell>
                  <TableCell align="left">
                    <ol>
                      <li>1.	Backbone chassis are common in India, which can make finding repair.</li>
                      <li>
                      2.	Backbone chassis might not be best for heavy high vehicles.
                      </li>
                    </ol>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <br />
          <p>
            In this blog we will learn about car chassis and how important car
            chassis is the car life. Car chassis is just like the back bone of
            the car which is mandatory in our vehicles. The world of car chassis
            is a fascinating blend of innovation and engineering prowess. Each
            chassis type, from the robust ladder frame to the sophisticated
            monocoque, brings a unique set of advantages and challenges to the
            table. As automotive technology continues to advance, the evolution
            of chassis design plays a pivotal role in shaping the driving
            experience of the future. Whether it's the rugged durability of
            off-road vehicles or the sleek efficiency of modern passenger cars,
            understanding the intricacies of car chassis provides a deeper
            appreciation for the seamless integration of form and function. As
            we navigate the roads ahead, the quest for the ideal chassis
            continues, promising safer, more efficient, and exhilarating
            journeys for every automotive enthusiast.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintainPreownedCar;
