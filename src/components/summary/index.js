import React, { Component } from "react";
import { Divider, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../layout/header";
import lock from "../../assets/lock.png";
import theme from "../../utils/theme";
import assignment from "../../assets/assignment.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    position: "absolute",
    width: "100%",

    bottom: 0,
  },
  content: {
    display: "inline-block",
    justifyContent: "space-between",
  },
  note: {
    background: theme.palette.royalBlue[0],
    color: theme.palette.white[0],
    textAlign: "center",
  },
  message: {
    display: "flex",
    alignContent: "center",
  },
  buttons: {
    float: "right",
  },
  root: {
    flexGrow: 1,
  },
  body:{
    padding:theme.spacing(20),
    
    
  }
}));
export default function Summary() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header pos="relative"/>
      <Divider />
      <div className={classes.body}>
        
      <div style={{display:"flex"}}> <img style={{objectFit:"contain"}} src={assignment}/> <Typography variant="h1">Review Your Information</Typography></div>
       <Typography variant="h3" style={{color:theme.palette.pending[0]}}>Please review the summary of your application below,then submit to continue.</Typography>

      </div>
      <div className={classes.footer}>
        <div className={classes.note}>
          Please note : We do not share your personal information with
          unaffiliated third parties for their own marketing purposes.
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className={classes.content}>
            <div className={classes.message}>
              <img style={{ objectFit: "contain" }} src={lock}></img>
              <Typography style={{ padding: theme.spacing(2) }} variant="h3">
                Secure Form
              </Typography>
              <span
                style={{
                  padding: theme.spacing(2),
                  color: theme.palette.pending[0],
                  marginTop: theme.spacing(2),
                }}
              >
                Information Security:Skyflow uses encryption to secure the
                transmission of information to our site
              </span>
            </div>
          </div>
          <div className={classes.buttons}>
            <Button style={{ padding: theme.spacing(2) }} variant="outlined">
              Go Back & Edit
            </Button>
            <Button
              style={{ padding: theme.spacing(2) }}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
