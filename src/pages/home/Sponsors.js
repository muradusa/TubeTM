import React from "react";
import "./Sponsors.css";
import Sponsor from "./Sponsor";

import one from "../../images/1.png";
import two from "../../images/2.png";
import three from "../../images/3.png";
import four from "../../images/4.png";
import five from "../../images/5.png";
import six from "../../images/6.png";
import seven from "../../images/7.png";
import eight from "../../images/8.png";

function Sponsors() {
  return (
    <div className="sponsors">
      <Sponsor img={one} />

      <Sponsor img={two} />

      <Sponsor img={three} />

      <Sponsor img={four} />

      <Sponsor img={five} />

      <Sponsor img={six} />

      <Sponsor img={seven} />

      <Sponsor img={eight} />
    </div>
  );
}

export default Sponsors;
