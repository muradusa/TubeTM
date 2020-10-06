import React from "react";
import "./Sponsors.css";
import Grid from "@material-ui/core/Grid";
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
      <Grid className="sponsors__row" container spacing={2}>
        <Grid
          className="sponsors__item"
          style={{ backgroundImage: `url(${one})` }}
          item
          xs={12}
          sm={6}
          lg={3}
        ></Grid>
        <Grid
          className="sponsors__item"
          style={{ backgroundImage: `url(${two})` }}
          item
          xs={12}
          sm={6}
          lg={3}
        ></Grid>
        <Grid
          className="sponsors__item"
          style={{ backgroundImage: `url(${three})` }}
          item
          xs={12}
          sm={6}
          lg={3}
        ></Grid>
        <Grid
          className="sponsors__item"
          style={{ backgroundImage: `url(${four})` }}
          item
          xs={12}
          sm={6}
          lg={3}
        ></Grid>
      </Grid>
      <Grid className="sponsors__row" container spacing={2}>
        <Grid
          className="sponsors__item"
          style={{ backgroundImage: `url(${five})` }}
          item
          xs={12}
          sm={6}
          lg={3}
        >
          {/* <img src={five} alt="" /> */}
        </Grid>
        <Grid
          className="sponsors__item"
          style={{ backgroundImage: `url(${six})` }}
          item
          xs={12}
          sm={6}
          lg={3}
        >
          {/* <img src={six} alt="" /> */}
        </Grid>
        <Grid
          className="sponsors__item"
          style={{ backgroundImage: `url(${seven})` }}
          item
          xs={12}
          sm={6}
          lg={3}
        >
          {/* <img src={seven} alt="" /> */}
        </Grid>
        <Grid
          className="sponsors__item"
          style={{ backgroundImage: `url(${eight})` }}
          item
          xs={12}
          sm={6}
          lg={3}
        >
          {/* <img src={eight} alt="" /> */}
        </Grid>
      </Grid>
    </div>
  );
}

export default Sponsors;
