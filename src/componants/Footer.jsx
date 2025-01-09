import React, { useState } from "react";
import Footerlogo from "../assets/images/footer-zomato-logo.avif";
import India from "../assets/images/india.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Google from "../assets/images/Google_Play_Store_badge_EN.svg";
import AppStor from "../assets/images/app-stor.png";

const Footer = () => {
  let footer_data = [
    "About Zomato",
    "Zomaverse",
    "For Restaurants",
    "Learn More",
  ];
  let about_zomato = [
    "Who We Are",
    "Blog",
    "Work With Us",
    "Investor Relations",
    "Report Fraud",
    "Press Kit",
    "Contact Us",
  ];
  let Zomaverse = [
    "Zomato",
    "Blinkit",
    "District",
    "Feeding India",
    "Hyperpure",
    "Zomato Live",
    "Zomatoland",
    "Weather Union",
  ];
  let Restaurants = ["Partner With Us", "App For You"];
  let Lern_more = ["Privacy", "Security", "Term"];
  let inner_data = [about_zomato, Zomaverse, Restaurants, Lern_more];

  return (
    <>
      <div className="container-fluid  p-3 bg-[#f8f8f8]">
        <div className="container  p-3 m-auto">
          <div className="footer_top border-b-2">
            <div className="flex justify-between">
              <img src={Footerlogo} alt="" className="w-[10%] text-[black] " />
              <div className="w-[300px] flex justify-around">
                <div className="border border-[#6a6868]  p-2 rounded-md  cursor-pointer flex justify-around items-center">
                  <img src={India} alt="" className="w-[30%]" />{" "}
                  <span>India</span>
                </div>
                <div className="border border-[#6a6868]  p-2 rounded-md  flex justify-around cursor-pointer items-center">
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className="text-[20px] mx-2"
                  />
                  <span className="text-[20px]">English</span>
                </div>
              </div>
            </div>
            <div className=" mt-5 p-2 flex justify-between">
              {footer_data.map((fv, fi) => {
                return (
                  <div className=" p-1">
                    <h1 className="text-[20px] font-sans ">{fv}</h1>
                    <ul>
                      {inner_data[fi].map((v, i) => {
                        console.log(v);
                        return <li className="text-[#6a6868] my-2">{v}</li>;
                      })}
                    </ul>
                  </div>
                );
              })}
              <div className="p-1s">
                <h1 className="text-[20px] font-sans ">Social Links</h1>
                <div className="w-[150px] flex justify-around m-3">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="bg-[black] text-[white] p-1 rounded-[50%] cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="bg-[black] text-[white] p-1 rounded-[50%] cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faSquareXTwitter}
                    className="bg-[black] text-[white] p-1 rounded-[50%] cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="bg-[black] text-[white] p-1 rounded-[50%] cursor-pointer"
                  />
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="bg-[black] text-[white] p-1 rounded-[50%] cursor-pointer"
                  />
                </div>
                <img
                  src={AppStor}
                  alt=""
                  className="w-[70%] mt-3 text-center cursor-pointer"
                />
                <img
                  src={Google}
                  alt=""
                  className="w-[70%] mt-3 text-center cursor-pointer"
                />
              </div>
            </div>
          </div>
          <span className="text-[#6a6868] pt-8">
            By continuing past this page, you agree to our Terms of Service,
            Cookie Policy, Privacy Policy and Content Policies. All trademarks
            are properties of their respective owners. 2008-2025 © Zomato™ Ltd.
            All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
