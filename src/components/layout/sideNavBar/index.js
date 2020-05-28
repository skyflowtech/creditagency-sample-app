import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import secure from "../../../assets/secure.png";
import one from "../../../assets/1.png";
import two from "../../../assets/2.png";
import three from "../../../assets/3.png";
import four from "../../../assets/4.png";
import creditCard from "../../../assets/creditCard.png";
import Header from "../header";
import DobPage from "../../personalInfo/dobPage/index";
import ListItem from "../../listItem/listItem";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "relative",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[0],

    height: window.innerHeight,
  },

  infoList: {
    marginTop: theme.spacing(35),
    marginLeft: theme.spacing(10),
  },
  secure: {
    ...theme.typography.h6,
    marginLeft: theme.spacing(1),
    color: theme.palette.grey[1],
  },
  securee: {
    marginLeft: theme.spacing(30),
    position: "absolute",
    width: "100%",
    bottom: theme.spacing(10),
  },
}));
export default function SideNavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div>
        <div className={classes.infoList}>
          <ListItem img={one} text="PERSONAL INFORMATION" bool={true} />
          <ListItem img={two} text="CONTACT INFORMATION" bool={false} />
          <ListItem img={three} text="ACADEMIC INFORMATION" bool={false} />
          <ListItem img={four} text="FINANCIAL INFORMATION" bool={false} />
        </div>
      </div>
      <div className={classes.securee}>
        <img src={secure} alt="card"></img>
        <span className={classes.secure}>Secure Form</span>
      </div>
    </div>
  );
}
