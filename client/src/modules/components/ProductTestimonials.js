import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Button, Container, Typography, Grid } from "@material-ui/core";
import background from "../../images/whitebackground.png";

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
                <div className={classes.number}>Construction Management</div>
                <img src="" className={classes.image} alt="Service1" />
                <Typography variant="h6" align="center">
                  Complex building projects and systems often require specific
                  project controls and enhanced communication between design and
                  building professionals. At W.E. Lyons Construction,
                  construction management has become a preferred project
                  delivery method in these complex instances because it provides
                  a professional and innovative approach to managing resources,
                  people, and technology. Our construction management services
                  include all the technical and administrative management
                  services to guide any project from preconstruction and the
                  initial bid stage, through the final walk through and
                  certificate of occupancy.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>General Contracting</div>
                <img src="" className={classes.image} alt="Service2" />
                <Typography variant="h6" align="center">
                  By working closely with the architect, engineers, and other
                  consultants early in the design and/or construction phase, we
                  are able to realize a majority of the construction savings.
                  Since teamwork and continuity are essential as a project moves
                  forward, from concept through completion, a company principal
                  sponsors each project team. Additionally, we have developed
                  close relationships with a substantial network of
                  subcontractors and are able to provide competitive pricing and
                  a quality product. Our past working experience with these
                  subcontractors has proven which teams are best for a
                  particular project. These relationships have survived the test
                  of aggressive schedules, poor weather, complex site conditions
                  and complicated reporting relationships.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <div className={classes.number}>Design Build</div>
                <img src="" className={classes.image} alt="Sevice3" />
                <Typography variant="h6" align="center">
                  W.E. Lyons Construction has delivered design-build projects
                  for over 80 years. Our extensive experience allows us to
                  streamline the process, anticipate problems and enhance
                  project performance. We bring owners, architects and engineers
                  together to provide a single source of coordination for each
                  project. Collectively, we examine design alternatives and then
                  openly communicate the impact of those choices to ensure all
                  construction requirements, budgets, and schedules are well
                  established prior to the start of construction. Throughout the
                  construction process, we provide experienced project
                  management and on-site project supervision to maintain
                  complete control of the quality of the project.
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
