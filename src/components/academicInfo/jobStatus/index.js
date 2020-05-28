import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Info from "../../Info";
import Header from "../../layout/header";
import TextFieldMolecule from "../../textField/textField";
import Footer from "../../layout/footer";
import SideNavBar from "../../layout/sideNavBar";
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root:{
        // height:window.innerHeight
    },
  radio: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(5),
    ...theme.typography.h6,
    flexDirection:"row"
    
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
  card: {
    border:"1px solid #eaedf3",
    width:"280px",
    height:"80px"
  },
  status: {
      display:"flex",
    flexDirection:"row",
    justifyContent: "center",
  },
  
}));
export default function EmpComponent(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const [empStatus, setStatus] = useState(true);
  const goBack=()=>{
    props.history.push("/contactInformation/address");
  };
  const goToFinance=()=>{
    props.history.push("/financialInformation");
  };
  const handleRadioChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
    setStatus(!empStatus);
  };
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.components}>
        <SideNavBar />
        <div className={classes.page}>
          <div>
            <h1 className={classes.text}>
              <b>Do you have a job?</b>
            </h1>
          </div>
          <div className={classes.radio}>
            <RadioGroup
              value={value}
              onChange={handleRadioChange}
              className={classes.radio}
            >
              <FormControlLabel
                value="Yes"
                control={<Radio />}
                label="Yes"
                className={classes.card}
              />
              <FormControlLabel
                value="No"
                control={<Radio />}
                label="No"
                className={classes.card}
              />
            </RadioGroup>
          </div>
          <div hidden={empStatus} >
            
              <h1 className={classes.text}>
                <b>My employment status is</b>
              </h1>
              <div className={classes.status}>
              <RadioGroup className={classes.status}>
                <FormControlLabel
                  value="Employed Full-Time"
                  control={<Radio />}
                  label="Employed Full-Time"
                  className={classes.card}
                />
                <FormControlLabel
                  value="Employed Part-Time"
                  control={<Radio />}
                  label="Employed Part-Time"
                  className={classes.card}
                />
                <FormControlLabel
                  value="Self-Employed"
                  control={<Radio />}
                  label="Self-Employed"
                  className={classes.card}
                />
              </RadioGroup>
            </div>
          </div>

          {/* <div className={classes.footer}>
            <Footer prev={goBack} next={goToFinance}/>
          </div> */}
        </div>
      </div>
    </div>
  );
}
