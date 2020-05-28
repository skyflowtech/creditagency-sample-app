import React from 'react';
import { render } from 'react-dom';
import { Wizard, Steps, Step } from 'react-albus';

import Home from './Home/index';
import NamePage from './personalInfo/namePage/index';
import DobPage from './personalInfo/dobPage';
import Navigation from './navigation/index';
import PhoneNumberComponent from './contactInfo/phoneNumberComponent/index';
import AddressComponent from './contactInfo/addressComponent/index';
import EmpComponent from './academicInfo/jobStatus/index';
import IncomeInfo from './financialInfo/incomeInfo/index';
import ResidenceInfo from './financialInfo/residenceInfo/index';
import SSNInfo from './financialInfo/ssnInfo/index';
// import { history } from './history/index';

export default function WizardSteps({history}) {
  
    return(
      <Wizard >
        <Steps>
        {/* <Step id="Home">
            <Home/>
          </Step> */}
          <Step id="personalInformation">
            <NamePage/>
          </Step>
          <Step id="personalInformation/dob">
            <DobPage/>
          </Step>
          <Step id="contactInformation">
            <PhoneNumberComponent/>
          </Step>
          <Step id="contactInformation/address">
            <AddressComponent/>
          </Step>
          <Step id="academicInformation">
            <EmpComponent/>
          </Step>
          <Step id="financialInformation">
            <IncomeInfo/>
          </Step>
          <Step id="financialInformation/residence">
            <ResidenceInfo/>
          </Step>
          <Step id="SSNInfo">
            <SSNInfo/>
          </Step>
        </Steps>
        <Navigation />
      </Wizard>);
    
    }


