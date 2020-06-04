import React, { useState } from "react";
import { WithWizard } from "react-albus";
import Footer from "../layout/footer";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
   
    display: "flex",
    bottom: theme.spacing(10),
    width:"70%",
    position:"absolute",
    justifyContent: "space-between",
    marginLeft:theme.spacing(100),
    
  },
  next:{
      textAlign:"right",
      marginRight:0,
      width:"100%"
  },
  previous:{
      textAlign:"left"
  }

}));
function Navigation() {
  const classes = useStyles();
  return (
    <WithWizard
      render={({ next, previous, step, steps }) => (
        <div className={classes.footer}>
          {steps.indexOf(step) > 0 && (
            <div className={classes.previous}>
            <Button
              
              onClick={previous}
              variant="outlined"
            >
              Previous
            </Button>
            </div>
          )}
          {steps.indexOf(step) < steps.length - 1 && (
            <div className={classes.next}>
            <Button
              
              onClick={next}
              variant="contained"
              color="primary"
            >
              Next
            </Button>
            </div>
          )}
        </div>
      )}
    />
  );
}

export default Navigation;
