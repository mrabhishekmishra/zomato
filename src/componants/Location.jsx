import React from "react";

const Location = () => {
  let data = [
    {
      h: "Connaught Place",
      p: "289 Places",
    },
    {
      h: "Connaught Place",
      p: "289 Places",
    },
    {
      h: "Connaught Place",
      p: "289 Places",
    },
    {
      h: "Connaught Place",
      p: "289 Places",
    },
    {
      h: "Connaught Place",
      p: "289 Places",
    },
    {
      h: "Connaught Place",
      p: "289 Places",
    },
    {
      h: "Connaught Place",
      p: "289 Places",
    },
    {
      h: "Connaught Place",
      p: "289 Places",
    },
  ];
  return (
    <>
      <div className="container mx-auto p-1 ">
        <h1 className="font-bold-700 text-[35px]">
          Popular localities in and around{" "}
          <span className="font-bold"> Delhi NCR</span>
        </h1>

        <div className="my-10  justify-between ">
            {
              data.map(
                (v,i)=>{
                    console.log(v)
                }
              )
            }
          <div className="grid grid-cols-3 gap-3">
            <div className="border border-1 p-1 rounded-sm">hello</div>
            <div className="border border-1 p-1 rounded-sm">hello</div>
            <div className="border border-1 p-1 rounded-sm">hello</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
