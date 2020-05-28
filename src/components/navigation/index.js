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
    marginLeft:theme.spacing(100)
  },
  next:{
      textAlign:"right"
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
            <Button
              className={classes.previous}
              onClick={previous}
              variant="outlined"
            >
              Previous
            </Button>
          )}
          {steps.indexOf(step) < steps.length - 1 && (
            <Button
              className={classes.next}
              onClick={next}
              variant="contained"
              color="primary"
            >
              Next
            </Button>
          )}
        </div>
      )}
    />
  );
}

export default Navigation;
