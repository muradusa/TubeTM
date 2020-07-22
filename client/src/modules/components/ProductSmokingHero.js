import React from 'react'
import { makeStyles, withTheme } from "@material-ui/styles";
import { Button, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
      },
      button: {
        border: '4px solid currentColor',
        borderRadius: 0,
        height: 'auto',
        padding: 5
      },
      link: {
        marginTop: 10,
        marginBottom: 10,
      },
      buoy: {
        width: 60,
      },
  });

export default function ProductSmokingHero() {
    const classes = useStyles();
    return (
        
            <Container className={classes.root} component="section">
              <Button className={classes.button}>
                <Typography variant="h4" component="span">
                  Got any questions? Need help?
                </Typography>
              </Button>
              <Typography variant="subtitle1" className={classes.link}>
                We are here to help. Get in touch!
              </Typography>
              <img src="/static/themes/onepirate/producBuoy.svg" className={classes.buoy} alt="buoy" />
            </Container>
        
    );
}

