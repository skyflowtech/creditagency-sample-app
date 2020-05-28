import React, { Fragment, Suspense } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Router, BrowserRouter, Switch } from 'react-router-dom';
import theme from './utils/theme';
import DobPage from './components/personalInfo/dobPage/index';
import Header from './components/layout/header';
import sideBar from './components/layout/sidebar';
import MainPage from './components/layout/mainContent';
import PhoneNumberComponent from './components/contactInfo/phoneNumberComponent';
import Footer from './components/layout/footer';
import AddressComponent from './components/contactInfo/addressComponent';
import EmpComponent from './components/academicInfo/jobStatus';
import ResidenceInfo from './components/financialInfo/residenceInfo';
import IncomeInfo from './components/financialInfo/incomeInfo';
import SSNInfo from './components/financialInfo/ssnInfo';
import WizardSteps from './components';



const App = (props) => {
  const Home = React.lazy(() => import('./components/Home/index'));
  const NamePage=React.lazy(()=>import('./components/personalInfo/namePage/index'));
  
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Fragment>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
            <Route path="/" exact component={Home} />
            {/* <Route path="/personalInformation" exact component={WizardSteps} /> */}
            {/* <Route path="/personalInformation/dob" exact component={DobPage} />
            <Route path="/contactInformation" exact component={PhoneNumberComponent} />
            <Route path="/contactInformation/address" exact component={AddressComponent} />
            <Route path="/academicInformation" exact component={EmpComponent}/>
            <Route path="/financialInformation" exact component={IncomeInfo}/>
            <Route path="/financialInformation/residence" exact component={ResidenceInfo}/>
            <Route path="/financialInformation/SSN" exact component={SSNInfo}/> */}
            </Switch>
          </Suspense>
        </Fragment>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
