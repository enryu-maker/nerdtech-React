import React from "react";
import { Helmet } from "react-helmet";

const Count = () => {
  const data = [
    { title: "Clients", desc: "100+" },
    { title: "Products Build", desc: "20" },
    { title: "Hours of Code", desc: "10K" },
  ]
  return (
    <>
      <Helmet>

        <meta charSet="utf-8" />
        <title>NerdTech :: Web Development and Mobile Applications Development Agency</title>
        <description>
          Explore the strength of our community! Join the [Your Software Company] family, where our success is measured by the growing number of satisfied customers. Learn about our customer count, testimonies, and how businesses are benefiting from our innovative software solutions.
        </description>
      </Helmet>
      <div className=" flex justify-evenly  items-center px-8 max-md:px-10 py-5  w-[450px] h-[100px] max-md:w-full max-md:gap-4  bg-white rounded-xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        {data.map((data) => (
          <span className="flex flex-col justify-center items-center">
            <h2 className="text-2xl max-md:text-xl font-bold text-[#f5e40b]"> {data.desc}</h2>
            <p className=" text-center text-sm max-md:text-xs text-black">{data.title}</p>
          </span>
        ))}
      </div>
    </>

  );
};

export default Count;
