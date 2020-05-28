import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Info from "../../Info";
import Header from "../../layout/header";
import SideNavBar from "../../layout/sideNavBar";
import TextFieldMolecule from "../../textField/textField";
import Footer from "../../layout/footer";

const useStyles = makeStyles((theme) => ({
  ssn: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(5),
    ...theme.typography.h6,
  },
  text: {
    marginTop: theme.spacing(35),
    textAlign: "center",
    ...theme.typography.h1,
  },
  page: {
    width: "75%",
    position:"relative"
  },
  components: {
    display: "flex",
  },
  info: {
    justifyContent: "center",
    display: "flex",
    marginTop: theme.spacing(20),
  },
  footer: {
    position:"absolute",
    width:"100%",
    bottom:theme.spacing(10)
  },
}));
export default function SSNInfo(props) {
  const classes = useStyles();
  const msg =
    "By clicking next button,I am providing written instructions under the Fair Credit Reporting Act authorizing Skyflow to obtain information solely to conduct a prequalification for credit and acknowledge that my credit will not be impacted as a result.";
  const handleSSN = (event) => {
    const val = event.target.value;
    if (val.length === 4) {
      event.target.value = val.replace(val, val + " ");
      console.log(event.target.value);
    }
    if (val.length === 6) {
      event.target.value = val + " ";
    }
    event.target.value = val.replace(/.(?=.{4,}$)/g, "*");
  };
  const goBack=()=>{
    props.history.push("/financialInformation/residence");
  };
  const goToSummary=()=>{
    props.history.push("/");
  };
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.components}>
        <SideNavBar />
        <div className={classes.page}>
          <div>
            <h1 className={classes.text}>
              <b>My Social Security Number is</b>
            </h1>
          </div>
          <div className={classes.ssn}>
            <TextFieldMolecule
              name="SOCIAL SECURITY NUMBER"
              handleChange={handleSSN}
            />
          </div>
          <div className={classes.info}>
            <Info information={msg} />
          </div>
          {/* <div className={classes.footer}>
            <Footer prev={goBack} next={goToSummary}/>
          </div> */}
        </div>
      </div>
    </div>
  );
}
