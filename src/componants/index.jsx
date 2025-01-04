import React from "react";
import "./css.css";
import Header from "./Header";
import Order from "./Order";
import Collection from "./Collection";
import Location from './Location'
import Accordian from './Accordian'
import APP from "./zomatoapp";
import Footer from "./Footer";

const index = () => {
  return (
    <div className="main">
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
        <APP/>
      </section>
      {/* accordian section start */}
      <section>
        <Accordian/>
      </section>
      {/* Footer section End\ */}
    <section>
      <Footer/>
    </section>
    </div>
  );
};

export default index;
