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
    alignItems:"stretch"
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
export default function ResidenceInfo(props) {
  const classes = useStyles();
  const [value, setValue] = useState("");
  

  const handleRadioChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
    
  };
  const goBack=()=>{
    props.history.push("/financialInformation");
  };
  const goToSSNPage=()=>{
    props.history.push("/financialInformation/SSN");
  };
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.components}>
        <SideNavBar />
        <div className={classes.page}>
          <div>
            <h1 className={classes.text}>
              <b>I currently</b>
            </h1>
          </div>
          <div className={classes.radio}>
            <RadioGroup
              value={value}
              onChange={handleRadioChange}
              className={classes.radio}
            >
              <FormControlLabel
                value="Rent"
                control={<Radio />}
                label="Rent"
                className={classes.card}
              />
              <FormControlLabel
                value="Own"
                control={<Radio />}
                label="Own"
                className={classes.card}
              />
              <FormControlLabel
                value="Other"
                control={<Radio />}
                label="Other"
                className={classes.card}
              />
            </RadioGroup>
          </div>
          {value==="Rent" &&
          <div>
            
              <h1 className={classes.text}>
                <b>and my monthly housing expense is</b>
              </h1>
              <div className={classes.status}>
              <TextFieldMolecule  name="MONTHLY HOUSING EXPENSES"/>
              </div>
          </div>
        }
          {/* <div className={classes.footer}>
            <Footer prev={goBack} next={goToSSNPage}/>
          </div> */}
        </div>
      </div>
    </div>
  );
}
