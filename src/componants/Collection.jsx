import React from "react";
import { Card } from "./Card";
import Top from "../assets/images/top.avif";
import Best from "../assets/images/best places.avif";
import New from "../assets/images/newopenplace.avif";
import { IoMdArrowDropright } from "react-icons/io";

const Collection = () => {
  return (
    <>
      <div className="container mx-auto px-10 py-10  ">
        <h1 className="text-[35px] font-bold-800">Collections</h1>
        <span className="flex justify-between items-center">
          <p className="text-[20px] py-5">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </p>
          <p className="text-[red] flex items-center">
            All collection in Delhi NCR  <IoMdArrowDropright className=" cursor-pointer " />
          </p>
        </span>
        <div className="flex justify-start gap-5 ">
          <Card img={Top} h="Top Trending Spots" p="40 places" />
          <Card img={Best} h="Best Insta-worthy Places" p="45 places" />
          <Card img={New} h="Newly Opened Place" p="30 places" />
        </div>
      </div>
    </>
  );
};

export default Collection;
