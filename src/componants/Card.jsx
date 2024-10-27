
import { IoMdArrowDropright } from "react-icons/io";
import React from "react";

function Cardmini(props) {
  return (
    <>
      <div className=" w-[350px] h-[220px] mx-auto relative rounded-[10px] border-2  cursor-pointer my-10 hover:scale-100">
        <img
          className="w-[100%] h-[90%] rounded-[10px]"
          src={props.img}
          alt=""
        />
        <div className="bg-[white] absolute w-[100%] p-2 bottom-0">
          <h3 className="font-[500]  text-[20px]">{props.h1}</h3>
          <p className="text-[#939393] text-[18px]">{props.p}</p>
        </div>
      </div>
    </>
  );
}

const Card = (props) => {
  return (
    <>
      <div className=" relative cursor-pointer ">
        <div className="w-[280px] h-[350px] rounded-xl ">
          <img src={props.img} className="w-[100%] h-[100%] rounded-md" />
          <div className="text-center text-xl font-sans font-bold text-white absolute  top-[75%] left-[30px] p-1">
            <h2>Top Trending Spots</h2>
            <p className="flex items-center]">
              40 places <IoMdArrowDropright className="text-[35px]" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};



export { Card, };

export default Cardmini;

