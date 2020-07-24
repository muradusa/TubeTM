import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonBase, Container, Typography, Divider } from "@material-ui/core";
import img1 from "../../images/180Grand.png";
import img2 from "../../images/APP.png";
import img3 from "../../images/BerkleyLab.png";
import img4 from "../../images/Government.png";
import img5 from "../../images/Military.png";
import img6 from "../../images/PublicWorks.png";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    padding: 0,
    backgroundColor: "maroon",
  },
  images: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    botttom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

  },
  imageTitle: {
    position: "relative",
    
  },

  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
   
  },
  imageMarked : {
    height: 3,
    width: 18,
    // background: green,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    // transition: ,
  },
  text: {
    color: "white"
  },
});

const images = [
  {
    name: img1,
    title: "180 Grand",
    width: "40%",
  },
  {
    name: img2,
    title: "APP",
    width: "20%",
  },
  {
    name: img3,
    title: "Berkley Lab",
    width: "40%",
  },
  {
    name: img4,
    title: "Government",
    width: "38%",
  },
  {
    name: img5,
    title: "Military",
    width: "38%",
  },
  {
    name: img6,
    title: "Public Works",
    width: "24%",
  },
  {
    name: img4,
    title: "Government",
    width: "40%",
  },
  {
    name: img5,
    title: "Military",
    width: "20%",
  },
  {
    name: img6,
    title: "Public Works",
    width: "40%",
  },
];

// delete


export default function ProductCategories() {
  const classes = useStyles();

  const render = images.map((image) => {
    return (
      <ButtonBase
        key={image.title}
        className={classes.imageWrapper}
        style={{ width: image.width}}
      >
        <div
        className={classes.imageSrc}
        style={{ backgroundImage: `url(${image.name})` }}
        />
        <div className={classes.imageBackdrop}/>
        <div className={classes.imageButton}>
          <Typography component="h3" variant="h6" color="maroon" className={classes.imageTitle}>
            {image.title}
            <div className={classes.imageMarked} />
          </Typography>
        </div>
      </ButtonBase>
      
    )
  });

  return (
    <Container className={classes.root}>
      <Typography variant="h3" align="center" component="h2" marked="center" className={classes.text}>
        Completed projects
      </Typography>
      <div className={classes.images}>
        {render}
      </div>
    </Container>
  );
}
