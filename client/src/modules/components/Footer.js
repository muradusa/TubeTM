import React from 'react'
import { makeStyles } from "@material-ui/styles";
import { Container, Typography, Grid, Link, Box } from "@material-ui/core";

const useStyles = makeStyles ({
    footer: {
        borderTop: `1px solid`,
        marginTop: 10,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "maroon",
        color: "white"
       
    }
  })

  const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    },
    {
      title: 'Resources',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];

export default function Footer() {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="white" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          {/* <Copyright /> */}
        </Box>
      </Container>
    )
}
