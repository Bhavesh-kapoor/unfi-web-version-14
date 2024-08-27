import Link from "next/link";
import AddCard from "./AddCard";

const BlogGrid = () => {
  const blogImages = [
    {
      image: "b9.jpg",
      head: "Fuel efficient cars in India 2023",
      date: "June 14 ",
    },
    {
      image: "b10.png",
      head: "Get Top 10 cars for beginners here",
      date: "June 20 ",
    },
    {
      image: "b11.png",
      head: "Honda amaze vs Maruti Suzuki Dzire",
      date: "June 23 ",
    },
    {
      image: "b6.avif",
      head: "Check Car Segments Of India",
      date: "May 28 ",
    },
    {
      image: "b7.jpg",
      head: "Baleno - A Mid-Budget Family Car",
      date: "June 28    ",
    },
    {
      image: "b8.jpg",
      head: "BEST HATCHBACKS IN INDIA",
      date: "June 08 ",
    },
  ];
  {
    return (
      <div className="flex grid grid-cols-3 gap-4">
        <div className="col-span-2 grid grid-cols-3 gap-4 border-2 p-2 border-gray-200">
          {blogImages.map((e, index) => {
            return (
              <div className="col-span-1">
                <div key={index} className="bg-blue-50/50 rounded shadow">
                  <div className="h-44">
                    <img src={`./blogs/${e.image}`} className="h-full w-full" />
                  </div>
                  <div className="my-2 p-4 px-2">
                    <Link
                      href={`/blog/${e.head.split(" ").join("-")}`}
                      className="text-2xl text-blue-950"
                    >
                      {e.head}
                    </Link>
                    <div className="flex justify-between items-center my-2">
                      <p className="text-sm text-gray-500">Team Unifi Cars</p>
                      <p className="text-sm text-gray-500">{e.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="gap-4 col-span-1 w-full h-full flex items-center justify-center grid grid-rows-2">
         <div className="h-full w-full row-span-1 ">
          <AddCard title={"Explore, Choose, Drive"} imageLink={"/Nexon.png"} subheading={"Start your journey and pick your dream car."} buttonText={"Buy Here"} tagline={"Where are you?"}/>
         </div>
         <div className="p-2 h-full w-full row-span-1">
         <AddCard title={"Search, Sell, Succeed"} imageLink={"/i20Car.png"} subheading={"Start exploring and sell successfully"} buttonText={"Sell Here"} tagline={"Where are you?"}/>
         </div>
        </div>
      </div>
    );
  }
};

export default BlogGrid;
