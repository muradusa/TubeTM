import React from 'react';
import { AppBar, Toolbar, Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
    
      background: "maroon",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
    title: {
      fontSize: 24,
      color:"white",
      
    },

    left: {
        flex: 1,   
    },

    right: {
        flex:  1,
        display: "flex",
        justifyContent: "flex-end",
        
    
    },

    rightlinks: {
        color: "white",
        marginLeft: 6,
        // textTransform: "uppercase",
        
    },
    
  });

export default function Appbar() {

    const classes = useStyles();
    return (
        <div >
            <AppBar className={classes.root} position="static">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.left}>
                        <Link 
                        variant="h6"
                        underline="none"
                        className={classes.title}
                        href=""
                        >
                            W.E. Lyons Construction
                        </Link>
                    </div>
                    <div className={classes.right}>
                        <Link
                        variant="h8"
                        underline="none"
                        className={classes.rightlinks}
                        href=""
                        >About</Link>
                        <Link
                          variant="h8"
                          underline="none"
                          className={classes.rightlinks}
                          href=""
                        >Projects</Link>
                        <Link
                          variant="h8"
                          underline="none"
                          className={classes.rightlinks}
                          href=""
                        >Contacts</Link>
                        <Link
                          variant="h8"
                          underline="none"
                          className={classes.rightlinks}
                          href=""
                        >History</Link>
                    </div>
                </Toolbar>
            </AppBar>
            
        </div>
    )
}
