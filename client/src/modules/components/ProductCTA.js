import React from "react";
import { makeStyles, withTheme } from "@material-ui/styles";
import { Button, Container, Typography, Grid, Snackbar, TextField, Hidden } from "@material-ui/core";
import background from "../../images/whitebackground.png";

const useStyles = makeStyles({
  root: {
    marginTop: 100,
    marginBottom: 0,
    display: "flex",
  },
  cardWrapper: {
    zIndex: 1,
  },
  card: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "maroon",
    padding: 80,
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  button: {
    width: "100%",
  },
  imagesWrapper: {
    position: "relative",
  },
//   imageDots: {
//     position: "absolute",
//     top: -67,
//     left: -567,
//     right: 0,
//     bottom: 0,
//     width: "100%",
//     background: `url(${background})`,
//   },
  image: {
    position: "absolute",
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: "100%",
    maxWidth: 600,
  },
});

export default function ProductCTA(props) {
    const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6} className={classes.cardWrapper}>
          <div className={classes.card}>
            <form onSubmit={handleSubmit} className={classes.cardContent}>
              <Typography variant="h2" component="h2" gutterBottom>
                Receive offers
              </Typography>
              <Typography variant="h5">
                Taste the holidays of the everyday close to home.
              </Typography>
              <TextField
                noBorder
                className={classes.textField}
                placeholder="Your email"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className={classes.button}
              >
                Keep me updated
              </Button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} className={classes.imagesWrapper}>
          <Hidden smDown>
            <div className={classes.imageDots} />
            <img
              src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=750&q=80"
              alt="call to action"
              className={classes.image}
            />
          </Hidden>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        onClose={handleClose}
        message="We will send you our best offers, once a week."
      />
    </Container>
  );
}
