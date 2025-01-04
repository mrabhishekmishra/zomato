import React from "react";
import Footerlogo from'../assets/images/footer-zomato-logo.avif'
import India from '../assets/images/india.webp'

const Footer = () => {
  return (
    <>
      <div className="container-fluid border p-3 bg-[#f8f8f8]">
        <div className="container border p-3 m-auto">
            <div className="flex justify-between">
                <img src={Footerlogo} alt="" className="w-[150px] "/>
                <div>
                    <div className="border  p-3 rounded-md  flex justify-around items-center"><img src={India} alt="" className="w-[30%]"/> <span>India</span></div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
