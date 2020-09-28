import React from "react";
import "./Sponsors.css";
import Grid from "@material-ui/core/Grid";
import sponsor from "../../images/logo.png";

function Sponsors() {
  return (
    <div className="sponsors">
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} lg={3}>
          <img src={sponsor} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <img src={sponsor} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <img src={sponsor} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <img src={sponsor} alt="" />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} lg={3}>
          <img src={sponsor} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <img src={sponsor} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <img src={sponsor} alt="" />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <img src={sponsor} alt="" />
        </Grid>
      </Grid>
    </div>
  );
}

export default Sponsors;
