import React from "react";
import "./Sponsor.css";

function Sponsor({ img }) {
  return (
    <div className="sponsor" style={{ backgroundImage: `url(${img})` }}>
      <span></span>
    </div>
  );
}

export default Sponsor;
