import React from "react";
import { Typography, Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../images/construction.png";

// const backgroundimage = "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg";

const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    height: "80vh",
    minHeight: 500,
    maxHeight: 1300,
    backgroundPosition: "center",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    opacity: 0.92,
  },

  header1: {
    marginTop: 10,
    color: "maroon",
    fontWeight: "bold",
  },
  header2: {
    marginTop: 90,
    textAlign: "center",
    color: "black",
    fontWeight: "bold",
    marginLeft: 50,
    marginRight: 50, 
    

  },
  header3: {
    position: "absolute",
    top: "50%",
    opacity: 0.72,
    backgroundColor: "maroon",
    color: "white",
  },
  header4: {
    position: "absolute",
    bottom: "10px",
  },
});

export default function ProductHero() {
  const classes = useStyles();

  return (
    <div>
      <section className={classes.container}>
        <Typography className={classes.header1} variant="h4">
          {/* W.E. Lyons Constructions */}
        </Typography>
        <Typography  variant="h5"  className={classes.header2}>    W.E. Lyons Construction is one of the oldest family-owned and managed general contracting and design-build firms in the Western United States, specializing in commercial, multi-family, retail, high-tech, manufacturing and industrial construction and management since 1926</Typography>
        {/* <Button className={classes.header3}>Register</Button> */}
        <Typography variant="h6"className={classes.header4}>
        {/* W.E. Lyons Construction is one of the oldest family-owned and managed general contracting and design-build firms in the Western United States, specializing in commercial, multi-family, retail, high-tech, manufacturing and industrial construction and management since 1926 */}
        </Typography>
      </section>
    </div>
  );
}
