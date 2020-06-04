import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Typography } from "@material-ui/core";
import Header from "../layout/header";
import finalImg from "../../assets/finalImage.png";
import theme from '../../utils/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  heading:{
      textAlign:"center",
      marginTop:theme.spacing(15)
  },
  content:{
      display:"flex",
      marginTop:theme.spacing(15),
      justifyContent:"center"
  },
  list:{
      ...theme.typography.h5,
      color:theme.palette.pending[0],
    //   padding:theme.spacing(10)
  }
}));
export default function FinalPage() {
  const classes = useStyles();
  return (
    <div>
      <Header pos="relative" />
      <Divider />
      <div className={classes.heading}>
        <Typography variant="h1">Almost Done!</Typography>
        <Typography variant="h3" style={{padding:theme.spacing(3)}}>
          Horaay,you are prequalified for OpenSky Edu.
        </Typography>
    </div>
        <div className={classes.content}>
          <img src={finalImg} style={{objectFit:"contain",padding:theme.spacing(5)}}></img>
          <div>
          <Typography variant="h1">OpenSky Edu</Typography>
          <Divider/>
          <div className={classes.list}>
          <ul >
              <li> Amazon prime student on us!</li>
              <li>Cell phone protection upto $600</li>
              <li>1% cashback on most purchases</li>
              <li>No Annual Fee</li>
              <li>No Foreign Transaction Fees</li>
              <li>20% Variable APR</li>
          </ul>
          </div>
          
        </div>
      </div>
    </div>
  );
}
