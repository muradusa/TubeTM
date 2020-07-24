import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Container, Typography, Grid, SvgIcon } from "@material-ui/core";
import background from "../../images/whitebackground.png";
import icon1 from "../../images/icon7.png";
import icon2 from "../../images/icon2.png";
import icon3 from "../../images/icon8.png";
import icon4 from "../../images/icon4.png";
import icon5 from "../../images/icon5.png";
import icon6 from "../../images/icon10.png";



const useStyles = makeStyles({
  root: {
    display: "flex",
    // backgroundColor: ,
    overflow: "hidden",
  },
  container: {
    // marginTop: ,
    // marginBottom: ,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // padding: ,
  },
  title: {
    // marginBottom: ,
  },
  number: {
    fontSize: 24,
    // fontFamily: ,
    // color: ,
    // fontWeight: ,
  },
  image: {
    height: 55,
    // marginTop: ,
    // marginBottom: ,
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
    opacity: 0.3,
  },
  button: {
    // marginTop: ,
  },
});



export default function ProductTestimonials() {
  const classes = useStyles();
  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img src={background} className={classes.curvyLines} alt="" />
        <Typography
          variant="h4"
          marked="center"
          className={classes.title}
          component="h2"
        >
          Capabilities
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>
                  <Typography>
                    General Contracting
                  </Typography>
                </div>
                <img src={icon1} className={classes.image} alt="Service1" />
                
                <Typography variant="h6" align="center">
                  We are doing awesoem job in construction. Please join the party!!!
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>
                  <Typography>
                    General Contracting
                  </Typography>
                </div>
                <img src={icon2} className={classes.image} alt="Service1" />
                
                <Typography variant="h6" align="center">
                  We are doing awesoem job in construction. Please join the party!!!
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>
                  <Typography>
                    General Contracting
                  </Typography>
                </div>
                <img src={icon3} className={classes.image} alt="Service1" />
                
                <Typography variant="h6" align="center">
                  We are doing awesoem job in construction. Please join the party!!!
                </Typography>
              </div>
            </Grid>
          
          </Grid>
        </div>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>
                  <Typography>
                    General Contracting
                  </Typography>
                </div>
                <img src={icon4} className={classes.image} alt="Service1" />
                
                <Typography variant="h6" align="center">
                  We are doing awesoem job in construction. Please join the party!!!
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>
                  <Typography>
                    General Contracting
                  </Typography>
                </div>
                <img src={icon5} className={classes.image} alt="Service1" />
                
                <Typography variant="h6" align="center">
                  We are doing awesoem job in construction. Please join the party!!!
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>
                  <Typography>
                    General Contracting
                  </Typography>
                </div>
                <img src={icon6} className={classes.image} alt="Service1" />
                
                <Typography variant="h6" align="center">
                  We are doing awesoem job in construction. Please join the party!!!
                </Typography>
              </div>
            </Grid>
          
          </Grid>
        </div>
        <Button>Contact Us</Button>
      </Container>
    </section>
  );
}
