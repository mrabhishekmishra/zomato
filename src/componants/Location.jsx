import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Location = () => {
  let data = [
    {
      h: "Connaught Place",
      p: "289 Places",
    },
    {
      h: "Sector 29",
      p: "149 Places",
    },
    {
      h: "Sector 18, Noida",
      p: "236 Places",
    },
    {
      h: "Rajouri Garden",
      p: "400 Places",
    },
    {
      h: "Saket",
      p: "289 Places",
    },
    {
      h: "DLF Cyber City",
      p: "190 Places",
    },
    {
      h: "Golf Course Road",
      p: "168 Places",
    },
    {
      h: "DLF Phase 4",
      p: "239 Places",
    },
    {
      h: "Delhi University-GTB Nagar",
      p: "197 Places",
    },
    {
      h: "Indirapuram",
      p: "869 Places",
    },
    {
      h: "Vasant Kunj",
      p: "354 Places",
    },
    {
      h: "Greater Kailash 1 (GK1)",
      p: "111 Places",
    },
    {
      h: "Chanakyapuri",
      p: "117 Places",
    },
    {
      h: "Rohini",
      p: "1346 Places",
    },
    {
      h: "Janpath",
      p: "58 Places",
    },
    {
      h: "Hauz Khas Village",
      p: "57 Places",
    },
    {
      h: "Sector 38, Noida",
      p: "92 Places",
    },
    {
      h: "Janakpuri",
      p: "495 Places",
    },
    {
      h: "Sector 50",
      p: "219 Places",
    },
    {
      h: "MG Road",
      p: "200 Places",
    },
    {
      h: "DLF Phase 3",
      p: "457 Places",
    },
    {
      h: "Punjabi Bagh",
      p: "226 Places",
    },
    {
      h: "Netaji Subhash Place",
      p: "138 Places",
    },
    {
      h: "Malviya Nagar",
      p: "402 Places",
    },
    {
      h: "Khan Market",
      p: "54 Places",
    },
    {
      h: "Karol Bagh",
      p: "372 Places",
    },
    {
      h: "Nehru Place",
      p: "110 Places",
    },
    {
      h: "Sohna Road",
      p: "279 Places",
    },
    {
      h: "SaGreater Kailash 2 (GK2)ket",
      p: "115 Places",
    },

    
  ];
  const[show,useshow]=useState([])
  const [Get,useget]=useState(true)

  let get = ()=>{

  if(Get){

    useshow(data)

  }else{
    useshow(data.slice(0,8))
  }
  }

useEffect(
  ()=>{

    useshow(data.slice(0,8))


  },[]
)

  return (
    <>
      <div className="container mx-auto p-1 ">
        <h1 className="font-bold-700 text-[35px]">
          Popular localities in and around{" "}
          <span className="font-bold"> Delhi NCR</span>
        </h1>

        <div className="my-10  justify-between ">
          <div className="grid grid-cols-3 gap-3">
            {show.map((v, i) => {
              return (
                <>
                  <div className="border border-1 p-2 rounded-sm flex justify-between items-center cursor-pointer">
                    <div>
                   <h1>{v.h}</h1>
                   <p>{v.p}</p>
                    </div>
                    <div>
                    <MdOutlineKeyboardArrowRight />
                    </div>
                  </div>
                </>
              );
            })}
            <div className="border border-1 p-1 rounded-sm flex items-center justify-center cursor-pointer" onClick={get}>{ get ? ('show more') : ( 'Hide')}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
