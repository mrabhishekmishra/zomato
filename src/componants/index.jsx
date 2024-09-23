import React from "react";
import "./css.css";
import Header from "./Header";
import Order from "./Order";
import Collection from "./Collection";
import Location from './Location'
import Accordian from './Accordian'

const index = () => {
  return (
    <div className="border border-1 p-2 ">
      {/* header section start */}
      <section>
        <Header />
      </section>
      {/* order section start ..... */}
      <section>
        <Order />
      </section>
      {/* collection section start ... */}
      <section>
        <Collection />
      </section>
      {/* Location section  start  */}
      <section>
      <Location/>
      </section>
      {/* mobail section start  */}
      <section>
        <Accordian/>
      </section>
    </div>
  );
};

export default index;
