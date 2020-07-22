import React from "react";
import { Typography, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import background from "../../images/whitebackground.png";

import value from "../../images/sample.png";

const useStyles = makeStyles({
    root: {
      display: 'flex',
      // backgroundColor: ,
      overflow: 'hidden',
      
    },
    container: {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        width: "100%",
        height: "auto",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        
      },
    image:{
        height: 100,
        borderRadius: "50%",
        
    },
    
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 35,
      },
      title: {
          marginTop: 15,
          marginBottom: 30,
          color: "maroon"
      },
      description: {
          
          marginBottom: 30,
          color: "maroon"
      }

});

export default function ProductValues() {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        
        <Grid container spacing={5}>
          <Grid item xs={12} sm={4}>
            <div className={classes.item}>
              <img className={classes.image} src={background} alt="value1" />
              <Typography variant="h5" className={classes.title}>Title</Typography>
              <Typography className={classes.description}  variant="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </Typography>
              
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.item}>
              <img className={classes.image} src={background} alt="value1" />
              <Typography className={classes.title} variant="h5">Title</Typography>
              <Typography className={classes.description} variant="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
              
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className={classes.item}>
              <img className={classes.image} src={background} alt="value1" />
              <Typography className={classes.title} variant="h5">Title</Typography>
              <Typography className={classes.description}  variant="h6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Typography>
              
            </div>
          </Grid>
    
        </Grid>
      </Container>
    </section>
  );
}
