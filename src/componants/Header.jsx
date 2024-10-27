import { FaLocationDot } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import React from 'react'
import Nav from './nav'


const Header = () => {
  return (
    <div>
      <>
        <div className='container-[100%] banner'>
            <div className='container mx-auto  '>
            <Nav/>     
        </div>
            <h1 className=' text-[78px] font-bold text-center  text-[white]'>Abhishek</h1>
            <p className='text-center text-[30px] py-3 text-[white] '> Discover the best food & drinks in Delhi NCR</p>
            <div>
                <div className="w-[900px] mx-auto p-3 bg-[white] flex justify-normal mt-3 mb-20 rounded-md items-center">
                  <div className="w-[30%] flex items-center justify-between">
                    <span><FaLocationDot className="text-[20px] text-[#ee2e4e]"/></span>
                      <input className="w-[100%] mx-1 border-none text-center" type="text" placeholder="Ywca, 1, Ashoka Rd, Hanu" />
                  </div>
                  <div className=" w-[70%] flex  p-1 Search">
                    <span><CiSearch className="text-[25px]" /></span>
                    <input className="w-[100%] mx-1 border-none text-start px-2" type="text" placeholder="Serch for  resturant, cuisine or a dish" />
                  </div>
               
                </div>
            </div>
        </div>
      </>
    </div>
  )
}

export default Header;