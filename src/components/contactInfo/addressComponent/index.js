import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Info from "../../Info";
import Header from "../../layout/header";
import TextFieldMolecule from "../../textField/textField";
import Footer from "../../layout/footer";
import SideNavBar from "../../layout/sideNavBar";

const useStyles = makeStyles((theme) => ({
  address: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(5),
    ...theme.typography.h6,
  },
  addresses: {
    
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

    position: "relative",
  },
  content: {
    marginLeft: theme.spacing(30),
    marginRight: theme.spacing(30),
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
    position: "absolute",
    width: "100%",
    bottom: theme.spacing(10),
  },
}));
export default function AddressComponent(props) {
  const classes = useStyles();
  const msg =
    "PO Box,PMB,business,temporary,and non-US based addresses are not accepted";
  const goBack = () => {
    props.history.push("/contactInformation");
  };
  const goToAcademicPage = () => {
    props.history.push("/academicInformation");
  };
  return (
    <div>
      <Header />
      <div className={classes.components}>
        <SideNavBar />
        <div className={classes.page}>
          <div className={classes.content}>
            <div>
              <h1 className={classes.text}>
                <b>My permanent address is</b>
              </h1>
            </div>
            <div className={classes.addresses}>
              <div className={classes.address}>
                <TextFieldMolecule
                  width="550px"
                  name="PERMANENT ADDRESS"
                ></TextFieldMolecule>
                <TextFieldMolecule name="APT/STREET"></TextFieldMolecule>
              </div>
              <div className={classes.address}>
                <TextFieldMolecule
                  width="290px"
                  name="ZIP CODE"
                ></TextFieldMolecule>
                <TextFieldMolecule
                  width="290px"
                  name="CITY"
                ></TextFieldMolecule>
                <TextFieldMolecule
                  width="290px"
                  name="STATE"
                ></TextFieldMolecule>
              </div>
            </div>
            <div className={classes.info}>
              <Info information={msg} />
            </div>
          </div>
          {/* <div className={classes.footer}>
            <Footer prev={goBack} next={goToAcademicPage} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
