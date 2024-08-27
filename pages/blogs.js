import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await axios.get(
        "https://crm.unificars.com/api/bloggs/all"
      );

      const data = await response.data;

      setBlogs(data.data);
    };
    fetchBlogs();
  }, []);

  return (
    <main>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Blogs" />
      </Head>
      <div className="w-full relative">
        <img
          src="/background/blogbanner.png"
          className="h-72 object-cover md:w-full md:h-auto"
        />
        <div className="absolute top-0 flex-col gap-4 text-white h-full flex justify-center items-center w-full text-center">
          <p className="tracking-widest text-sm p-2">
            YOU WON'T JUST LOVE OUR CARS, YOU'LL LOVE THE WAY YOU BUY THEM.
          </p>
          <p className="text-4xl">Welcome To Unifi Car Blogs</p>
          <img src="/home/title_line.png" />
        </div>
      </div>

      <div className="mt-24">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-blue-950 my-2">LATEST BLOGS</h1>
          <img src="/home/title_line.png" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-11/12 mx-auto my-12 gap-8 ">
        {blogs &&
          blogs?.map((e, index) => {
            return (
              <div
                key={index}
                className="bg-blue-50/50 overflow-hidden shadow hover:shadow-lg transition-all duration-200 ease-in-out rounded-xl"
              >
                <Link
                  href={`/blog/${e.slug}`}
                  className="text-2xl text-blue-950"
                >
                  <div className="h-44">
                    <img
                      src={e.image}
                      alt={e.heading}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="my-2 p-4 px-2">
                    {e.heading}
                    <div className="flex justify-between items-center my-2">
                      <p className="text-sm text-gray-500">Team Unifi Cars</p>
                      <p className="text-sm text-gray-500">{e.date}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </main>
  );
};

export default blog;
