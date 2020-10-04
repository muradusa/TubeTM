import React from "react";
import "./Counter.css";
import CountUp from "react-countup";

function Counter({ number, text }) {
  return (
    <div className="counter">
      <div className="counter__container">
        <CountUp start={0} end={number} delay={0}>
          {({ countUpRef }) => (
            <div className="counter__number">
              <span className="number" ref={countUpRef} />
              <span>+</span>
            </div>
          )}
        </CountUp>

        <div className="counter__text">{text}</div>
      </div>
    </div>
  );
}

export default Counter;
