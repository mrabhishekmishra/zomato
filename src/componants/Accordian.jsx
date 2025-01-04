import React, { useState } from "react";
import Mobail from "../assets/images/mobail.avif";

const Accordian = () => {
  const data = [
    {
      ques: "  Popular Cuisines Near Me",
      ans: "Bakery near me .   Beverages near meBiryani near me .  Burger near meChinese near me .  Coffee near me .  Continental near me .  Desserts near me .  Italian near me .  Mithai near me .  Momos near me .  Mughlai near me .  North Indian near me .  Pasta near me .  Pizza near me .  Rolls near me .  Sandwich near me .  Shake near me .  South Indian near me Street near me",

    },
    {
      ques: "  Popular Restaurant Types Near me",
      ans: "Bakeries near me . Bars near me . Beverage Shops near me . Bhojanalya near me . Cafés near me . Casual Dining near me . Clubs near me . Cocktail Bars near me . Confectioneries near me . Dessert Parlors near me . Dhabas near me . Fine Dining near me . Food Courts near me . Food Trucks near me . Irani Cafes near me . Kiosks near me . Lounges near me . Microbreweries near me . Paan Shop near me . Pizzerias near me . Pubs near me . Quick Bites near me . Sweet Shops near me",
    },
    {
      ques: " Top Restaurant Chains",
      ans: "Bakery near me .   Beverages near meBiryani near me .  Burger near meChinese near me .  Coffee near me .  Continental near me .  Desserts near me .  Italian near me .  Mithai near me .  Momos near me .  Mughlai near me .  North Indian near me .  Pasta near me .  Pizza near me .  Rolls near me .  Sandwich near me .  Shake near me .  South Indian near me Street near me",
    },
    {
      ques: "  Popular Cuisines Near Me",
      ans: "Bakery near me .   Beverages near meBiryani near me .  Burger near meChinese near me .  Coffee near me .  Continental near me .  Desserts near me .  Italian near me .  Mithai near me .  Momos near me .  Mughlai near me .  North Indian near me .  Pasta near me .  Pizza near me .  Rolls near me .  Sandwich near me .  Shake near me .  South Indian near me Street near me",
    },
  ];
  let [showvalue, usevalue] = useState("");
  let show = (id) => {
    console.log(id);
    if (!(id === showvalue)) {
      usevalue(id);
    } else {
      console.log("match");
      usevalue("");
    }
  };
  return (
    <>
      <div className="container   mx-auto">
        <h1 className="text-[32px] my-2 ">Explore options near me</h1>
        <div className="accordian  ">
          {data.map((v, i) => {
            console.log(v.ques);
            return (
              <>
                <div className="accordian_div p-2  my-5  rounded-md ">
                  <div
                    className="question w-[100%] text-[23px] cursor-pointer p-3  text-[#282828]"
                    onClick={() => show(i)}
                  >
                    {v.ques}
                  </div>
                  <div
                    className={`answer p-3 text-[20px] text-[#747171] ${
                      showvalue === "" || !(showvalue == i) ? `hidden` : "block"
                    }`}
                  >
                    {v.ans}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Accordian;
